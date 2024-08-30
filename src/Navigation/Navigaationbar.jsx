import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const Email = () => {
    return <a href="mailto:moorthy.chandiran21@gmail.com">Email</a>;
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="24"
          height="24"
        >
          <a href="/" className="navbar-logo">
            <path
              fill="#72a7fd"
              d="M22.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9L224 294.3 389.4 46.2c7.8-11.7 22.4-17 35.9-12.9S448 49.9 448 64V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V169.7L250.6 369.8c-5.9 8.9-15.9 14.2-26.6 14.2s-20.7-5.3-26.6-14.2L64 169.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 49.9 9.2 37.5 22.7 33.4z"
            />
          </a>
        </svg>
        {/* <div className="navbar-logo">
          
            Portfolio
         
        </div> */}
      </div>
      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        {/* <Link to="/home" className="navbar-link" onClick={toggleMenu}>
          Home
        </Link> */}
        <Link to="/about" className="navbar-link" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/Project" className="navbar-link" onClick={toggleMenu}>
          Projects
        </Link>
        <Link to="/contact" className="navbar-link" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <div>{Email}</div>
    </nav>
  );
}

export default Navigation;
