/**
 *
 * CategoriesPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import injectReducer from 'utils/injectReducer';
import { makeSelectAllCategories } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadCategories } from './actions';
import Wrapper from './Wrapper';
import CategoriesList from 'components/CategoriesList';

export class CategoriesPage extends React.Component {
  componentDidMount() {
    this.props.initCategories();
  }

  render() {
    const { allCategories } = this.props;
    return (
      <div>
        <Helmet>
          <title>All Categories</title>
          <meta name="description" content="All categories available" />
        </Helmet>
        <div>
          <Wrapper>
            <CategoriesList
              loading={allCategories.loading}
              error={allCategories.error}
              categories={allCategories.categories} />
          </Wrapper>
        </div>
      </div>
    );
  }
}

CategoriesPage.propTypes = {
  allCategories: PropTypes.object,
  initCategories: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  allCategories: makeSelectAllCategories(),
});

function mapDispatchToProps(dispatch) {
  return {
    initCategories: () => dispatch(loadCategories()),
  };
}

const withReducer = injectReducer({ key: 'categoriesPage', reducer });
const withSaga = injectSaga({ key: 'categoriesPage', saga, mode: DAEMON });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(CategoriesPage);
