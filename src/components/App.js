import React from "react";
import Header from "./Header";
import Home from "./Home";
import NavBar from "./NavBar";
import ArtControl from "./paintings/ArtControl";
import CollageControl from "./collages/CollageControl";
import About from "./About";
// import Footer from "./footer/Footer";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/paintings" element={<ArtControl />} />
        <Route path="/collages" element={<CollageControl />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
