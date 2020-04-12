/**
 *
 * MyBarChart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import rd3 from 'react-d3-library';
import createBarChart from './createBarChart';
const RD3Component = rd3.Component;

import List from 'components/List';
import ErrMsg from 'components/ErrMsg';
import LoadingIndicator from 'components/LoadingIndicator';

export class MyBarChart extends React.Component {

  componentDidMount() {
  }

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
          <RD3Component data={createBarChart(data)} />
        </div>
      )
    }
    return null;
  }
};

MyBarChart.propTypes = {
  loading: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.any,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};
export default MyBarChart;
