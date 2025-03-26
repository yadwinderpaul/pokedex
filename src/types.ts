export interface PokemonInfo {
  id: number;
  name: string;
}

export interface ListAPIResult {
  count: number;
  previous: string | null;
  next: string | null;
  results: PokemonInfo[];
}

interface Sprites {
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}

interface Type {
  slot: number,
  type: {
    name: string;
    url: URL;
  }
};

export interface Ability {
  ability: {
    name: string;
    url: URL;
  }
};

export interface SpeciesInfo {
  name: string;
  url: URL;
};

export interface Stat {
  base_stat: number;
  stat: {
    name: string,
  }
}

export interface PokemonDetail {
  id: number;
  name: string;
  stats: Stat[];
  sprites: Sprites;
  types: Type[];
  abilities: Ability[];
  species: SpeciesInfo;
}

export interface SpeciesDetail {
  name: string;
  evolution_chain: {
    url: URL;
  };
}

export interface Evolution {
  species: SpeciesInfo;
  evolves_to: Evolution[];
}

export interface EvolutionDetail {
  id: number;
  chain: Evolution;
}
