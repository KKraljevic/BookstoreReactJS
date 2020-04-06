import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import Card from 'components/Card';

function BooksList({ loading, error, books }) {
  console.log(loading);
  console.log(error);
  console.log(books);

  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (books !== false && books !== undefined) {
    return <List items={books || []} component={Card} />
  }

  return null;
}

BooksList.propTypes = {
  loading: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.any,
  books: PropTypes.PropTypes.oneOfType([PropTypes.array,PropTypes.bool]),
};

export default BooksList;
