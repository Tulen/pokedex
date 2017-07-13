export const RECEIVE_ALL_POKEMONS = "RECEIVE_ALL_POKEMONS";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";


import { fetchAllPokemon, fetchSinglePokemon } from '../util/api_util';


export const receiveAllPokemons = pokemons => ({
  type: RECEIVE_ALL_POKEMONS,
  pokemons
});

export const requestAllPokemons = () => (dispatch) => {
  return fetchAllPokemon()
    .then(pokemons => dispatch(receiveAllPokemons(pokemons)));
};

export const receiveSinglePokemon = pokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon
});

export const requestSinglePokemon = (id) => (dispatch) => {
  return fetchSinglePokemon(id)
    .then(pokemon => dispatch(receiveSinglePokemon(pokemon)));
};
