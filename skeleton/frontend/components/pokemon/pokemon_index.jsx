import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route, HashRouter } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

export class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPokemons();
  }

  render() {
    const { pokemon } = this.props;

    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);

    let urlPath = window.location.href;
    let pathRegexp = /pokemon\/(.*)/;
    let pathMatch = pathRegexp.exec(urlPath);
    let pokeId = pathMatch[1];

    return(
      <HashRouter>
        <section className="pokedex">
          <ul className="poke-list">
            {pokemonItems}
          </ul>
          <Route path={`/pokemon/${pokeId}`} render={() => (
              <PokemonDetailContainer id={pokeId} />
            )} />
        </section>
      </HashRouter>

    );
  }
}
