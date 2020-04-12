import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import CardLink from './CardLink';

const StyledContainer = styled.div`
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-top: 10px;
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

const DateTime = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const Price = styled.p`
  color: black;
  margin-top: 0;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const Card = ({ item }) => (
  <StyledContainer>
    <CardLink
      to={{
        pathname: `/details/${item.id}`,
      }}
    >
      <StyledPhoto src="https://picsum.photos/120" />
      <Title>{item.title}</Title>
      <DateTime>{moment(item.publishingDate).format('DD/MM/YYYY')}</DateTime>
      <Price>$ {item.price}</Price>
    </CardLink>
  </StyledContainer>
);

export default Card;
