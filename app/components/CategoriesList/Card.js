import React from 'react';
import styled from 'styled-components';
import CardLink from './CardLink';

const StyledContainer = styled.div`
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-bottom: 15px;
  margin-top: 20px;
  margin-bottom: 0;
  margin-left: 20px;
  background-color: white;
  text-align: center;
  width: 23%;
  float: left;
`;

const StyledPhoto = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  color: darkgrey;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const imgURL = `https://dummyimage.com/250/949/ffffff&text=`;

const Card = ({ item }) => (
  <StyledContainer>
    <CardLink
      to={{
        pathname: `/categories/${item.label}`,
      }}
    >
      <StyledPhoto src={imgURL + (item.label).replace(' ', '+')} />
      <Title>{item.label}</Title>
    </CardLink>
  </StyledContainer>
);

export default Card;
