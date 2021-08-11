import React, { useState, useEffect } from 'react';
import { filmsAPI } from '../../services/filmsAPI';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { FilmList } from '../../components/FilmList/FilmList';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [films, setFilms] = useState([]);

  const handleFilmSubmit = searchQuery => {
    setSearchQuery(searchQuery.toLowerCase().trim());
    setFilms([]);
  };

  useEffect(() => {
    fetchFilms();
  }, [searchQuery]);

  const fetchFilms = () => {
    if (!searchQuery) {
      return;
    }
    filmsAPI.getFilmByName(searchQuery).then(results => {
      setFilms([...results]);
    });
  };

  return (
    <>
      <SearchForm onSubmit={handleFilmSubmit} />
      <FilmList films={films} />
    </>
  );
}
