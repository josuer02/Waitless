import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
const Container = styled.div`
  height: 100vh;
  background-image: url('/background.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 40px;
  color: white;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src="/logo.png" alt="WaitLess" />
      <h1>WaitLess</h1>
      <p>Un mundo de decisiones de compra informadas</p>
      <Button fullWidth onClick={() => navigate('/login')}>
        Iniciar
      </Button>
      <Button variant="text" onClick={() => navigate('/login')}>
        ¿Ya tienes cuenta? Log in
      </Button>
    </Container>
  );
};

export default Welcome;