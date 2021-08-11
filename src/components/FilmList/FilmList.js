import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

export const FilmList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, title, name }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`}>{title ? title : name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};
