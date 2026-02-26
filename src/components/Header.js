import React, { useState } from "react";
import "../styles/Header.css";
import download from "../assets/download.png";
import resumePdf from "../assets/Peguero_resume.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="header">
        <div className="header__logo">My Portfolio</div>

        {/* Hamburger */}
        <div
          className={`header__vector ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation - ONLY links inside */}
        <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
          <ul className="header__links">
            <li>
              <a href="#hero" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>

          {/* Resume button for MOBILE only - inside nav for dropdown */}
          <a
            href={resumePdf}
            download="Darilyn_Peguero_SWE_resume.pdf"
            className="resume__button resume__button--mobile"
            onClick={() => setMenuOpen(false)}
          >
            Resume
            <img src={download} alt="Download" className="hero__icon" />
          </a>
        </nav>

        {/* Resume button for DESKTOP - outside nav */}
        <a
          href={resumePdf}
          download="Darilyn_Peguero_Resume.pdf"
          className="resume__button resume__button--desktop"
        >
          Resume
          <img src={download} alt="Download" className="hero__icon" />
        </a>
      </header>

      {/* Spacer for mobile dropdown */}
      <div className={`header-spacer ${menuOpen ? "active" : ""}`}></div>
    </>
  );
};

export default Header;