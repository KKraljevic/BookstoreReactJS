/**
 *
 * MyBubbleChart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import rd3 from 'react-d3-library';
import createBubbleChart from './createBubbleChart';
const RD3Component = rd3.Component;

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrMsg from 'components/ErrMsg';

export class MyBubbleChart extends React.Component {

  render() {
    console.log(this.props)
    const { loading, error, data } = this.props;
    if (loading) {
      return <List component={LoadingIndicator} />;
    }

    if (error !== false) {
      return <ErrMsg>{error.message}</ErrMsg>;
    }

    if (data != []) {
      return (
        <div>
          <RD3Component data={createBubbleChart(data)} />
        </div>
      )
    }
    return null;
  }
};

MyBubbleChart.propTypes = {
  loading: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.any,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};
export default MyBubbleChart;
