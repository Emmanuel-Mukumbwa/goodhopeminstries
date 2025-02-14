// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BibleStudyGroupsPage from './pages/BibleStudyGroupsPage';
import TestimoniesPage from './pages/TestimoniesPage';
import './App.css';
import PrisonMinistryPage from './pages/PrisonMinistryPage';
import SewingSchoolPage from './pages/SewingSchoolPage';
import StoriesPage from './pages/StoriesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/biblestudygroups" element={<BibleStudyGroupsPage />} />
          <Route path="/testimonies" element={<TestimoniesPage />} />
          <Route path="/prisonministry" element={<PrisonMinistryPage />} />
          <Route path="/sewingschool" element={<SewingSchoolPage />} />
          <Route path="/stories" element={<StoriesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;