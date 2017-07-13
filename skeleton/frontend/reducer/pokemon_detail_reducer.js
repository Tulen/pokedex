import {RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';
import {merge} from 'lodash';

const defaultState = {
  items: [{
    image_url: ''
  },{
    image_url: ''
  },{
    image_url: ''
  }],
  pokemon: {

  }
};

export const pokemonDetailReducer = (state= defaultState,action) => {
  Object.freeze(state);
  const newState = Object.assign({},state);
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};
