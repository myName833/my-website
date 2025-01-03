import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App.jsx';
import MoreInfo from './pages/MoreInfo.jsx';
import Project from './pages/Project.jsx';
import GetInTouch from './pages/GetInTouch.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/moreinfo" element={<MoreInfo />} />
        <Route path="/project" element={<Project />} />
        <Route path="/getintouch" element={<GetInTouch />} />
        {/* Catch-all route */}
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
