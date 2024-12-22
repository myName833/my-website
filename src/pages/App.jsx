import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import MoreInfo from "./MoreInfo";
import Project from "./Project";
import GetInTouch from "./GetInTouch";

const App = () => {
  const navigate = useNavigate();
  const handleMoreInfo = () => {
    navigate('/moreinfo');
  };
  return (
    <div>
      <header>
        <nav className="navbar">
          <a className="navbar-home" href="/">Johnny Hsieh</a>
          <ul className="navbar-links">
            <li><Link to="/moreinfo">More Information</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/getintouch">Get in Touch</Link></li>
          </ul>
      </nav>
        <video autoPlay loop muted id="bg-home">
            <source src="background-vid.mp4" type="video/mp4" />
          </video>
    </header>
      <section className="home-body">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <p id="about-me">
                  Hi! My name is Johnny Hsieh, I have passion for technology and problem-solving. I aspire to become a software engineer, using creativity and technical skills to develop innovative solutions.
                </p>
                <img id="my-pic" src="my-pic.jpg" alt="Johnny Hsieh" />
                <button id="get-started-button" type="button" onClick={handleMoreInfo}>
                Explore More {'>'}
                </button>
                
              </div>
            }
          />
          <Route path="/moreinfo" element={<MoreInfo />} />
          <Route path="/project" element={<Project />} />
          <Route path="/getintouch" element={<GetInTouch />} />
        </Routes>
      </section>

      <footer className="main-footer">
        <p id="footer-copyright">© 2024 Johnny Hsieh. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default App;
