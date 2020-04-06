import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
cursor: pointer;
text-decoration: none;

&:active {
  font-weight: bold;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);
  }
`;