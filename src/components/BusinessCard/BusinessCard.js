// src/components/BusinessCard/BusinessCard.js
import styled from 'styled-components';
import Rating from '../Rating/Rating';


const Card = styled.div`
  display: flex;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  padding: 15px;
  gap: 15px;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
`;

const Content = styled.div`
  flex: 1;
`;

const RestaurantName = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 5px;
`;

const Location = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
`;

const WaitTime = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Price = styled.div`
  text-align: right;
  
  .amount {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  
  .text {
    font-size: 12px;
    color: #666;
  }
`;

const BusinessCard = ({ name, zone, waitTime, price, priceText, rating, image, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Image src={image} alt={name} />
      <Content>
        <RestaurantName>{name}</RestaurantName>
        <Location>{zone}</Location>
        <WaitTime>
          <span>⏱️</span>
          {waitTime}
        </WaitTime>
        <Rating value={rating} />
      </Content>
      <Price>
        <div className="amount">{price}</div>
        <div className="text">{priceText}</div>
      </Price>
    </Card>
  );
};

export default BusinessCard;