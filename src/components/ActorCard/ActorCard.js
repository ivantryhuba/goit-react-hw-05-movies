import React from 'react';
import PropTypes from 'prop-types';

export const ActorCard = ({ profilePath, character, name }) => {
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w200${profilePath}`} alt={name} />
      <h3>{name}</h3>
      <p>{character}</p>
    </li>
  );
};

ActorCard.propTypes = {
  profilePath: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
