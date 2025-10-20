import React from "react";
import "../styles/Contact.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

const ContactSection = () => {
  return (
    <section id="contacts" className="contact-section">
      <div className="contact-container">
        {/* Left Section: Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>

            {/* Button + Social Icons wrapper */}
            <div className="contact-button-socials">
              {/* Get In Touch Button */}
              <button type="submit" className="contact-button">
                Get In Touch
              </button>

              {/* Social Icons */}
              <div className="contact-socials-inline">
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
          </form>
        </div>

        {/* Right Section: Text */}
        <div className="contact-text">
          <h1 className="contact-title">
            Let's <span className="contact-title-mark">talk</span> and <br />
            create{" "}
            <span className="contact-title-special">something special</span>
          </h1>

          <p className="contact-description">
            I’m passionate about turning ideas into seamless, user-friendly
            digital experiences. My goal is to create interfaces that are both
            functional and memorable. Let’s collaborate to bring something
            impactful to life.
          </p>

          <p className="contact-email">darilyn.peguero@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
