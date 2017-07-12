import {combineReducers} from 'redux';
import {pokemonsReducer} from './pokemons_reducer'; //beware plural


export const rootReducer = combineReducers({
  pokemon: pokemonsReducer
});
