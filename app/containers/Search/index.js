/**
 *
 * Search
 *
 */
import { Switch, Route } from 'react-router-dom';

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectResult, makeSelectQuery } from './selectors';
import {
  loadResult,
  changeSearchTerm
} from './actions';
import reducer from './reducer';
import saga from './saga';

import styled from 'styled-components';
import SearchInput from './Input';
import Form from './Form';

const H2 = styled.h2`
font: normal 120% "century gothic", arial, sans-serif;
  padding: 0;
  margin-right: 1em;
  color: #A8AA94;
  display: inline-block;
`;

const Wrapper = styled.div`
  background: transparent;
  text-align: center;
`;

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChangeSearchTerm(event);
  }

  handleSubmit(event) {
    this.props.onSubmitForm(event);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Search</title>
          <meta name="description" content="Description of Search" />
        </Helmet>
        <Wrapper>
          <span>
            <H2>
              Search
              </H2>
            <Form onSubmit={this.handleSubmit}>
              <SearchInput
                id="query"
                type="text"
                placeholder=" title, writer ..."
                onChange={this.handleChange}
              />
            </Form>
          </span>
        </Wrapper>
      </div>);
  }
}
Search.propTypes = {
  result: PropTypes.object,
  query: PropTypes.string,
  onChangeSearchTerm: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  result: makeSelectResult(),
  query: makeSelectQuery(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeSearchTerm: evt => dispatch(changeSearchTerm(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadResult());
    },
  };
}

const withReducer = injectReducer({ key: 'search', reducer });
const withSaga = injectSaga({ key: 'search', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withReducer,
  withConnect,
  memo,
)(Search);
