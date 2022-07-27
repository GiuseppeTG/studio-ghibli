import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function People({
  name, age, gender, eyeColor, hairColor, filmUrl,
}) {
  return (
    <div className="character-container">
      <h3 className="character-name">{name}</h3>
      <div className="character-info">
        <p>
          <strong>Age: </strong>
          {age}
        </p>
        <p>
          <strong>Gender: </strong>
          {gender}
        </p>
        <p>
          <strong>Eye color: </strong>
          {eyeColor}
        </p>
        <p>
          <strong>Hair color: </strong>
          {hairColor}
        </p>
      </div>
      <button type="button" className="go-to-movie-button">
        <Link to={filmUrl} className="movie-button-link">
          MOVIE
        </Link>
      </button>
    </div>
  );
}

People.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  eyeColor: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
  filmUrl: PropTypes.string.isRequired,
};
