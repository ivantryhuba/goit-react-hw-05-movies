import React, { useState } from 'react';

import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const value = searchQuery.trim();

    if (value === '') {
      return;
    }
    onSubmit(value);

    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
