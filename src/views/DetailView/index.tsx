import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getPokemonDetail } from '../../utils/api';

function DetailView() {
  const { pokemonName } = useParams() as { pokemonName: string };
  const {
    data: pokemonDetail,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: ['pokemonDetail', pokemonName],
    queryFn: async () => getPokemonDetail(pokemonName),
  });

  return (
    <div>
      <h1>DetailView</h1>
      {isLoading && <p>Loading...</p>}
      {isFetched && pokemonDetail && (
        <div>
          <h2>{pokemonDetail.name}</h2>
        </div>
      )}
    </div>
  );
}

export default DetailView;
