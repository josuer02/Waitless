import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Welcome from './pages/Welcome/Welcome';
import Home from './pages/Home/Home';
import BusinessDetail from './pages/BusinessDetail/BusinessDetail';
import Reservation from './pages/Reservation/Reservation';
import Confirmation from './pages/Confirmation/Confirmation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/business/:id" element={<BusinessDetail />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;