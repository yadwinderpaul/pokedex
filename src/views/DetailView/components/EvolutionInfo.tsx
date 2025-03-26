import { useQuery } from '@tanstack/react-query';
import { Evolution } from '../../../types';
import { getPokemonDetail } from '../../../utils/api';
import './EvolutionInfo.scss';
import PokemonType from '../../../components/PokemonType';

interface Props {
  currentPokemon: string;
  evolution: Evolution;
}

function EvolutionInfo({ evolution, currentPokemon }: Props) {
  const {
    data: pokemonDetail,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: ['pokemonDetail', evolution.species.name],
    queryFn: async () => getPokemonDetail(evolution.species.name),
  });

  const isCuurentPokemon = currentPokemon === evolution.species.name;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isFetched && pokemonDetail && (
        <div className={`evolution-info ${isCuurentPokemon ? 'current-pokemon' : ''}`}>
          <img
            src={pokemonDetail.sprites.other['official-artwork'].front_default}
            alt={pokemonDetail.name}
          />
          <div className="pokemon-details">
            <div className="pokemon-id-name">
              <span>#{pokemonDetail.id}</span><span className="pokemon-name">{pokemonDetail.name}</span>
            </div>
            <div className="pokemon-types">
              {pokemonDetail.types.map((type) => (
                <PokemonType key={type.type.name} typeName={type.type.name} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );

}

export default EvolutionInfo;
