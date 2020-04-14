import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ErrMsg from 'components/ErrMsg';
import LoadingIndicator from 'components/LoadingIndicator';
import Card from 'components/Card';

function BooksList({ loading, error, books }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    return <ErrMsg primary >{error.message}</ErrMsg>;
  }

  if (books !== false && books !== undefined) {
    return <List items={books} component={Card} />
  }

  return null;
}

BooksList.propTypes = {
  loading: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.any,
  books: PropTypes.PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default BooksList;
