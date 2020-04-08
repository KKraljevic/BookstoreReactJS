/**
 *
 * BooksPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectErrorResult } from '../Search/selectors';
import {
  makeSelectResult,
  makeSelectLoadingResult,
} from 'containers/Search/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import BooksWrapper from './BooksWrapper';
import BookList from 'components/BookList';
import H1 from 'components/H1';
import Wrapper from './Wrapper';

export class BooksPage extends React.Component {
  render() {
    console.log(this.props);
    const resultBooks = this.props.resultBooks;
    if (!resultBooks.books) {
      return (
        <Wrapper>
          <center>
            <H1> No books found! Try with other trems...</H1>
          </center>
        </Wrapper>
      );
    }
    return (
      <div>
        <Helmet>
          <title>BooksPage</title>
          <meta name="description" content="Description of BooksPage" />
        </Helmet>
        <div>
          <BooksWrapper>
            <BookList {...resultBooks} />
          </BooksWrapper>
        </div>
      </div>
    );
  }
}

BooksPage.propTypes = {
  resultBooks: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  resultBooks: makeSelectResult(),
});

const withReducer = injectReducer({ key: 'booksPage', reducer });
const withSaga = injectSaga({ key: 'booksPage', saga });
const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withSaga,
  withReducer,
  withConnect,
  memo,
)(BooksPage);
