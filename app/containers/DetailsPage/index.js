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
import { useParams } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectBook,
  makeSelectError,
  makeSelectLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadBook } from './actions';

export class DetailsPage extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.initBook(id);
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    const { book, loading, error } = this.props;
    return (
      <div>
        <Details book={book} loading={loading} error={error} />
      </div>
    );
  }
}
DetailsPage.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  initBook: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  book: makeSelectBook(),
});

function mapDispatchToProps(dispatch) {
  return {
    initBook: id => dispatch(loadBook(id)),
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
