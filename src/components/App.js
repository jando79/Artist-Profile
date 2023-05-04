import React from "react";
import Header from "./Header";
import Home from "./Home";
import ArtControl from "./paintings/ArtControl";
import CollageControl from "./collages/CollageControl";
import About from "./About";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/paintings" element={<ArtControl />} />
        <Route path="/collages" element={<CollageControl />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
