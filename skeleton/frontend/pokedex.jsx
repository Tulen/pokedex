import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemons, requestAllPokemons } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import { selectAllPokemon } from './reducer/selectors';
import { configureStore } from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, rootEl);
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemons = receiveAllPokemons;
  window.requestAllPokemons = requestAllPokemons;
  window.selectAllPokemon = selectAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

});
