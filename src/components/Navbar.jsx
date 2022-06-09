import React from 'react';
import styledComponents from 'styled-components';

const Nav = styledComponents.nav`
  width:100%;
  display: flex;
  justify-content:center;
  align-items:center;
  padding:10px 15%;
`;

const Menu = styledComponents.div`
  display: flex;
  gap: 10px;
  text-transform:uppercase;
`;
const Navbar = () => {
  return (
    <Nav>
      <Menu>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Product</a>
        <a href="#">FAQ</a>
      </Menu>
    </Nav>
  );
};

export default Navbar;
