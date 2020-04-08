import styled from 'styled-components';

const SearchInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px dotted #999;
  background-color: transparent;
  width: 40%;

  ::placeholder {
    color: lightgrey;
    letter-spacing: 3px;
  }
`;

export default SearchInput;
