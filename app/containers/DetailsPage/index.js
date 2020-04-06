/**
 *
 * DetailsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Details from 'components/Details';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectBook,
  makeSelectErrorBook,
  makeSelectLoadingBook,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadBook } from './actions';

export class DetailsPage extends React.Component {
  
  componentDidMount() {
    this.props.initBook(32);
    console.log(this.props);
  }
  render() {
  console.log(this.props.book);
  return (<div>
    <Details book={this.props.book} loading={this.props.loadingBook} error={this.props.errorBook} />
  </div>);
  }
}
DetailsPage.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loadingBook: PropTypes.bool,
  errorBook: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  loadingBook: makeSelectLoadingBook(),
  errorBook: makeSelectErrorBook(),
  book: makeSelectBook(),
});

function mapDispatchToProps(dispatch) {
  return {
    initBook: (bookId) => dispatch(loadBook(bookId)),
  };
}

const withReducer = injectReducer({ key: 'detailsPage', reducer });
const withSaga = injectSaga({ key: 'detailsPage', saga, mode: DAEMON });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withReducer,
  withConnect,
  )(DetailsPage);
