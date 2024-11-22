import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const SearchBarWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 40px;
  border-radius: 25px;
  border: none;
  background: white;
  box-shadow: ${props => props.theme.shadows.main};
`;

const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.primary};
`;

const SearchBar = ({ placeholder, onChange }) => (
  <SearchBarWrapper>
    <SearchIconStyled />
    <Input placeholder={placeholder} onChange={onChange} />
  </SearchBarWrapper>
);

export default SearchBar;