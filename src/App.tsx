import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { BASE_URL } from './helpers/api';

function App() {
  const [keyword, setKeyword] = useState<string>('');

  const url = `${BASE_URL}/anime?q=${keyword}`;

  useEffect(() => {});

  return (
    <div className="App">
      <Header
        keywordValue={keyword}
        onKeywordChange={setKeyword}
      />
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
