/**
 *
 * MainContent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import injectReducer from 'utils/injectReducer';
import styled from 'styled-components';
import BookList from 'components/BookList';
import H3 from 'components/H3';
import { makeSelectFeaturedBooks, makeSelectNewBooks } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadFeaturedBooks, loadNewBooks } from './actions';

const SectionsWrapper = styled.div`
  background-color: transparent;
  padding: 1em 0;
`;

const FeaturedSection = styled.div`
  font: normal 'century gothic', arial, sans-serif;
  background-color: darkcyan;
  color: white;
  padding: 1em 0;
`;

const NewBooksSection = styled.div`
  background-color: indianred;
  font: normal 'century gothic', arial, sans-serif;
  padding: 1em 0;
  color: white;
`;

export class MainContent extends React.Component {
  componentDidMount() {
    this.props.initNewBooks();
    this.props.initFeaturedBooks();
    console.log(this.props);
  }

  render() {
    const { newBooks, featuredBooks } = this.props;
    return (
      <div>
        <Helmet>
          <title>MainContent</title>
          <meta name="description" content="Description of MainContent" />
        </Helmet>
        <SectionsWrapper>
          <NewBooksSection>
            <H3>New books in store:</H3>
            <BookList
              books={newBooks.books}
              loading={newBooks.loading}
              error={newBooks.error}
            />
          </NewBooksSection>
          <FeaturedSection>
            <H3>Featured books:</H3>
            <BookList
              books={featuredBooks.books}
              loading={featuredBooks.loading}
              error={featuredBooks.error}
            />
          </FeaturedSection>
        </SectionsWrapper>
      </div>
    );
  }
}

MainContent.propTypes = {
  newBooks: PropTypes.object,
  featuredBooks: PropTypes.object,
  initFeaturedBooks: PropTypes.func,
  initNewBooks: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newBooks: makeSelectNewBooks(),
  featuredBooks: makeSelectFeaturedBooks(),
});

function mapDispatchToProps(dispatch) {
  return {
    initFeaturedBooks: () => dispatch(loadFeaturedBooks()),
    initNewBooks: () => dispatch(loadNewBooks()),
  };
}

const withReducer = injectReducer({ key: 'mainContent', reducer });
const withSaga = injectSaga({ key: 'mainContent', saga, mode: DAEMON });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(MainContent);
