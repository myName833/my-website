import React, { useState, useEffect } from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MoreInfo from "./MoreInfo";
import GetInTouch from "./GetInTouch";

const Project = () => {
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
          <a className="navbar-home" href="/My-Website/">Johnny Hsieh</a>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/moreinfo">More Information</Link></li>
            <li><Link to="/getintouch">Get in Touch</Link></li>
          </ul>
        </nav>
      </header>
      <video autoPlay loop muted id="bg-video">
        <source src="background-vid.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <div className="info-grid">
          <div className={`info-card ${isLoaded ? 'loaded' : ''}`}>
            <h2 className="card-title">Recent Projects</h2>
            <ul className="card-list">
              <li><a id="project-title" href='https://dbhackathonclub.onrender.com/' target='_blank' rel="noopener noreferrer">DB Hackathon Club Website</a></li>
              <li><a id="project-github" href='https://github.com/myName833/Hackathon-Club-Website-new-' target='_blank' rel="noopener noreferrer">GitHub Link</a></li> 
              <img id="club-pic" src='club-pic.png' alt="Club Project" />
            </ul>
          </div>
          <div className={`info-card ${isLoaded ? 'loaded' : ''}`}>
            <h2 className="card-title">More?</h2>
            <ul className="card-list">
              <li><a id="project-title" href='https://myname833.github.io/JS-calculator/' target='_blank' rel="noopener noreferrer">JS Calculator</a></li>
              <li><a id="project-github" href='https://github.com/myName833/JS-calculator' target='_blank' rel="noopener noreferrer">GitHub Link</a></li>
              <img id="calc-pic" src='JS-pic.png' alt="Calculator Project" />
            </ul>
          </div>
          <div className={`info-card ${isLoaded ? 'loaded' : ''}`}>
            <h2 className="card-title">Even More??</h2>
            <ul className="card-list">
              <li><a id="project-title" href='https://myname833.github.io/weather-app/' target='_blank' rel="noopener noreferrer">Weather App</a></li>
              <li><a id="project-github" href='https://github.com/myName833/weather-app' target='_blank' rel="noopener noreferrer">GitHub Link</a></li>
              <img id="weather-pic" src='weather-pic.png' alt="Weather App Project" />
            </ul>
          </div>
          </div>
      </div>
      <footer className="main-footer">
        <p id="footer-copyright">© 2024 Johnny Hsieh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Project;