import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ErrMsg from 'components/ErrMsg';
import LoadingIndicator from 'components/LoadingIndicator';
import Card from './Card';

function CategoriesList({ loading, error, categories }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    return <ErrMsg primary >{error.message}</ErrMsg>;
  }

  if (categories !== false && categories !== undefined) {
    return <List items={categories || []} component={Card} />
  }

  return null;
}

CategoriesList.propTypes = {
  loading: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.any,
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default CategoriesList;
