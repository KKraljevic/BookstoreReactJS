/**
 *
 * CategoryBooksPage
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
import { makeSelectCategoryBooks, makeSelectPaginationCatBooks } from './selectors';
import { loadCategoryBooks, changeOrder, changeSize, changeSort, changePage, setCurrentCategory } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import styled from 'styled-components';
import BookList from 'components/BookList';
import Form from './Form';
import PageButton from './PageButton';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './styleToggle.css';

const BooksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: fit-content;
    overflow: auto;
    margin-top: 0;
    margin-bottom: 20px;
    padding-top: 0;
    padding-bootom: 0;
`;
const ButtonsWrapper = styled.div`
    display: block;
    min-height: fit-content;
    overflow: auto;
    text-align: center;
`;
export class CategoryBooksPage extends React.Component {
  constructor(props) {
    super(props);
    const { name } = this.props.match.params;
    this.props.setCategory(name);
  }

  componentDidMount() {
    const { name } = this.props.match.params;
    this.props.initCategoryBooks(name);
  }

  render() {
    const { currentCategory, categoryBooks, catBooksPagination } = this.props;
    let content = <div />;
    if (!categoryBooks.books) {
      content = (
        <Wrapper>
          <center>
            <H1><FormattedMessage {...messages.noCategoryBooks} /></H1>
          </center>
        </Wrapper>
      );
    }
    else {

      content = <BookList {...categoryBooks} />
    };

    const fields = [
      //      { value: 'title.keyword', label: 'title' },
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
    var currentPage = catBooksPagination.currentPage;
    let hasNext = () => {
      return (catBooksPagination.currentPage + 1) <= catBooksPagination.totalPages ? false : true;
    }
    let hasPrev = () => {
      return (catBooksPagination.currentPage - 1) > 0 ? false : true
    }
    return (
      <div>
        <Helmet>
          <title>Category Books</title>
          <meta name="description" content="Category Books Page" />
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
              value={catBooksPagination.sort}
            />
            <label htmlFor="order">Order</label>
            <Dropdown
              id="order"
              className="dropdownRoot"
              controlClassName="dropdownControl"
              options={order} onChange={this.props.onChangeOrder}
              value={catBooksPagination.order}
            />
            <label htmlFor="size">Books per page</label>
            <Dropdown
              id="size"
              className="dropdownRoot"
              controlClassName="dropdownControl"
              options={sizes} onChange={this.props.onChangeSize}
              value={catBooksPagination.size.toString()}
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
          {this.props.catBooksPagination.currentPage}
          <PageButton
            disabled={hasNext()}
            onClick={(e) => { this.props.switchPage(e, currentPage + 1) }}
          >Next</PageButton>
        </ButtonsWrapper>
      </div >
    );
  }
}
CategoryBooksPage.propTypes = {
  currentCategory: PropTypes.object,
  categoryBooks: PropTypes.object,
  catBooksPagination: PropTypes.object,
  initCategoryBooks: PropTypes.func,
  onChangeOrder: PropTypes.func,
  onChangeSize: PropTypes.func,
  onChangeSort: PropTypes.func,
  switchPage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  categoryBooks: makeSelectCategoryBooks(),
  catBooksPagination: makeSelectPaginationCatBooks(),
});

function mapDispatchToProps(dispatch) {
  return {
    initCategoryBooks: name => dispatch(loadCategoryBooks(name)),
    setCategory: name => dispatch(setCurrentCategory(name)),
    onChangeSort: evt => dispatch(changeSort(evt.value)),
    onChangeSize: evt => dispatch(changeSize(evt.value)),
    onChangeOrder: evt => dispatch(changeOrder(evt.value)),
    switchPage: (evt, page) => dispatch(changePage(page)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);


const withReducer = injectReducer({ key: 'categoryBooksPage', reducer });
const withSaga = injectSaga({ key: 'categoryBooksPage', saga });
export default compose(
  withSaga,
  withReducer,
  withConnect,
  memo,
)(CategoryBooksPage);
