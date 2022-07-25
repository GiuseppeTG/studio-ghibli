import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Film from '../components/Film/Film';

export default function FilmsPage() {
  const params = useParams();
  const films = useSelector((state) => state.films);
  const movie = films.find((movie) => movie.id === params.id);

  return (
    <Film
      key={movie.id}
      id={movie.id}
      title={movie.title}
      originalTitle={movie.original_title_romanized}
      image={movie.image}
      description={movie.description}
      director={movie.director}
      producer={movie.producer}
      releaseDate={movie.release_date}
      runningTime={movie.running_time}
      rtScore={movie.rt_score}
      people={movie.people}
      filmUrl={movie.url}

    />
  );
}
