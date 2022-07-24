import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mainImage from '../../images/title-logo.png';
import { getFilms } from '../../redux/films/films';
import Film from '../Film/Film';
import Filter from '../Filter/Filter';

export default function Home() {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films);
  const [filtered, setFiltered] = useState([]);
  const [activeDirector, setActiveDirector] = useState('All Movies');

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  console.log(filtered);

  return (
    <div className="homepage">
      <div className="welcome-container">
        <img src={mainImage} alt="logo and title" />
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
              <Film
                key={film.id}
                title={film.title}
                image={film.image}
                description={film.description}
                releaseDate={film.release_date}
              />
            ))
          )}
          {filtered.length !== 0 && (

            filtered.map((film) => (
              <Film
                key={film.id}
                title={film.title}
                image={film.image}
                description={film.description}
                releaseDate={film.release_date}
              />
            ))
          )}

        </ul>
      </div>
    </div>
  );
}
