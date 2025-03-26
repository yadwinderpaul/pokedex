import { Route, Routes } from 'react-router';
import ListView from './views/ListView';
import DetailView from './views/DetailView';
import './App.scss';
import Container from './components/Container';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="/:pokemonName" element={<DetailView />} />
      </Routes>
    </Container>
  );
}

export default App;
