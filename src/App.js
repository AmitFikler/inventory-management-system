import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Sign up</h1>} />
          <Route path="/inventory" element={<h2>inventory</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
