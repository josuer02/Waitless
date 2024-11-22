import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
`;

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <Nav>
      <button onClick={() => navigate('/home')}>Inicio</button>
      <button onClick={() => navigate('/search')}>Buscar</button>
    </Nav>
  );
};

export default BottomNav;