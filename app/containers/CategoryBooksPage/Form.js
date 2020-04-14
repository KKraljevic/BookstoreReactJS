import styled from 'styled-components';
import Dropdown from 'react-dropdown';

const Form = styled.form`  
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: stretch;
}
  & .dropdownRoot :last-child {
    margin-right: 0 !important;
}
`;

export default Form;