import { Link } from 'react-router';
import Pagination from './components/Pagination';
import Loader from '../../components/Loader';
import PokemonCard from '../../components/PokemonCard';
import { useGetPokemonDetailList, useGetPokemonsList, useOffset } from './hooks';
import './index.scss';

function ListView() {
  const { offset } = useOffset();

  const { pokemonList, isFetchedPokemonList } = useGetPokemonsList({ offset });
  const { pokemonDetailList } = useGetPokemonDetailList({ pokemonList, enabled: isFetchedPokemonList });

  const isLoaded = pokemonList && pokemonDetailList.every(pokemonDetail => !!pokemonDetail);

  return (
    <>
      {!isLoaded && <Loader />}
      {isLoaded && (
        <>
          <div className={`list-view offset-${offset}`}>
            {pokemonDetailList.map((pokemonDetail) => (
              <Link className="list-pokemon-card" to={`/${pokemonDetail.name}`} key={pokemonDetail.name}>
                <PokemonCard pokemonDetail={pokemonDetail} />
              </Link>
            ))}
          </div>
          <Pagination previous={pokemonList.previous} next={pokemonList.next} />
        </>
      )}
    </>
  );
}

export default ListView;
