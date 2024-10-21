import * as React from "react";
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

export default class PokemonList extends React.Component {
  state = {
    pokemons: []
  }
  
  

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=21`)
      .then(res => {
        const pokemons = res.data.results;
        const pokePromise = pokemons.map(pokemon => axios.get(pokemon.url));

        Promise.all(pokePromise)
          .then(res => {
            const pokemons = res.map(poke => poke.data);
            this.setState({ pokemons });
          })
      })
  }

  render() {
    return (
      <ul>
        {this.state.pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${pokemon.id}`}>
            <p className = 'name'>{pokemon.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    )
  };
}
