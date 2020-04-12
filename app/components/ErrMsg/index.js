import styled from 'styled-components';

const ErrMsg = styled.h3`
  font-weight: 200;
  text-align: center;
  color: ${props => props.primary ? "white" : "cornflowerblue"};
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export default ErrMsg;

