import {combineReducers} from 'redux';
import {pokemonsReducer} from './pokemons_reducer'; //beware plural
import {itemsReducer} from './items_reducer';
import {pokemonDetailReducer} from './pokemon_detail_reducer';


export const rootReducer = combineReducers({
  pokemon: pokemonsReducer,
  items: itemsReducer,
  pokemonDetail: pokemonDetailReducer
});
