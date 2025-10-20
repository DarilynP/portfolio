import React from "react";
import "../styles/About.css";
import aboutme from "../assets/aboutme.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image">
          <img src={aboutme} alt="about me illustration" />
        </div>
        <div className="about__text">
          <h2>About Me</h2>
          <p>
            I’m Darilyn, a Full Stack Software Engineer and designer with a passion
            for creating engaging, user-friendly web experiences. My journey into
            tech began with a curiosity about how websites and applications are
            built, which led me to explore coding and web development on my own.
            Determined to gain hands-on experience and sharpen my skills, I
            completed an intensive coding bootcamp where I learned React,
            JavaScript, and modern full stack development practices. Today, I love
            turning ideas into interactive and visually appealing web applications,
            combining creativity with clean, efficient code. I take pride in
            crafting solutions that are both functional and delightful for users,
            and I’m always eager to learn new technologies, experiment with modern
            tools, and push the boundaries of what’s possible on the web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
