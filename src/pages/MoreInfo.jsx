import React, { useState, useEffect } from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const MoreInfo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the loaded state after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Cleanup the timer
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
            <li><Link to="/getintouch">Get in Touch</Link></li>
          </ul>
        </nav>
      </header>
      <video autoPlay loop muted id="bg-video-info">
        <source src="background-vid.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <div className="info-grid">
          <div className={`info-card ${isLoaded ? 'loaded' : ''}`}>
            <h2 className="card-title">About Me</h2>
            <ul className="card-list">
              <li>Age: 16</li>
              <li>Hobby: Basketball</li>
              <li>Skills: Programming, Basketball</li>
            </ul>
          </div>
          <div className={`info-card ${isLoaded ? 'loaded' : ''}`}>
            <h2 className="card-title">More?</h2>
            <ul className="card-list">
              <li>Nationality: American</li>
              <li>Interests: Programming, Engineering, Basketball</li>
              <li>Current School: Diamond Bar High School</li>
            </ul>
          </div>
          <div className={`info-card ${isLoaded ? 'loaded' : ''}`}>
            <h2 className="card-title">Find me?</h2>
            <ul className="card-list">
              <li><a id="insta-link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/johnnyhsiehh/">Insta</a></li>
              <li><a id="insta-link" target="_blank" rel="noopener noreferrer" href="https://github.com/myName833">GitHub</a></li>
              <li><a id="insta-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">Linkedin</a></li>
            </ul>
          </div>
          <div className={`info-card full-width-section ${isLoaded ? 'loaded' : ''}`}>
            <h2 className="card-title">Goals</h2>
            <div className="resource-grid">
              <div className="resource-item">
                <h3>My Goals</h3>
                <ul id="goals">
                  <li>Software Engineer</li>
                  <li>Work Life Balance</li>
                </ul>
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

export default MoreInfo;