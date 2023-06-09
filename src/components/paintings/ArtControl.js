import React, { useState, useEffect } from 'react';
import NewArtForm from './NewArtForm';
import ArtList from './ArtList';
import EditArtForm from './EditArtForm';
import ArtDetail from './ArtDetail';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db, auth } from '../../firebase.js';

function ArtControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainArtList, setMainArtList] = useState([]);
  const [selectedArt, setSelectedArt] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "arts"),
      (collectionSnapshot) => {
        const arts = [];
        collectionSnapshot.forEach((doc) => {
          arts.push({
            imgUrl: doc.data().imgUrl,
            title: doc.data().title,
            year: doc.data().year,
            medium: doc.data().medium,
            about: doc.data().about,
            price: doc.data().price,
            id: doc.id
          });
        });
        setMainArtList(arts);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedArt != null) {
      setFormVisibleOnPage(false);
      setSelectedArt(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleDeletingArt = async (id) => {
    await deleteDoc(doc(db, "arts", id));
    setSelectedArt(null);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditingArtInList = async (artToEdit) => {
    const artRef = doc(db, "arts", artToEdit.id);
    await updateDoc(artRef, artToEdit);
    setEditing(false);
    setSelectedArt(null);
  };

  const handleAddingNewArtToList = async (newArtData) => {
    await addDoc(collection(db, "arts"), newArtData);
    setFormVisibleOnPage(false);
  };

  const handleChangingSelectedArt = (id) => {
    const selection = mainArtList.filter((art) => art.id === id)[0];
    setSelectedArt(selection);
  };

  const userIsAuthenticated = auth.currentUser != null;

  if (!userIsAuthenticated) {
    return (
      <React.Fragment>
        {/* <p>You must be signed in to incorporate changes to this site</p> */}
        {selectedArt ? (
          <React.Fragment>
            <ArtDetail art={selectedArt} />
            <button onClick={handleClick}>Return to Listings</button>
          </React.Fragment>
        ) : (
          <ArtList
            onArtSelection={handleChangingSelectedArt}
            artList={mainArtList}
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
        <EditArtForm
            art={selectedArt}
            onEditArt={handleEditingArtInList}
        />
    );
    buttonText = "Return to Listings";
} else if (selectedArt != null) {
    currentlyVisibleState = (
        <ArtDetail
            art={selectedArt}
            onClickingDelete={handleDeletingArt}
            onClickingEdit={handleEditClick}
        />
    );
    buttonText = "Return to Listings";
} else if (formVisibleOnPage) {
    currentlyVisibleState = (
        <NewArtForm onNewArtCreation={handleAddingNewArtToList} />
    );
    buttonText = "Return to Listings";
} else {
    currentlyVisibleState = (
        <ArtList
            onArtSelection={handleChangingSelectedArt}
            artList={mainArtList}
        />
    );
    buttonText = "Add Art";
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

export default ArtControl;
