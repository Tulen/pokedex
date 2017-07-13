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
          <ul>
            <li> <h2> {this.props.pokemonDetail.pokemon.name} </h2></li>
            <li> Type: {this.props.pokemonDetail.pokemon.poke_type} </li>
            <li> Attack: {this.props.pokemonDetail.pokemon.attack}</li>
            <li> Defense: {this.props.pokemonDetail.pokemon.defense} </li>
            <li> Moves: {this.props.pokemonDetail.pokemon.moves} </li>
          </ul>
        </div>
        <div className = 'poke-items-container'>
          <ul className = 'poke-items'> Items
            <li>
                <img src={this.props.pokemonDetail.items[0].image_url} />
            </li>
            <li>
              <img src={this.props.pokemonDetail.items[1].image_url} />
            </li>
            <li>
                <img src={this.props.pokemonDetail.items[2].image_url} />
            </li>
          </ul>
        </div>


      </section>
    );
  }
}
  // <img src={this.props.items} />
