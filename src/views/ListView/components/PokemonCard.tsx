import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import { getPokemonDetail } from '../../../utils/api';
import PokemonType from './PokemonType';
import './PokemonCard.scss';

interface Props {
  pokemonName: string;
}

function PokemonCard({ pokemonName }: Props) {
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
        <Link className="pokemon-card" to={`/${pokemonDetail.name}`}>
          <img
            src={pokemonDetail.sprites.other['official-artwork'].front_default}
            alt={pokemonDetail.name}
          />
          <div className="pokemon-details">
            <h1>{pokemonDetail.name}</h1>
            <div className="pokemon-types">
              {pokemonDetail.types.map((type) => (
                <PokemonType key={type.type.name} typeName={type.type.name} />
              ))}
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default PokemonCard;
