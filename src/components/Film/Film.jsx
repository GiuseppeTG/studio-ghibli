/* eslint-disable react/prop-types */
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import CharacterList from '../CharacterList/CharacterList';

export default function Film({
  title,
  originalTitle,
  image,
  director,
  producer,
  releaseDate,
  runningTime,
  rtScore,
  people,
  description,
}) {
  return (
    <div className="movie-container">
      <div className="main-image-container">
        <img src={image} alt="movie" />
      </div>
      <div className="info-container">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-rt">
          <AiFillStar />
          {rtScore}
        </p>
        <p className="movie-original-title">{originalTitle}</p>
        <p className="movie-description">{description}</p>
        <p className="movie-release-date">{releaseDate}</p>
        <p className="movie-running-time">{runningTime}</p>
        <p className="movie-director">{director}</p>
        <p className="movie-producer">{producer}</p>
      </div>
      <h2 className="main-characters-container">
        {
          people.map((character) => (
            <CharacterList
              key={character}
              characterUrl={character}
            />
          ))
        }
      </h2>
    </div>
  );
}
