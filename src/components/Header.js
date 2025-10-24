import React, { useState } from "react";
import "../styles/Header.css";
import download from "../assets/download.png";
import resumePdf from "../assets/dpresume.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="header">
        <div className="header__logo">My Portfolio</div>

        {/* Hamburger / X */}
        <div
          className={`header__vector ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
          <div className="header__nav-container">
            <ul className="header__links">
              <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#contacts" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
            <a
              href={resumePdf}
              download="Darilyn_Peguero_Resume.pdf"
              className="resume__button"
              onClick={() => setMenuOpen(false)}
            >
              Resume
              <img src={download} alt="Download" className="hero__icon" />
            </a>
          </div>
        </nav>
      </header>

      {/* Spacer for mobile dropdown */}
      <div className={`header-spacer ${menuOpen ? "active" : ""}`}></div>
    </>
  );
};

export default Header;
