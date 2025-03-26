import { DetailPokemon, ListAPIResult } from '../types';

const DEFAULT_POKEMON_LIMIT = 10;

export function getPokemons(offset: number): Promise<ListAPIResult> {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${DEFAULT_POKEMON_LIMIT}&offset=${offset}`)
    .then((res) => res.json());
}

export function getPokemonDetail(name: string): Promise<DetailPokemon> {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => res.json());
}
