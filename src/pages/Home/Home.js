import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../../components/SearchBar/SearchBar';
import Calendar from '../../components/Calendar/Calendar';
import BusinessCard from '../../components/BusinessCard/BusinessCard';
import BottomNav from '../../components/BottomNav/BottomNav';
import GuestSelector from '../../components/GuestSelector/GuestSelector';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { es } from 'date-fns/locale';
import format from 'date-fns/format';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url('/images/background-food.jpg') no-repeat center center;
  background-size: cover;
  padding: 20px;
  color: white;
`;

const SearchSection = styled.div`
  background: white;
  border-radius: 25px;
  padding: 20px;
  margin-top: 60%;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: white;
  text-align: left;
`;

const ReservationInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 15px 0;
`;

const InfoBox = styled.div`
  background: #f5f5f5;
  padding: 15px;
  border-radius: 15px;
  overflow: hidden;
  
  h3 {
    color: #999;
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  p {
    color: #333;
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const RecentSection = styled.section`
  margin-top: 30px;
`;

const BusinessGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 0;
`;

const Categories = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 10px 0;
  margin: 20px 0;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryButton = styled.button`
  background: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  white-space: nowrap;
  font-size: 14px;
`;

// Añade los datos de ejemplo
const recentBusinesses = [
  {
    id: 1,
    name: "Montanos",
    zone: "Zona 10",
    waitTime: "15 min",
    price: "Q50",
    priceText: "por mesa",
    rating: 5,
    image: "/images/restaurante-a.jpg",
    images: [
      "/images/restaurante-a.jpg",
      "/images/restaurante-a-1.jpg",
      "/images/restaurante-a-2.jpg",
      "/images/restaurante-a-3.jpg",
      "/images/restaurante-a-4.jpg"
    ]
  },
  {
    id: 2,
    name: "Hacienda Real",
    zone: "Cayalá",
    waitTime: "30 min",
    price: "Q100",
    priceText: "por mesa",
    rating: 4,
    image: "/images/restaurante-b.jpg",
    images: [
      "/images/restaurante-b-1.jpg",
      "/images/restaurante-b-2.jpg",
      "/images/restaurante-b-3.jpg"
    ]
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [date, setDate] = useState(new Date());
  const [guests, setGuests] = useState(2);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestSelector, setShowGuestSelector] = useState(false);
  const handleBusinessClick = (business) => {
    navigate(`/business/${business.id}`, {
      state: { 
        date, 
        guests,
        businessName: business.name,
        zone: business.zone,
        price: business.price,
        images: business.images // Añade las imágenes al state
      }
    });
  };

  return (
    <Container>
      <Title>¿A dónde te gustaría ir ahora?</Title>
      
      <SearchSection>
        <SearchBar 
          placeholder="Zona 10, Cayalá, Antigua"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <ReservationInfo>
        <InfoBox onClick={() => setShowDatePicker(true)}>
            <h3>Fecha de reservar</h3>
            <p>{format(date, 'dd MMMM', { locale: es })}</p>
          </InfoBox>
          <InfoBox onClick={() => setShowGuestSelector(true)}>
            <h3># invitados</h3>
            <p>mesa para {guests}</p>
          </InfoBox>
        </ReservationInfo>

        <Button fullWidth>Buscar negocios</Button>
      </SearchSection>

      <Categories>
  <CategoryButton>Bancos</CategoryButton>
  <CategoryButton>Bares</CategoryButton>
  <CategoryButton>Restaurantes</CategoryButton>
  <CategoryButton>Supermercado</CategoryButton>
</Categories>

      <RecentSection>
        <h2>Recientemente buscados</h2>
        <BusinessGrid>
        {recentBusinesses.map(business => (
            <BusinessCard 
              key={business.id} 
              {...business} 
              onClick={() => handleBusinessClick(business)}
            />
          ))}
        </BusinessGrid>
      </RecentSection>
      
      <BottomNav />
        <Modal isOpen={showDatePicker} onClose={() => setShowDatePicker(false)}>
        <Calendar 
          value={date} 
          onChange={(newDate) => {
            setDate(newDate);
            setShowDatePicker(false);
          }}
        />
        </Modal>

        <Modal isOpen={showGuestSelector} onClose={() => setShowGuestSelector(false)}>
          <GuestSelector 
            value={guests} 
            onChange={(newGuests) => {
              setGuests(newGuests);
              setShowGuestSelector(false);
            }}
          />
        </Modal>
    </Container>
  );
};

export default Home;