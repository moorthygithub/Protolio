import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navigation from "./Navigation/Navigaationbar";
import Home from "./Home/Home";
import About from "./About/About";
import Project from "./Project/project";
import Contact from "./Contact/Contact";
import Fotter from "./Fotter/Fotter";
import { Toaster } from "sonner";
function App() {
  return (
    <Router>
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          success: { style: { backgroundColor: "green", color: "white" } },
          error: { style: { backgroundColor: "red", color: "white" } },
        }}
      />
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Project" element={<Project />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      <Fotter></Fotter>
    </Router>
  );
}

export default App;
