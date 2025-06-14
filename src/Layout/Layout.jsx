// src/Layout/Layout.jsx
import React from 'react';
import styled from 'styled-components';
import HomePage from '../Components/templates/HomePage';

const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: #3874ff;
  padding: 10px 20px;
  margin-bottom: 150px;
  border-radius: 10px;
`;

const Footer = styled.footer`
  text-align: center;
  background-color: #3847ff;
  padding: 20px;
  margin-top: 80px;
  border-radius: 10px;
`;

function Layout() {
  return (
    <>
      <Header>
        <h1>Crypto App</h1>
      </Header>
      <HomePage />
      <Footer>
        <p>Developed by Negin ❤️</p>
      </Footer>
    </>
  );
}

export default Layout;
