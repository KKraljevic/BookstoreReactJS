import React from 'react';
import styled from 'styled-components';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Logo from './Logo';
import LogoIcon from './books-stack-of-three.png';

import HeaderLink from './HeaderLink';
import BrandLink from './BrandLink';

const HeaderWrapper = styled.div`
  background: transparent;
  height: 170px;
`;
const LogoWrapper = styled.div`
  width: 860px;
  position: relative;
  height: 134px;
  margin-left: auto; 
  margin-right: auto;
`;
const NavWrapper = styled.div`
  height: 24px;
  width: 900px;
  padding-top: 12px;
  text-align: end;
`;

export function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={LogoIcon}
          alt='PW Logo' />
        <BrandLink to="/">
          <H1>World.Of.Printed.Words</H1>
        </BrandLink>
        <hr></hr>
        <H2>Online Bookstore</H2>
      </LogoWrapper>
      <NavWrapper>
        <HeaderLink to="/">
          Home
      </HeaderLink>
        <HeaderLink to="/details">
          Categories
        </HeaderLink>
        <HeaderLink to="/">
          About
        </HeaderLink>
        <HeaderLink to="/">
          Contact
        </HeaderLink>
      </NavWrapper>
    </HeaderWrapper>
  );
}

Header.propTypes = {};

export default Header;
//https://picsum.photos/200