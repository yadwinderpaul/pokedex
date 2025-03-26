import './PokemonType.scss';

interface Props {
  typeName: string;
}

function Type ({ typeName }: Props) {
  return (
    <span
      className="pokemon-type"
      style={{ backgroundColor: `var(--pokemon-type-${typeName})` }}
    >{typeName}</span>
  );
}

export default Type;
