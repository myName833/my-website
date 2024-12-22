import React, { useState, useEffect } from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MoreInfo from "./MoreInfo";


const GetInTouch = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <a className="navbar-home" href="/">Johnny Hsieh</a>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/moreinfo">More Information</Link></li>
          </ul>
        </nav>
      </header>
      <video autoPlay loop muted id="bg-video">
        <source src="background-vid.mp4" type="video/mp4" />
      </video>
      <div className="contact-container">
        <div className="info-grid-getintouch">
          <div className={`info-card full-width-section ${isLoaded ? 'loaded' : ''}`}>
            <h2 className="card-title">Get in Touch</h2>
            <div className="resource-grid">
              <div className="resource-item-getintouch">
                <h3>Email</h3>
                <img id="gmail-icon" src="gmail.png" alt="Gmail Icon" />
                <a href='https://mail.google.com/mail/u/1/#inbox?compose=CllgCJZcQxlSKdMqMvhFdVPFMPgspbnqQhnwhRJQgmRjvzDwKBWQqWDskHCjnmdbBqbmqFvdCHg' target='_blank'>EMAIL ME</a>
              </div>
              <div className="resource-item-getintouch">
                <h3>Instagram</h3>
                <img id="insta-icon" src="instagram.png" alt="Instagram Icon" />
                <a href='https://www.instagram.com/johnnyhsiehh/' target='_blank'>DM ME</a>
              </div>
              <div className="resource-item-getintouch">
                <h3>Discord</h3>
                <img id="discord-icon" src="discord.png" alt="Discord Icon" />
                <div> User Name:johnnyhaha268</div>
              </div>
              <div className="resource-item-getintouch">
                <h3>Phone Number</h3>
                <img id="phone-icon" src="phone-call.png" alt="Phone Icon" />
                <a href='tel:9514279030'>(951)-427-9030</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="main-footer">
        <p id="footer-copyright">© 2024 Johnny Hsieh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GetInTouch;
