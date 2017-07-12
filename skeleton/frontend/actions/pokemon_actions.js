export const RECEIVE_ALL_POKEMONS = "RECEIVE_ALL_POKEMONS";

import { fetchAllPokemon } from '../util/api_util';

export const receiveAllPokemons = pokemons => ({
  type: RECEIVE_ALL_POKEMONS,
  pokemons
});

export const requestAllPokemons = () => (dispatch) => {
  return fetchAllPokemon()
    .then(pokemons => dispatch(receiveAllPokemons(pokemons)));
};
