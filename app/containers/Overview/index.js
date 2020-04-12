/**
 *
 * Overview
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { DAEMON } from 'utils/constants';
import reducer from './reducer';
import saga from './saga';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectAllCategories } from 'containers/CategoriesPage/selectors';
import { makeSelectPriceAgg, makeSelectPublishingAgg, makeSelectTop10 } from './selectors';
import { loadCategories } from 'containers/CategoriesPage/actions';
import { loadPublishingAgg, loadPriceAgg, loadTop10 } from './actions';

import MyPieChart from 'components/MyPieChart';
import MyBubbleChart from 'components/MyBubbleChart';
import MyBarChart from 'components/MyBarChart';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    text-align: center;
`;

const StyledContainer = styled.div`
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-bottom: 15px;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;  margin-bottom: 20px;
  background-color: white;
  text-align: center;
  float: left;
`;

const Title = styled.h2`
  color: darkgrey;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

class Overview extends React.Component {
  componentDidMount() {
    this.props.initCategories();
    this.props.initPublishingAgg();
    this.props.initPriceAgg();
    this.props.initTop10();
  }
  render() {
    const { allCategories, priceAgg, publishingAgg, top10 } = this.props;

    return (
      <Wrapper>
        <StyledContainer>
          <Title>Bookstore Price Range</Title>
          <hr />
          <MyPieChart
            loading={priceAgg.loading}
            error={priceAgg.error}
            data={priceAgg.agg}
          />
        </StyledContainer>
        <StyledContainer>
          <Title>Books Count by Publishing Year </Title>
          <hr />
          <MyBarChart
            loading={publishingAgg.loading}
            error={publishingAgg.error}
            data={publishingAgg.agg}
          />
        </StyledContainer>
        <StyledContainer>
          <Title>Top 10 Bestseller Books</Title>
          <hr />
          <MyBubbleChart
            loading={top10.loading}
            error={top10.error}
            data={top10.agg}
          />
        </StyledContainer>
      </Wrapper>
    )
  }
};

Overview.propTypes = {
  allCategories: PropTypes.object,
  priceAgg: PropTypes.object,
  publishingAgg: PropTypes.object,
  top10: PropTypes.object,
  initCategories: PropTypes.func,
  initPriceAgg: PropTypes.func,
  initPublishingAgg: PropTypes.func,
  initTop10: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  allCategories: makeSelectAllCategories(),
  priceAgg: makeSelectPriceAgg(),
  publishingAgg: makeSelectPublishingAgg(),
  top10: makeSelectTop10(),
});

function mapDispatchToProps(dispatch) {
  return {
    initCategories: () => dispatch(loadCategories()),
    initPriceAgg: () => dispatch(loadPublishingAgg()),
    initPublishingAgg: () => dispatch(loadPriceAgg()),
    initTop10: () => dispatch(loadTop10()),
  };
}

const withReducer = injectReducer({ key: 'overview', reducer });
const withSaga = injectSaga({ key: 'overview', saga, mode: DAEMON });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withReducer,
  withConnect,
  memo
)(Overview);
