//beware plural pokemons
import {RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';
import {merge} from 'lodash';


export const itemsReducer = (state={},action) => {
  Object.freeze(state);
  const newState = Object.assign({},state);
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.pokemon;
    default:
      return state;

  }
};
