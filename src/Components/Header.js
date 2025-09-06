import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />

        <h1 className="slogan">TechVision</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
