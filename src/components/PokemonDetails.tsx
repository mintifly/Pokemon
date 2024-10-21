import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../PokeDetails.css';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => {
        setPokemon(res.data);
      })
      .catch(error => console.error('Error fetching pokemon:', error));
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const typeClass = pokemon.types[0].type.name === 'grass' 
    ? 'type-green' 
    : pokemon.types[0].type.name === 'fire'
    ? 'type-red' 
    : pokemon.types[0].type.name === 'water'
    ? 'type-blue'
    : pokemon.types[0].type.name === 'bug'
    ? 'type-yellow'
    : ''

  const weightText = pokemon.weight >= 900 ? 'Жирний' :
  pokemon.weight <= 100 ? 'Дрищ' :
  pokemon.weight >= 100 && pokemon.weight <= 900 ? 'Нормальок' : '';

    return (
        <div className="pokemon-details">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p><span>Height:</span> {pokemon.height}</p>
          <p className = 'weight'><span>Weight:</span> {weightText}</p>
          <p><span>Experience:</span> {pokemon.base_experience}</p>
          <p className={`type ${typeClass}`}><span>Type:</span> {pokemon.types[0].type.name}</p>
          <p className="abilities">
            <span>Abilities:</span> {pokemon.abilities[0].ability.name}
          </p>
        </div>
      );
    };

export default PokemonDetails;
