import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import { useNavigate, useLocation } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
`;

const TimeSlotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 20px 0;
`;

const TimeSlot = styled.button`
  padding: 15px;
  border: 1px solid ${props => props.selected ? props.theme.colors.primary : '#eee'};
  background: ${props => props.selected ? props.theme.colors.primary : 'white'};
  color: ${props => props.selected ? 'white' : 'black'};
  border-radius: 10px;
`;

const Reservation = () => {
  const timeSlots = ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30'];
  const navigate = useNavigate();
  const location = useLocation();
  const { businessName, date, guests } = location.state || {};
  const [selectedTime, setSelectedTime] = useState(null);

  const handleConfirmReservation = () => {
    if (selectedTime) {
      navigate('/confirmation', {
        state: {
          businessName,
          date,
          guests,
          selectedTime
        }
      });
    }
  };

  return (
    <Container>
      <h1>Hacer reservación</h1>
      <h2>{businessName}</h2>
      
      <section>
        <h3>Horarios disponibles</h3>
        <TimeSlotGrid>
          {timeSlots.map(time => (
            <TimeSlot 
              key={time}
              selected={selectedTime === time}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </TimeSlot>
          ))}
        </TimeSlotGrid>
      </section>

      <Button 
        fullWidth 
        onClick={handleConfirmReservation}
        disabled={!selectedTime}
      >
        Confirmar reservación
      </Button>
    </Container>
  );
};

export default Reservation;