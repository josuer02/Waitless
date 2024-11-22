import styled from 'styled-components';

const TagsContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 10px 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tag = styled.button`
  background: white;
  border: 1px solid #eee;
  border-radius: 20px;
  padding: 8px 16px;
  color: #333;
  white-space: nowrap;
`;

const CategoryTags = () => {
  const categories = ['Bancos', 'Bares', 'Restaurantes', 'Supermercado'];
  
  return (
    <TagsContainer>
      {categories.map(category => (
        <Tag key={category}>{category}</Tag>
      ))}
    </TagsContainer>
  );
};

export default CategoryTags;