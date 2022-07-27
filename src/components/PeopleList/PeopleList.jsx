import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeople } from '../../redux/people/people';
import People from '../People/People';
import './PeopleList.scss';

export default function PeopleList() {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(getPeople());
  }, []);

  return (
    <section className="people-section">
      <h2 className="people-title">Human Characters</h2>
      <ul className="people-list">
        {
      people.map((character) => (
        <li key={character.id} className="character-container">
          <People
            name={character.name}
            age={character.age}
            gender={character.gender}
            eyeColor={character.eye_color}
            hairColor={character.hair_color}
            filmUrl={character.films[0].slice(31, character.films[0].length)}
          />
        </li>
      ))
    }
      </ul>
    </section>
  );
}
