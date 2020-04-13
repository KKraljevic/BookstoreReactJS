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
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'components/Toggle/styleToggle.css';
import BooksWrapper from './BooksWrapper';
import BookList from 'components/BookList';
import H1 from 'components/H1';
import Wrapper from './Wrapper';
import { makeSelectResult } from 'containers/Search/selectors';
import { makeSelectCategoryBooks } from './selectors';
import { loadCategoryBooks } from './actions';
import reducer from './reducer';
import saga from './saga';
import Form from './Form';

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
  }
  componentWillReceiveProps(newProps) {
    console.log(newProps.resultBooks);
  }
  render() {
    console.log(this.props);
    const fields = [
      'title', 'category', 'writer', 'popularity', 'publishing date', 'price'
    ];
    const options = [
      'asc', 'desc'
    ];
    const filters = [
      { value: 'none', label: 'None' },
      {
        type: 'group', name: 'Category', items: [
          { value: 'one', label: 'Fiction' },
          { value: 'two', label: 'Software', className: 'myOptionClassName' },
        ]
      },
      {
        type: 'group', name: 'Publishing Year', items: [
          { value: 'three', label: '2019', className: 'myOptionClassName' },
          { value: 'four', label: '2020' }
        ]
      },
      {
        type: 'group', name: 'Price', items: [
          { value: 'five', label: '<100' },
          { value: 'six', label: '100-300' }
        ]
      }
    ];

    if (modeSearch) {
      const resultBooks = this.props.resultBooks;

      if (!resultBooks.books[0]) {
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
          <Form>
            <label htmlFor="sort">Sort By </label>
            <Dropdown
              id="sort"
              className="dropdownRoot"
              controlClassName="dropdownControl"
              options={fields} onChange={this._onSelect}
              value={fields[3]}
            />
            <label htmlFor="order">Order</label>
            <Dropdown
              id="order"
              className="dropdownRoot"
              controlClassName="dropdownControl"
              options={options} onChange={this._onSelect}
              value={options[1]}
            />
            <label htmlFor="filter">Filter</label>
            <Dropdown
              id="filter"
              className="dropdownRoot"
              controlClassName="dropdownControl"
              options={filters} onChange={this._onSelect}
              placeholder="Choose a filter"
            />
          </Form>
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
  pageAttributes: PropTypes.object,
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
