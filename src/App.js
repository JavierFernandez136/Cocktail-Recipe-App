import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProduccionPage from './pages/ProduccionPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produccion" element={<ProduccionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
