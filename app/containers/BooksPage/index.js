/**
 *
 * BooksPage
 *
 */

import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import messages from './messages';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useParams } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import injectReducer from 'utils/injectReducer';

import BooksWrapper from './BooksWrapper';
import BookList from 'components/BookList';
import H1 from 'components/H1';
import Wrapper from './Wrapper';
import { makeSelectResult } from 'containers/Search/selectors';
import { makeSelectCategoryBooks } from './selectors';
import { loadCategoryBooks } from './actions';
import reducer from './reducer';
import saga from './saga';
var modeSearch = null;

export class BooksPage extends React.Component {
  componentDidMount() {
    const url = this.props.match.url;
    if (url.includes('/categories')) {
      modeSearch = false;
      const { name } = this.props.match.params;
      this.props.initCategoryBooks(name);
    }
    else {
      modeSearch = true;
    }
    //if(path.contains('/search')) {}
  }

  render() {
    console.log(this.props);
    if (modeSearch) {
      const resultBooks = this.props.resultBooks;
      if (!resultBooks.books) {
        return (
          <Wrapper>
            <center>
              <H1><FormattedMessage {...messages.notFoundMsg} /></H1>
            </center>
          </Wrapper>
        );
      }
      return (
        <BooksWrapper>
          <BookList {...resultBooks} />
        </BooksWrapper>
      );
    }
    else {
      const categoryBooks = this.props.categoryBooks;
      if (!categoryBooks.books) {
        return (
          <Wrapper>
            <center>
              <H1><FormattedMessage {...messages.noCategoryBooks} /></H1>
            </center>
          </Wrapper>
        );
      }
      return (
        <BooksWrapper>
          <BookList {...categoryBooks} />
        </BooksWrapper>
      );
    }
  }
}

BooksPage.propTypes = {
  categoryBooks: PropTypes.object,
  resultBooks: PropTypes.object,
  initCategoryBooks: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  resultBooks: makeSelectResult(),
  categoryBooks: makeSelectCategoryBooks(),
});

function mapDispatchToProps(dispatch) {
  return {
    initCategoryBooks: id => dispatch(loadCategoryBooks(id)),
  };
}

const withReducer = injectReducer({ key: 'booksPage', reducer });
const withSaga = injectSaga({ key: 'booksPage', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withReducer,
  withConnect,
  memo,
)(BooksPage);
