import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkerForm from './components/workerForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WorkerForm />} />
          <Route path="/inventory" element={<h2>inventory</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
