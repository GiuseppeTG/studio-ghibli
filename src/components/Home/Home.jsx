import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFilms } from '../../redux/films/films';
import Filter from '../Filter/Filter';
import mainImage from '../../images/title-logo.png';

export default function Home() {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films);
  const [filtered, setFiltered] = useState([]);
  const [activeDirector, setActiveDirector] = useState('All Movies');

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  return (
    <div className="homepage">
      <div className="welcome-container">
        <img src={mainImage} alt="studio ghibli logo" />
        <div className="main-text">
          <p className="app-descriprion">Here you can find all Studio Ghibli info about their films.</p>
        </div>
      </div>

      <div className="filter-container">
        <p className="filter-instruction">Filter by movie director</p>
        <Filter
          films={films}
          setFiltered={setFiltered}
          activeDirector={activeDirector}
          setActiveDirector={setActiveDirector}
        />
      </div>

      <div className="film-list-container">
        <ul className="film-list">
          {filtered.length === 0 && (

            films.map((film) => (

              <Link
                key={film.id}
                to={`/films/${film.id}`}
              >
                <div className="film-container" style={{ backgroundImage: `url(${film.image})` }} />
              </Link>
            ))
          )}
          {filtered.length !== 0 && (

            filtered.map((film) => (
              <Link
                key={film.id}
                to={`/films/${film.id}`}
              >
                <div className="film-container" style={{ backgroundImage: `url(${film.image})` }} />
              </Link>
            ))
          )}

        </ul>
      </div>
    </div>
  );
}
