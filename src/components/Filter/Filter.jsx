/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';

export default function Filter({
  films,
  setFiltered,
  activeDirector,
  setActiveDirector,
}) {
  const filterInput = useRef();

  console.log(`active director: ${activeDirector}`);

  useEffect(() => {
    if (activeDirector === 'All Movies') {
      setFiltered(films);
      return;
    }
    const filteredFilms = films.filter((film) => film.director === activeDirector);

    setFiltered(filteredFilms);
  }, [activeDirector]);

  return (

    <select name="director" ref={filterInput} onLoad={() => setActiveDirector(filterInput.current.value)} onChange={() => setActiveDirector(filterInput.current.value)} id="filteri">
      <option value="All Movies">All Movies</option>
      <option value="Hayao Miyazaki">Hayao Miyazaki</option>
      <option value="Isao Takahata">Isao Takahata</option>
      <option value="Yoshifumi Kondō">Yoshifumi Kondō</option>
      <option value="Hiroyuki Morita">Hiroyuki Morita</option>
      <option value="Gorō Miyazaki">Gorō Miyazaki</option>
      <option value="Hiromasa Yonebayashi">Hiromasa Yonebayashi</option>
      <option value="Michaël Dudok de Wit">Michaël Dudok de Wit</option>
    </select>

  );
}
