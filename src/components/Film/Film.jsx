import React from 'react';
import { AiFillStar, AiOutlineLeft } from 'react-icons/ai';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Film({
  title,
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

      <div className="main-image-container" style={{ backgroundImage: `url(${image})` }} />
      <div className="info-container">
        <div className="main-info">
          <p className="movie-title">{title}</p>
          <Link
            className="return-button"
            to="/"
          >
            <AiOutlineLeft className="return-icon" />
          </Link>
        </div>
        <div className="progress" style={{ width: 60, height: 60 }}>
          <CircularProgressbarWithChildren
            value={rtScore}
            styles={buildStyles({
              pathColor: 'rgb(228, 227, 141)',
              textColor: 'black',
              trailColor: 'rgba(0, 0, 0, 0.4)',
              backgroundColor: 'transparent',
            })}
          >
            <AiFillStar className="star-icon" />
            <p>{rtScore}</p>
          </CircularProgressbarWithChildren>

        </div>
        <p className="movie-description">{description}</p>
        <div className="secondary-info">
          <p className="movie-release-date">{`Release date: ${releaseDate}`}</p>
          <p className="movie-running-time">{`Running time: ${runningTime}`}</p>
          <p className="movie-director">{`Director: ${director}`}</p>
          <p className="movie-producer">{`Producer: ${producer}`}</p>
        </div>
      </div>
    </div>
  );
}

Film.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  runningTime: PropTypes.string.isRequired,
  rtScore: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
