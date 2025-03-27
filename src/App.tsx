import { Route, Routes } from 'react-router';
import ListView from './views/ListView';
import DetailView from './views/DetailView';
import Gameboy from './components/Gameboy';
import Nav from './components/Nav';
import './App.scss';

function App() {
  return (
    <Gameboy>
      <Nav />
      <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="/:pokemonName" element={<DetailView />} />
      </Routes>
    </Gameboy>
  );
}

export default App;
