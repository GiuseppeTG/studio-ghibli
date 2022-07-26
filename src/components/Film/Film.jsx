/* eslint-disable react/prop-types */
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

export default function Film({
  title,
  originalTitle,
  image,
  director,
  producer,
  releaseDate,
  runningTime,
  rtScore,
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
        <p className="movie-release-date">{`Release date: ${releaseDate}`}</p>
        <p className="movie-running-time">{`Running time: ${runningTime}`}</p>
        <p className="movie-director">{`Director: ${director}`}</p>
        <p className="movie-producer">{`Producer: ${producer}`}</p>
      </div>
    </div>
  );
}
