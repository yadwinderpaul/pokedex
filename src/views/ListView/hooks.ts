import { useQueries, useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { getPokemonDetail, getPokemons } from '../../utils/api';
import { ListAPIResult } from '../../types';

export function useOffset() {
  const [searchParams] = useSearchParams();
  let offset = 0;
  try {
    offset = parseInt(searchParams.get('offset') ?? '0', 10);
  } catch {
    console.warn('Invalid offset', searchParams.get('offset'));
  }

  return { offset };
}

export function useGetPokemonsList({ offset }: { offset: number }) {
  const {
    data: pokemonList,
    isFetched: isFetchedPokemonList,
  } = useQuery({
    queryKey: ['pokemonsList', offset],
    queryFn: async () => getPokemons(offset),
  });

  return {
    pokemonList,
    isFetchedPokemonList,
  };
}

export function useGetPokemonDetailList({ enabled, pokemonList }: { enabled: boolean, pokemonList?: ListAPIResult }) {
  const pokemonDetailQueries = useQueries({
    queries: (pokemonList?.results || []).map((pokemon) => {
      return {
        queryKey: ['pokemonDetail', pokemon.name],
        queryFn: () => getPokemonDetail(pokemon.name),
        enabled: enabled,
      };
    }),
  });

  const pokemonDetailList = pokemonDetailQueries.map(query => query.data);

  return { pokemonDetailList };
}
