import React, { useState, useEffect } from 'react';
import NewCollageForm from './NewCollageForm';
import CollageList from './CollageList';
import EditCollageForm from './EditCollageForm';
import CollageDetail from './CollageDetail';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db, auth } from '../../firebase.js';

function CollageControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainCollageList, setMainCollageList] = useState([]);
  const [selectedCollage, setSelectedCollage] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "collages"),
      (collectionSnapshot) => {
        const collages = [];
        collectionSnapshot.forEach((doc) => {
          collages.push({
            imgUrl: doc.data().imgUrl,
            title: doc.data().title,
            year: doc.data().year,
            about: doc.data().about,
            price: doc.data().price,
            id: doc.id
          });
        });
        setMainCollageList(collages);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedCollage != null) {
      setFormVisibleOnPage(false);
      setSelectedCollage(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleDeletingCollage = async (id) => {
    await deleteDoc(doc(db, "collages", id));
    setSelectedCollage(null);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditingCollageInList = async (collageToEdit) => {
    const collageRef = doc(db, "collages", collageToEdit.id);
    await updateDoc(collageRef, collageToEdit);
    setEditing(false);
    setSelectedCollage(null);
  };

  const handleAddingNewCollageToList = async (newCollageData) => {
    await addDoc(collection(db, "collages"), newCollageData);
    setFormVisibleOnPage(false);
  };

  const handleChangingSelectedCollage = (id) => {
    const selection = mainCollageList.filter((collage) => collage.id === id)[0];
    setSelectedCollage(selection);
  };

  const userIsAuthenticated = auth.currentUser != null;

  if (!userIsAuthenticated) {
    return (
      <React.Fragment>
        {/* <p>You must be signed in to incorporate changes to this site</p> */}
        {selectedCollage ? (
          <React.Fragment>
            <CollageDetail collage={selectedCollage} />
            <button onClick={handleClick}>Return to Listings</button>
          </React.Fragment>
        ) : (
          <CollageList
            onCollageSelection={handleChangingSelectedCollage}
            collageList={mainCollageList}
          />
        )}
        {error && <p>There was an error: {error}</p>}
      </React.Fragment>
    );
  } else {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>;
    } else if (editing) {
      currentlyVisibleState = (
        <EditCollageForm
            collage={selectedCollage}
            onEditCollage={handleEditingCollageInList}
        />
    );
    buttonText = "Return to Listings";
} else if (selectedCollage != null) {
    currentlyVisibleState = (
        <CollageDetail
            collage={selectedCollage}
            onClickingDelete={handleDeletingCollage}
            onClickingEdit={handleEditClick}
        />
    );
    buttonText = "Return to Listings";
} else if (formVisibleOnPage) {
    currentlyVisibleState = (
        <NewCollageForm onNewCollageCreation={handleAddingNewCollageToList} />
    );
    buttonText = "Return to Listings";
} else {
    currentlyVisibleState = (
        <CollageList
            onCollageSelection={handleChangingSelectedCollage}
            collageList={mainCollageList}
        />
    );
    buttonText = "Add Collage";
}

return (
    <React.Fragment>
        {currentlyVisibleState}
        {userIsAuthenticated && !formVisibleOnPage && (
            <button onClick={handleClick}>{buttonText}</button>
        )}
    </React.Fragment>
  ); }
}

export default CollageControl;