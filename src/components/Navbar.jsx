import React from 'react';
import styledComponents from 'styled-components';

const Nav = styledComponents.nav`
  width:100%;
  display: flex;
  justify-content:space-between;
  align-items:center;
  padding:10px 10%;
`;

const LogoWrapper = styledComponents.div`
  img{
    width:80%
  }`;

const Menu = styledComponents.div`
  display: flex;
  gap: 10px;
  text-transform:uppercase;
`;
const Navbar = () => {
  return (
    <Nav>
      <LogoWrapper>
        <img src="images/logo.svg" alt="logo" />
      </LogoWrapper>
      <Menu>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Login</a>
      </Menu>
    </Nav>
  );
};

export default Navbar;
