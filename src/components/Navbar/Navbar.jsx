import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-and-text">
        <img alt="logo" />
        <p>
          <NavLink
            to="/"
            className="logo-text"
          >
            LOGO TEXT
          </NavLink>
        </p>
      </div>
      <ul className="links-list">
        <li>
          <NavLink
            to="/"
            className="link"
          >
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/films"
            className="link"
          >
            FILMS
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/people"
            className="link"
          >
            PEOPLE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
