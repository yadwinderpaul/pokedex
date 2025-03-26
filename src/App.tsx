import { NavLink, Route, Routes, useLocation } from 'react-router';
import ListView from './views/ListView';
import DetailView from './views/DetailView';
import Gameboy from './components/Gameboy';
import './App.scss';

function App() {
  const location = useLocation();
  console.log('location', location);

  return (
    <Gameboy>
      <div className="nav">
        <NavLink to="/" tabIndex={-1}>
          <button>{location.pathname !== '/' ? '< Back' : 'Home'}  </button>
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="/:pokemonName" element={<DetailView />} />
      </Routes>
    </Gameboy>
  );
}

export default App;
