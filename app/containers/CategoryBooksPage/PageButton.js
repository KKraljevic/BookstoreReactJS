import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  background-color: darkyellow;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 0;
  cursor: ${props => props.disabled ? "not-allowes" : "pointer"};
  opasity: ${props => props.disabled ? 1 : 0.5};
`;

export default Button;