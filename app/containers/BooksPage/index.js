/**
 *
 * BooksPage
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import messages from './messages';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectResult, makeSelectPaginationResult } from 'containers/Search/selectors';
import { changeSort, changeOrder, changeSize, changePage } from '../Search/actions';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'components/Toggle/styleToggle.css';
import BooksWrapper from './BooksWrapper';
import ButtonsWrapper from './ButtonsWrapper';
import Wrapper from './Wrapper';
import BookList from 'components/BookList';
import PageButton from './PageButton';
import Form from './Form';
import H1 from 'components/H1';

export class BooksPage extends React.Component {

  render() {
    console.log("BooksPage");
    console.log(this.props);
    const { resultBooks, resultPagination } = this.props;

    let content = <div />;

    const fields = [
      //      { value: 'title.keyword', label: 'title' },
      { value: 'category.name.keyword', label: 'category' },
      { value: 'writer.firstName.keyword', label: 'writer' },
      { value: 'unitsSold', label: 'popularity' },
      { value: 'publishingDate', label: 'publishing date' },
      { value: 'price', label: 'price' },
    ];
    const order = [
      { value: 'ASC', label: 'asc' },
      { value: 'DESC', label: 'desc' },
    ];
    const sizes = [
      { value: '4', label: '4' },
      { value: '8', label: '8' },
      { value: '12', label: '12' },
      { value: '16', label: '16' },
      { value: '32', label: '32' },
      { value: '64', label: '64' },
    ];

    var currentPage = resultPagination.currentPage;
    let hasNext = () => {
      return (resultPagination.currentPage + 1) <= resultPagination.totalPages ? false : true;
    }
    let hasPrev = () => {
      return (resultPagination.currentPage - 1) > 0 ? false : true
    }

    if (!resultBooks.books[0]) {
      content = (
        <Wrapper>
          <center>
            <H1><FormattedMessage {...messages.notFoundMsg} /></H1>
          </center>
        </Wrapper>
      );
    }
    else {
      content = <BookList {...resultBooks} />
    }

    return (
      <div>
        <Helmet>
          <title>Search Result</title>
          <meta name="description" content="Search result" />
        </Helmet>
        <BooksWrapper>
          <Form >
            <label htmlFor="sort">Sort By </label>
            <Dropdown
              id="sort"
              label="sort"
              className="dropdownRoot"
              controlClassName="dropdownControl"
              options={fields} onChange={this.props.onChangeSort}
              value={resultPagination.sort}
            />
            <label htmlFor="order">Order</label>
            <Dropdown
              id="order"
              className="dropdownRoot"
              controlClassName="dropdownControl"
              options={order} onChange={this.props.onChangeOrder}
              value={resultPagination.order}
            />
            <label htmlFor="size">Books per page</label>
            <Dropdown
              id="size"
              className="dropdownRoot"
              controlClassName="dropdownControl"
              options={sizes} onChange={this.props.onChangeSize}
              value={resultPagination.size.toString()}
              placeholder="Books per page"
            />
          </Form >
          {content}
        </BooksWrapper>
        <ButtonsWrapper>
          <PageButton
            disabled={hasPrev()}
            onClick={(e) => { this.props.switchPage(e, currentPage - 1) }}
          >Prev</PageButton>
          {this.props.resultPagination.currentPage}
          <PageButton
            disabled={hasNext()}
            onClick={(e) => { this.props.switchPage(e, currentPage + 1) }}
          >Next</PageButton>
        </ButtonsWrapper>
      </div>
    );

  }
}

BooksPage.propTypes = {
  resultBooks: PropTypes.object,
  resultPagination: PropTypes.object,
  onChangeOrder: PropTypes.func,
  onChangeSize: PropTypes.func,
  onChangeSort: PropTypes.func,
  switchPage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  resultBooks: makeSelectResult(),
  resultPagination: makeSelectPaginationResult(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeSort: evt => dispatch(changeSort(evt.value)),
    onChangeSize: evt => dispatch(changeSize(evt.value)),
    onChangeOrder: evt => dispatch(changeOrder(evt.value)),
    switchPage: (e, page) => dispatch(changePage(page)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(BooksPage);
