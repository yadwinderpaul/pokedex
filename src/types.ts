export interface ListPokemon {
  id: number;
  name: string;
}

export interface ListAPIResult {
  count: number;
  previous: string | null;
  next: string | null;
  results: ListPokemon[];
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

export interface DetailPokemon {
  id: number;
  name: string;
  sprites: Sprites;
  types: Type[];
}
