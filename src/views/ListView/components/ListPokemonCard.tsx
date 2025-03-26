import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import { getPokemonDetail } from '../../../utils/api';
import PokemonCard from '../../../components/PokemonCard';
import './ListPokemonCard.scss';

interface Props {
  pokemonName: string;
}

function ListPokemonCard({ pokemonName }: Props) {
  const {
    data: pokemonDetail,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: ['pokemonDetail', pokemonName],
    queryFn: async () => getPokemonDetail(pokemonName),
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isFetched && pokemonDetail && (
        <Link className="list-pokemon-card" to={`/${pokemonDetail.name}`}>
          <PokemonCard pokemonDetail={pokemonDetail} />
        </Link>
      )}
    </>
  );
};

export default ListPokemonCard;
