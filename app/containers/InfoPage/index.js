/**
 *
 * InfoPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import H1 from 'components/H1';
import H2 from 'components/H2';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 860px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
export function InfoPage() {
  return (
    <Wrapper>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About bookstore World of Printed Words" />
      </Helmet>
      <H1>About</H1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat massa ante, id commodo purus mattis a.
        Aliquam luctus cursus purus, eleifend lobortis tortor hendrerit non.
        Maecenas a est ultrices, tristique magna eu, feugiat orci. Nam eget turpis arcu.
        Sed bibendum, erat in condimentum maximus, urna tellus auctor lectus, eu sollicitudin orci dolor at ligula.
        Donec lacinia orci in convallis interdum. Praesent et varius sem.
        Suspendisse feugiat felis quis pulvinar interdum. In suscipit at ipsum id congue.
      </p>
      <H2>History</H2>
      <hr />
      <p>
        Donec auctor tortor tortor, ac fringilla urna vehicula tincidunt.
        Nam eros sem, cursus vel sapien sit amet, porta semper magna.
        Integer ullamcorper quis lacus eget dignissim. Praesent accumsan rhoncus fermentum.
        Curabitur ut posuere felis. Donec quis auctor erat. Pellentesque sit amet sagittis felis, sed tristique arcu.
      </p>
      <H2>Modern era</H2>
      <hr />
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Sed sed ipsum felis. Fusce vitae orci vel augue fermentum dapibus non a nibh.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Sed suscipit id lectus quis sodales. Integer elementum lacus vitae turpis porttitor mattis.
        Nullam aliquam a velit at fermentum. Fusce elit dolor, consequat vitae augue at, dapibus ornare nisl.
        </p>
    </Wrapper>
  );
}

InfoPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(InfoPage);
