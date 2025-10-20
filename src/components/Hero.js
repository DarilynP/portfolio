import React from "react";
import "../styles/Hero.css";
import girlBanner from "../assets/girlbanner1.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__text">
        <h1>
          <span className="regular">Hi,</span>{" "}
          <span className="bold">I’m Darilyn</span>
        </h1>
        <h1 className="hero__headline">
          <span className="bold">Full Stack</span>{" "}
          <span className="bubble">Software Engineer</span> Based in{" "}
          <span className="bold">Boston</span>.
        </h1>
        <p>
          I build modern web applications using React, Node.js, and other
          technologies. I enjoy creating clean, efficient code that solves real
          problems. Turning ideas into functional, beautiful interfaces is what
          drives me every day.
        </p>

        {/* Social Icons */}
        <div className="hero__socials">
          <a
            href="https://github.com/DarilynP"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/darilyn-peguero-096750290/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="hero__illustration">
        <img src={girlBanner} alt="Hero illustration" />
      </div>
    </section>
  );
};

export default Hero;
