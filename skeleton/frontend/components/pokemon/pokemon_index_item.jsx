import React from 'react';
import { Link, HashRouter, Route } from 'react-router-dom';


export default class PokemonIndexItem extends React.Component{
  constructor (props) {
    super(props);
    this.pokemon_name = props.pokemon.name;
    this.pokemon_image = props.pokemon.image_url;
  }

  render () {


    return (
      <li className="poke-list-item" >
        <Link to={`/pokemon/${this.props.pokemon.id}`}>
          {this.props.pokemon.id}
          <img className="poke-thumbnail" src={ this.pokemon_image}/>
          {this.pokemon_name}
        </Link>
      </li>

    );
  }

}
