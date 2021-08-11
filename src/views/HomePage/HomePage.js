import React, { useState, useEffect } from 'react';
import { filmsAPI } from '../../services/filmsAPI';

import { FilmList } from '../../components/FilmList/FilmList';

export default function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    filmsAPI.getPopularFilms().then(setFilms);
  }, []);

  return (
    <>
      <h1>Top of this week </h1>
      <FilmList films={films} />
    </>
  );
}
