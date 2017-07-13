import React from 'react';

export class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPokemons();
  }

  render() {
    const { pokemon } = this.props;
    return(
      <ul className="poke-list">
        {
          pokemon.map((poke) => (
            <li className="poke-list-item" key={poke.id}>
              {poke.id}
              <img className="poke-thumbnail" src={ poke.image_url }/>
              {poke.name}
            </li>
          ))
        }
      </ul>
    );
  }
}
