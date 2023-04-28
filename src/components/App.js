import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

function App(){
  return (
  <React.Fragment>
     <Header />
     <NavBar />
  </React.Fragment>
  );
}

export default App;