/* eslint-disable react/prop-types */
import React from 'react';

export default function Film({
  image,
}) {
  return (
    <div className="film-container" style={{ backgroundImage: `url(${image})` }} />
  );
}
