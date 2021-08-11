import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { filmsAPI } from '../../services/filmsAPI';
import { ReviewCard } from '../../components/ReviewCard/ReviewCard';

export const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    filmsAPI.getFilmReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <ReviewCard key={id} author={author} content={content} />
      ))}
    </ul>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.number.isRequired,
};
