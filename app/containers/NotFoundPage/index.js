/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Button from 'components/Button';
import messages from './messages';

const Wrapper = styled.div`
  width: 860px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  color:black;
`;
const TextWrapper = styled.div`
  position: relative;
  text-align: center;
`;
const H1 = styled.h1`
font-size: 8em;
font-weight: 200;
margin: 0px;
color: #211b19;
text-transform: uppercase;
opacity: 0.2;
`;

const H2 = styled.h2`
font-size: 28px;
font-weight: 200;
text-transform: uppercase;
color: #211b19;
padding: 10px 5px;
margin: auto;
display: inline-block;
position: absolute;
bottom: 0px;
left: 0;
right: 0;
text-align: center;
`;
export default function NotFound() {
  return (
    <Wrapper>
      <TextWrapper>
        <H1>Oops!</H1>
        <H2>404 - The Page can't be found</H2>
      </TextWrapper>
      <Button href="/" as="a">Home</Button>
    </Wrapper>
  );
}
