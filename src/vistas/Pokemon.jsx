import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/Pokemon.css';
import { getBackground } from '../assets/js/backgrounds';

const IMAGE_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';

const Pokemon = () => {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => setPokemonData(data));
  }, [name]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  console.log(pokemonData);
  const { id, name: pokemonName, stats, types } = pokemonData;
  const idFormatted = id.toString().length > 3 ? id : `00${id}`.slice(-3);
  const pascalCaseName = pokemonName[0].toUpperCase() + pokemonName.slice(1);

  return (
    <div className="pokemon-container" style={{ backgroundColor: getBackground(types) }}>
      <div className="pokemon-details">
        <div className="pokemon-image-container">
          <img
            className="pokemon-image"
            src={IMAGE_URL + `${idFormatted}.png`}
            alt={pokemonName}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/404.png';
              e.target.alt = 'Pokemon no encontrado';
              e.target.style = 'width: 400px;';
            }}
          />
        </div>
        <div className="pokemon-info">
          <h1>{pascalCaseName}</h1>
          <h2>Stats:</h2>
          <ul>
            {stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
          <h2>Types:</h2>
          <ul>
            {types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
