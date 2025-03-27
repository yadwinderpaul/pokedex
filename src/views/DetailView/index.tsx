import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import Abilities from './components/Abilities';
import Evolutions from './components/Evolutions';
import { getPokemonDetail } from '../../utils/api';
import PokemonCard from '../../components/PokemonCard';
import PokemonStats from './components/PokemonStats';
import Loader from '../../components/Loader';
import './index.scss';

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
      {isLoading && <Loader />}
      {isFetched && pokemonDetail && (
        <div className="detail-view">
          <PokemonCard pokemonDetail={pokemonDetail} />
          <PokemonStats pokemonDetail={pokemonDetail} />
          <Abilities abilities={pokemonDetail.abilities}/>
          <Evolutions pokemonName={pokemonDetail.name} species={pokemonDetail.species} />
        </div>
      )}
    </div>
  );
}

export default DetailView;
