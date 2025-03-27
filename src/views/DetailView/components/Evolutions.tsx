import { Link } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import { useQuery } from '@tanstack/react-query';
import { Evolution, SpeciesInfo } from '../../../types';
import { getEvolutionsFromSpecies } from '../../../utils/api';
import EvolutionInfo from './EvolutionInfo';
import Loader from '../../../components/Loader';
import './Evolutions.scss';

interface Props {
  pokemonName: string;
  species: SpeciesInfo;
}

function Evolutions({ pokemonName, species }: Props) {
  const {
    data: evolutions,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: ['pokemonEvolutions', pokemonName],
    queryFn: async () => getEvolutionsFromSpecies(species),
  });

  const renderEvolutions = (evolution: Evolution) => {
    return (
      <div className="evolution-info-container">
        <Link to={`/${evolution.species.name}`}>
          <EvolutionInfo currentPokemon={pokemonName} evolution={evolution} />
        </Link>
        <div className="further-evolutions-list">
          {evolution.evolves_to.map((evolution) => (
            <Fragment key={evolution.species.name}>{renderEvolutions(evolution)}</Fragment>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {isLoading && <Loader />}
      {isFetched && evolutions && (
        <div className="evolutions">
          <h2>Evolutions</h2>
          <div className="evolutions-list">
            {renderEvolutions(evolutions.chain)}
          </div>
        </div>
      )}
    </>
  );
}

export default Evolutions;
