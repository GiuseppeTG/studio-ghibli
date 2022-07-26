/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPeople } from '../../redux/people/people';

export default function PeopleList() {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);
  console.log(people);

  useEffect(() => {
    dispatch(getPeople());
  }, []);

  return (
    <>
      {
      people.map((character) => (
        <div className="character-container" key={character.id}>
          <h3 className="character-name">{character.name}</h3>
          <div className="character-info">
            <p>
              <strong>Age: </strong>
              {character.age}
            </p>
            <p>
              <strong>Gender: </strong>
              {character.gender}
            </p>
            <p>
              <strong>Eye color: </strong>
              {character.eye_color}
            </p>
            <p>
              <strong>Hair color: </strong>
              {character.hair_color}
            </p>
            <button type="button" className="go-to-movie-button">
              <Link to={character.films[0].slice(31, character.films[0].length)}>
                MOVIE
              </Link>
            </button>
          </div>
        </div>
      ))
    }
    </>
  );
}
