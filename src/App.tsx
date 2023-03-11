import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
