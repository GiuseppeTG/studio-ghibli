/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../redux/characters/characters';

export default function CharacterList({ characterUrl }) {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const filmCharacters = characters.filter((element) => element.url === characterUrl);

  console.log(filmCharacters);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <>
      {
      filmCharacters.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))
    }
    </>
  );
}
