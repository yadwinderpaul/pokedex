import { Ability } from '../../../types';
import './Abilities.scss';

interface Props {
  abilities: Ability[];
}

function Moves ({ abilities }: Props) {
  return (
    <div className="abilities">
      <h2>Abilities</h2>
      <ul>
        {abilities.map(ability => (
          <li key={ability.ability.name}>
            {ability.ability.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Moves;
