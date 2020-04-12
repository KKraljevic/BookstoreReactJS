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
`;
const LogoWrapper = styled.div`
  width: 860px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
const NavWrapper = styled.div`
  padding-top: 12px;
  text-align: center;
`;

export function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={LogoIcon} alt="PW Logo" />
        <BrandLink to="/">
          <H1>World.Of.Printed.Words</H1>
        </BrandLink>
        <hr />
        <H2>Online Bookstore</H2>
      </LogoWrapper>
      <NavWrapper>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/categories">Categories</HeaderLink>
        <HeaderLink to="/overview">Overview</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
      </NavWrapper>
    </HeaderWrapper>
  );
}

Header.propTypes = {};

export default Header;
// https://picsum.photos/200
