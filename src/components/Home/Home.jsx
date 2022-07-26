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

      <Filter
        films={films}
        setFiltered={setFiltered}
        activeDirector={activeDirector}
        setActiveDirector={setActiveDirector}
        className="filter-component"
      />

      <p className="home-results">{filtered.length ? `Showing ${filtered.length} results` : 'Showing 22 results'}</p>
      <div className="film-list-container">
        <ul className="film-list">
          {filtered.length === 0 && (

            films.map((film) => (
              <li key={film.id} data-testid="listed-movie">

                <Link
                  to={`/films/${film.id}`}
                >
                  <div className="film-container" style={{ backgroundImage: `url(${film.image})` }} />
                </Link>
              </li>
            ))
          )}
          {filtered.length !== 0 && (

            filtered.map((film) => (

              <li key={film.id} data-testid="listed-movie">
                <Link
                  key={film.id}
                  to={`/films/${film.id}`}
                >
                  <div className="film-container" style={{ backgroundImage: `url(${film.image})` }} />
                </Link>
              </li>
            ))
          )}

        </ul>
      </div>
    </div>
  );
}
