import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const Container = styled.div`
  padding: 20px;
  min-height: 100vh;
  background: white;
`;

const ConfirmationCard = styled.div`
  background: #f8f8f8;
  border-radius: 15px;
  padding: 20px;
  margin: 20px 0;
`;

const Detail = styled.div`
  margin: 15px 0;
  
  h3 {
    color: #666;
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  p {
    font-size: 16px;
    font-weight: bold;
  }
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  color: white;
  font-size: 40px;
`;

const Confirmation = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { businessName, date, guests, selectedTime } = state || {};

  return (
    <Container>
      <SuccessIcon>✓</SuccessIcon>
      <h1>¡Reservación confirmada!</h1>
      
      <ConfirmationCard>
        <Detail>
          <h3>Restaurante</h3>
          <p>{businessName}</p>
        </Detail>
        
        <Detail>
          <h3>Fecha</h3>
          <p>{format(new Date(date), 'dd MMMM yyyy', { locale: es })}</p>
        </Detail>
        
        <Detail>
          <h3>Hora</h3>
          <p>{selectedTime}</p>
        </Detail>
        
        <Detail>
          <h3>Número de invitados</h3>
          <p>{guests} personas</p>
        </Detail>
      </ConfirmationCard>

      <Button 
        fullWidth
        onClick={() => navigate('/home')}
      >
        Volver al inicio
      </Button>
    </Container>
  );
};

export default Confirmation;