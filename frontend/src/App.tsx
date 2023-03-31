// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import TopBanner from './Blah';
// import MovieList from './Movies';
import Collection from './pages/Collection';
import Layout from './pages/Layout';
import Podcasts from './pages/Podcasts';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Podcasts" element={<Podcasts />} />
          <Route path="Collection" element={<Collection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
