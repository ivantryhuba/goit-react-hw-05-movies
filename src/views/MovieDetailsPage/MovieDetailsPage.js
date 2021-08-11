import React, { useState, useEffect, lazy } from 'react';
import { Route, NavLink, useParams, useRouteMatch } from 'react-router-dom';
import { filmsAPI } from '../../services/filmsAPI';

import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    filmsAPI.getFilmInfo(movieId).then(setFilm);
  }, [movieId]);

  return (
    <>
      {film && (
        <>
          <div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                alt={film.original_title}
              />
            </div>

            <div>
              <h1>{film.original_title}</h1>
              <p>User Score: {film.vote_average * 10}%</p>

              <h2>Overview</h2>
              <p>{film.overview}</p>

              <h3>Genres</h3>
              <ul>
                {film.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink to={`${url}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink exact to={`${url}/reviews`}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>

          <Route path={`${path}/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </>
      )}
    </>
  );
}