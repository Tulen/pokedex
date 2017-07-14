import React from 'react';
import {values} from 'lodash';

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.id);
  }

  render() {
    console.log(this.props);
    return(

      <section className="poke-detail">
        <div className={`poke-img-container ${this.props.pokemonDetail.pokemon.poke_type}`}>
            <img src={this.props.pokemonDetail.pokemon.image_url} />
        </div>
        <div className="poke-stats">
          <h3> {this.props.pokemonDetail.pokemon.name} </h3>
          <div className="stats-container">
            <ul>
              <li> Type: {this.props.pokemonDetail.pokemon.poke_type} </li>
              <li> Attack: {this.props.pokemonDetail.pokemon.attack}</li>
              <li> Defense: {this.props.pokemonDetail.pokemon.defense} </li>
            </ul>
            <ul> Moves: {this.props.pokemonDetail.pokemon.moves.map(move => (<li> {move}</li>))}  </ul>
          </div>
          <div className = 'poke-items-container'>
            <ul className = 'poke-items'>
              <li>
                  <img src={this.props.pokemonDetail.items[0].image_url} />
                  <p>{this.props.pokemonDetail.items[0].name}</p>
              </li>
              <li>
                <img src={this.props.pokemonDetail.items[1].image_url} />
                <p>{this.props.pokemonDetail.items[1].name} </p>
              </li>
              <li>
                  <img src={this.props.pokemonDetail.items[2].image_url} />
                  <p>{this.props.pokemonDetail.items[2].name} </p>
              </li>
            </ul>
          </div>
        </div>



      </section>
    );
  }
}
  // <img src={this.props.items} />
