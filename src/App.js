import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkerForm from './components/workerForm';
import InventoryPage from './components/InventoryPage';
import SubmitPage from './components/SubmitPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WorkerForm />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/submit" element={<SubmitPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
