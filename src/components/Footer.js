import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <p>© 2024 [Your Name]. All rights reserved.</p>
    <FooterLinks>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:youremail@example.com">Email</a>
    </FooterLinks>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background-color: #333;
  color: #f7f7f7;
  padding: 20px;
  text-align: center;
  width: 100%;
  margin-top: 40px;
`;

const FooterLinks = styled.div`
  margin-top: 10px;
  
  a {
    color: #f7f7f7;
    margin: 0 10px;
    text-decoration: none;
  }

  a:hover {
    color: #0073e6;
    text-decoration: underline;
  }
`;

export default Footer;
