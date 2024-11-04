import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderContainer>
    <Logo>[Your Name]</Logo>
    <NavLinks>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </NavLinks>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: #f7f7f7;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #f7f7f7;
`;

const NavLinks = styled.nav`
  a {
    color: #f7f7f7;
    margin: 0 15px;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    color: #0073e6;
  }
`;

export default Header;
