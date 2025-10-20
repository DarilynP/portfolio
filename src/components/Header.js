import React from "react";
import "../styles/Header.css";
import "../styles/Projects.css";
import download from "../assets/download.png";
import resumePdf from"../assets/dpresume.pdf";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">My Portfolio</div>
      <nav className="header__nav">
        <ul className="header__links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
        <a
          href={resumePdf}
          download="Darilyn_Peguero_Resume.pdf" // Name the downloaded file
          className="resume__button"
        >
          Resume
          <img src={download} alt="Download" className="hero__icon" />

        </a>
      </nav>
    </header>
  );
};

export default Header;
