import styled from 'styled-components';

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Star = styled.span`
  color: ${props => props.filled ? props.theme.colors.primary : '#ddd'};
`;

const Rating = ({ value, maxStars = 5 }) => {
  return (
    <RatingContainer>
      {[...Array(maxStars)].map((_, index) => (
        <Star key={index} filled={index < value}>★</Star>
      ))}
    </RatingContainer>
  );
};

export default Rating;