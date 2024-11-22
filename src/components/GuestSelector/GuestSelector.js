import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

const GuestSelector = ({ value, onChange }) => {
  return (
    <Container>
      <Title>Número de invitados</Title>
      <Select value={value} onChange={e => onChange(Number(e.target.value))}>
        {[1,2,3,4,5,6,7,8].map(num => (
          <option key={num} value={num}>
            {num} {num === 1 ? 'persona' : 'personas'}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default GuestSelector;