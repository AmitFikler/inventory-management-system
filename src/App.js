import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkerForm from './components/workerForm';
import InventoryList from './components/InventoryList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WorkerForm />} />
          <Route path="/inventory" element={<InventoryList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
