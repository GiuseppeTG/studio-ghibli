import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import totoroIcon from '../../images/totoroIcon.png';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((isActive) => !isActive);
  };

  return (

    <nav className="navbar">
      <NavLink
        to="/"
        className="logo-text"
      >
        <div className="logo-and-text">
          <img alt="logo" src={totoroIcon} className="totoro-icon" />
          <p>
            STUDIO GHIBLI
          </p>
        </div>
      </NavLink>
      <ul className={isActive ? 'active links-list' : 'links-list'}>
        <li>
          <NavLink
            to="/"
            className="link"
            onClick={handleClick}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/people"
            className="link"
            onClick={handleClick}
          >
            PEOPLE
          </NavLink>
        </li>
      </ul>
      <button type="button" className={isActive ? 'active hamburger' : 'hamburger'} onClick={handleClick}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  );
}
