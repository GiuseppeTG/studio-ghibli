import React from 'react';
import PropTypes from 'prop-types';

export default function Film({
  title, description, releaseDate,
}) {
  return (
    <div className="film-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{releaseDate}</p>
    </div>
  );
}

Film.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
