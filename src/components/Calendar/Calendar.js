// src/components/Calendar/Calendar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';

const CalendarContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: ${props => props.theme.shadows.main};
  margin: 20px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const MonthNavigator = styled.div`
  display: flex;
  gap: 10px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  text-align: center;
`;

const WeekDay = styled.div`
  padding: 10px;
  font-weight: bold;
  color: ${props => props.theme.colors.text.secondary};
`;

const Day = styled.button`
  aspect-ratio: 1;
  border: none;
  background: ${props => props.selected ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.selected ? 'white' : props.disabled ? '#ccc' : 'black'};
  border-radius: 50%;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  
  &:hover {
    background: ${props => !props.disabled && !props.selected && '#f0f0f0'};
  }
`;

const Calendar = ({ value, onChange }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  
  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  return (
    <CalendarContainer>
      <Header>
        <h3>{format(currentMonth, 'MMMM yyyy', { locale: es })}</h3>
        <MonthNavigator>
          <NavButton onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>←</NavButton>
          <NavButton onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>→</NavButton>
        </MonthNavigator>
      </Header>
      
      <DaysGrid>
        {weekDays.map(day => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
        {Array.from({ length: startOfMonth(currentMonth).getDay() }).map((_, i) => (
          <Day key={`empty-${i}`} disabled />
        ))}
        {days.map(day => (
          <Day
            key={day}
            selected={isSameDay(day, value)}
            onClick={() => onChange(day)}
          >
            {format(day, 'd')}
          </Day>
        ))}
      </DaysGrid>
    </CalendarContainer>
  );
};

export default Calendar;