import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import Card from './Card';

function CategoriesList({ loading, error, categories }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (categories !== false && categories !== undefined) {
    return <List items={categories || []} component={Card} />
  }

  return null;
}

CategoriesList.propTypes = {
  loading: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.any,
  categories: PropTypes.PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default CategoriesList;
