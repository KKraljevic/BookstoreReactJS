/**
 *
 * MainContent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectFeaturedBooks,
  makeSelectLoadingFeaturedBooks,
  makeSelectErrorFeaturedBooks,
  makeSelectNewBooks,
  makeSelectLoadingNewBooks,
  makeSelectErrorNewBooks,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadFeaturedBooks, loadNewBooks } from './actions';
import styled from 'styled-components';
import messages from './messages';
import BookList from 'components/BookList'
import H3 from 'components/H3'
import LoadingIndicator from 'components/LoadingIndicator'

const SectionsWrapper = styled.div`
  background-color: transparent;
  padding: 1em 0;
`;

const FeaturedSection = styled.div`
  font: normal "century gothic", arial, sans-serif;
  background-color: darkcyan;
  color: white;
  padding: 1em 0;
`;

const NewBooksSection = styled.div`
  background-color: indianred;
  font: normal "century gothic", arial, sans-serif;
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
    return (
      <div>
        <Helmet>
          <title>MainContent</title>
          <meta name="description" content="Description of MainContent" />
        </Helmet>
        <SectionsWrapper>
        <NewBooksSection>
          <H3>New books in store:</H3>
          <BookList books={this.props.featuredBooks} loading={this.props.loadingNewBooks} error={this.props.errorNewBooks} />
          </NewBooksSection>
        <FeaturedSection>
          <H3>Featured books:</H3>
          <BookList books={this.props.newBooks} loading={this.props.loadingNewBooks} error={this.props.errorNewBooks} />
        </FeaturedSection>
      </SectionsWrapper>
      </div>
    );
  }
}

MainContent.propTypes = {
  loadingFeaturedBooks: PropTypes.bool,
  errorFeaturedBooks: PropTypes.any,
  featuredBooks: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadingNewBooks: PropTypes.bool,
  errorNewBooks: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  newBooks: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  initFeaturedBooks: PropTypes.func,
  initNewBooks: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loadingFeaturedBooks: makeSelectLoadingFeaturedBooks(),
  errorFeaturedBooks: makeSelectErrorFeaturedBooks(),
  featuredBooks: makeSelectFeaturedBooks(),
  loadingNewBooks: makeSelectLoadingNewBooks(),
  errorNewBooks: makeSelectErrorNewBooks(),
  newBooks: makeSelectNewBooks(),
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
