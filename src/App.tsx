import { NavLink, Route, Routes, useLocation } from 'react-router';
import ListView from './views/ListView';
import DetailView from './views/DetailView';
import Container from './components/Container';
import './App.scss';

function App() {
  const location = useLocation();
  console.log('location', location);

  return (
    <Container>
      <div className="nav">
        <NavLink to="/">
          <button>{location.pathname !== '/' ? '< Back' : 'Home'}  </button>
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="/:pokemonName" element={<DetailView />} />
      </Routes>
    </Container>
  );
}

export default App;
