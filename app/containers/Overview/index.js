/**
 *
 * Overview
 *
 */

import React, { memo } from 'react';
import PropTypes, { node } from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { createStructuredSelector } from 'reselect';
import { makeSelectPriceAgg, makeSelectPublishingAgg, makeSelectTop10 } from './selectors';
import { compose } from 'redux';
import rd3 from 'react-d3-library';
import nodePricePie from './charts/priceChartData';
import nodePublishingBar from './charts/publishingChartData';
import nodeTop10Chart from './charts/top10ChartData';
import { loadPublishingAgg, loadPriceAgg, loadTop10 } from './actions';
const PieChart = rd3.PieChart;
const BarChart = rd3.BarChart;


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
    this.props.initPublishingAgg();
    this.props.initPriceAgg();
    this.props.initTop10();
  }

  render() {
    const { priceAgg, publishingAgg, top10 } = this.props;
    console.log(this.props);
    const nodePrice = nodePricePie;
    const nodePublishing = nodePublishingBar;
    const nodeTop10 = nodeTop10Chart;
    if (top10.agg !== undefined)
      nodeTop10.dataSet = top10.agg;
    if (priceAgg.agg !== undefined)
      nodePrice.dataSet = priceAgg.agg;
    if (publishingAgg.agg !== undefined) {
      nodePublishing.dataSet = publishingAgg.agg.map(item => {
        return {
          label: item.label,
          value: item.quantity,
        };
      });
    }
    return (
      <Wrapper>
        <StyledContainer>
          <Title>Bookstore Price Range</Title>
          <hr />
          <PieChart data={nodePrice} />
        </StyledContainer>
        <StyledContainer>
          <Title>Books Count by Publishing Year </Title>
          <hr />
          <BarChart data={nodePublishingBar} />
        </StyledContainer>
        <StyledContainer>
          <Title>Top 10 Bestseller Books</Title>
          <hr />
          <PieChart data={nodeTop10} />
        </StyledContainer>
      </Wrapper>
    )
  }
};

Overview.propTypes = {
  priceAgg: PropTypes.object,
  publishingAgg: PropTypes.object,
  top10: PropTypes.object,
  initPriceAgg: PropTypes.func,
  initPublishingAgg: PropTypes.func,
  initTop10: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  priceAgg: makeSelectPriceAgg(),
  publishingAgg: makeSelectPublishingAgg(),
  top10: makeSelectTop10(),
});

function mapDispatchToProps(dispatch) {
  return {
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
)(Overview);
