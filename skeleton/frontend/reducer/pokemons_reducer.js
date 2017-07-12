//beware plural pokemons
import {RECEIVE_ALL_POKEMONS} from '../actions/pokemon_actions';
import {merge} from 'lodash';


export const pokemonsReducer = (state={},action) => {
  Object.freeze(state);
  const newState = Object.assign({},state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMONS:
      return action.pokemons;
    default:
      return state;

  }
};
