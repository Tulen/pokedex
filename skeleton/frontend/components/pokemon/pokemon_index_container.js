import { connect } from 'react-redux';
import { PokemonIndex } from './pokemon_index';
import { selectAllPokemon } from '../../reducer/selectors';
import { requestAllPokemons } from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state),
  // items:
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemons: (pokemon) => (
    dispatch(requestAllPokemons(pokemon))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
