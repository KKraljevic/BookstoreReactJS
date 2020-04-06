/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import saga from './saga';
import { useInjectSaga } from 'utils/injectSaga';

export function HomePage()
{
  useInjectSaga({ key, saga });
  return (
    <div></div>);
}
HomePage.propTypes = {
  props: PropTypes.any,
};

const withConnect = connect(
  null,
  null,
);

export default compose(
  withConnect,
)(HomePage);
