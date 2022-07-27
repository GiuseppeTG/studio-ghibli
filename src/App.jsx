import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/homePage';
import FilmsPage from './pages/filmsPage';
import PeoplePage from './pages/peoplePage';
import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/films/:id" element={<FilmsPage />} />
          <Route exact path="/people" element={<PeoplePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
