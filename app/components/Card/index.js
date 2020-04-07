import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import CardLink from './CardLink';

const StyledContainer = styled.div`
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-bottom: 15px;
  margin-top: 0;
  margin-left: 20px;
  background-color: white;
  text-align: center;
  width: 23%;
  float: left;
`;

const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
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

const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`;
const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`;
const options = { year: 'numeric', month: 'long', day: 'numeric' };
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
