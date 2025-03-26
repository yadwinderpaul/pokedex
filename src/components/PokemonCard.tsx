import { PokemonDetail } from '../types';
import PokemonType from './PokemonType';
import './PokemonCard.scss';

interface Props {
  pokemonDetail: PokemonDetail;
}

function PokemonCard({ pokemonDetail }: Props) {
  return (
    <div className="card pokemon-card">
      <img
        src={pokemonDetail.sprites.other['official-artwork'].front_default}
        alt={pokemonDetail.name}
      />
      <div className="pokemon-details">
        <div>
          <h2>#{pokemonDetail.id}</h2><h1>{pokemonDetail.name}</h1>
        </div>
        <div className="pokemon-types">
          {pokemonDetail.types.map((type) => (
            <PokemonType key={type.type.name} typeName={type.type.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
