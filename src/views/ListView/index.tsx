import { useSearchParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import PokemonCard from './components/PokemonCard';
import Pagination from './components/Pagination';
import { getPokemons } from '../../utils/api';
import './index.scss';

function ListView() {
  const [searchParams] = useSearchParams();
  let offset = 0;
  try {
    offset = parseInt(searchParams.get('offset') ?? '0', 10);
  } catch {
    console.warn('Invalid offset', searchParams.get('offset'));
  }

  const {
    data,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: ['pokemonsList', offset],
    queryFn: async () => getPokemons(offset),
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isFetched && data && (
        <>
          <div>
            {data.results.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemonName={pokemon.name} />
            ))}
          </div>
          <Pagination previous={data.previous} next={data.next} />
        </>
      )}
    </>
  );
}

export default ListView;
