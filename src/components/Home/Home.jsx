import React from 'react';
import mainImage from '../../images/title-logo.png';

export default function Home() {
  return (
    <>
      <div className="welcome-container">
        <img src={mainImage} alt="logo and title" />
        <div className="main-text">
          <p className="app-descriprion">Here you can find all Studio Ghibli info about their films.</p>
        </div>
      </div>
      <div className="film-list-container">
        <ul className="film-list">
          <li>film2</li>
          <li>film1</li>
        </ul>
      </div>
    </>
  );
}
