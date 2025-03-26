import { PokemonDetail, ListAPIResult, SpeciesDetail, SpeciesInfo, EvolutionDetail } from '../types';

const DEFAULT_POKEMON_LIMIT = 10;

export function getPokemons(offset: number): Promise<ListAPIResult> {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${DEFAULT_POKEMON_LIMIT}&offset=${offset}`)
    .then((res) => res.json());
}

export function getPokemonDetail(name: string): Promise<PokemonDetail> {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => res.json());
}

export function getEvolutionsFromSpecies(species: SpeciesInfo): Promise<EvolutionDetail> {
  return fetch(species.url)
    .then((res) => res.json())
    .then((data: SpeciesDetail) => data.evolution_chain.url)
    .then((url) => fetch(url))
    .then((res) => res.json());
}
