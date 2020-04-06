/**
 *
 * Footer
 *
 */

import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const FooterWrapper = styled.footer`
  text-align: center;
  color: darkgrey;
`;
function Footer() {
  return (
    <FooterWrapper>
      <FormattedMessage {...messages.header} />
      <hr></hr>
      <p>Copyright 2020 All Rights Reserved by Bookstore WPW. </p>
    </FooterWrapper>
  );
}

Footer.propTypes = {};

export default Footer;
