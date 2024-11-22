import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Rating from '../../components/Rating/Rating';
import Button from '../../components/Button/Button';

const Container = styled.div`
  padding: 20px;
  max-width: 100vw;
  min-height: 100vh;
  background: white;
`;

const Header = styled.div`
  margin-bottom: 20px;
  padding: 15px 0;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  margin-bottom: 15px;
`;

const RatingSection = styled.section`
  background: #f8f8f8;
  padding: 20px;
  border-radius: 15px;
  margin: 20px 0;
`;

const RatingValue = styled.h2`
  font-size: 36px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
`;

const RatingItem = styled.div`
  margin: 15px 0;
  
  p {
    margin-bottom: 5px;
    color: #666;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 20px 0;
`;

const Photo = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const FixedBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: white;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Location = styled.div`
  display: flex;
  gap: 10px;
  color: #666;
`;

const RatingBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${props => props.theme.colors.primary};
  border-radius: 4px;
  margin: 5px 0;
  opacity: ${props => props.value / 10};
`;

const BusinessDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { date, guests, businessName, zone, price, images } = state || {};

  const defaultImages = [
    '/images/restaurant.jpg',
  ];

  const displayImages = images || defaultImages;
  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>←</BackButton>
      
      <Header>
        <Title>{businessName || 'Restaurante'}</Title>
        <Location>
          <span>📍 {zone}</span>
          <span>• 2Km de distancia</span>
          <span>• {price} /por mesa</span>
        </Location>
      </Header>

      <RatingSection>
        <RatingValue>9.2</RatingValue>
        <Rating value={4.5} />
        
        <RatingItem>
          <p>Limpieza</p>
          <RatingBar value={9.5} />
        </RatingItem>
        <RatingItem>
          <p>Servicio</p>
          <RatingBar value={8.5} />
        </RatingItem>
        <RatingItem>
          <p>Comida</p>
          <RatingBar value={9.0} />
        </RatingItem>
        <RatingItem>
          <p>Precio</p>
          <RatingBar value={8.8} />
        </RatingItem>
      </RatingSection>

      <section>
        <h3>Fotos del lugar</h3>
        <PhotoGrid>
          {displayImages.map((image, index) => (
            <Photo 
              key={index}
              src={image} 
              alt={`${businessName} view ${index + 1}`}
              onError={(e) => {
                e.target.src = "/images/default-restaurant.jpg"; // Imagen por defecto si falla la carga
              }}
            />
          ))}
        </PhotoGrid>
      </section>

      <FixedBottom>
        <Button 
          fullWidth 
          onClick={() => navigate('/reservation', { 
            state: { 
              businessId: id, 
              date, 
              guests,
              businessName: businessName || 'Restaurante',
              location:  zone,
            } 
          })}
        >
          Reservar ahora
        </Button>
      </FixedBottom>
    </Container>
  );
};

export default BusinessDetail;