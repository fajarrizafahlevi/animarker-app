import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BASE_URL } from './helpers/api';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import './App.css';
import axios from 'axios';

interface Image {
  webp: { large_image_url: string };
}

interface Anime {
  mal_id: string;
  images: Image;
  title: string;
  synopsis: string;
}

function App() {
  const [keyword, setKeyword] = useState<string>('');

  const url = `${BASE_URL}/anime?q=${keyword}`;

  const [animes, setAnimes] = useState<Anime[]>([]);

  async function getSearchedAnime() {
    try {
      const res = await axios.get(url);
      setAnimes(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Header
        keywordValue={keyword}
        onKeywordChange={setKeyword}
        findAnime={getSearchedAnime}
      />
      <Routes>
        <Route
          path="/"
          element={<Home animes={animes} />}
        />
      </Routes>
    </div>
  );
}

export default App;
