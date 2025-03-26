import { PokemonDetail, Stat } from '../../../types';
import './PokemonStats.scss';

interface Props {
  pokemonDetail: PokemonDetail;
}

function PokemonStats({ pokemonDetail }: Props) {
  const nonSpecialStats = pokemonDetail.stats.filter((stat) => !/special/.test(stat.stat.name));
  const specialStats = pokemonDetail.stats.filter((stat) => /special/.test(stat.stat.name));

  const renderStatsRow = (stats: Stat[]) => (
    <div className="stats-row">
      {stats.map((stat) => (
        <div key={stat.stat.name} className="stat">
          <div>{stat.stat.name}</div>
          <div className='value'>{stat.base_stat}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="card pokemon-stats">
      {renderStatsRow(nonSpecialStats)}
      {renderStatsRow(specialStats)}
    </div>
  );
}

export default PokemonStats;
