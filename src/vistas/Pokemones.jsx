import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/pokemones.css';

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
      .then(response => response.json())
      .then(data => setPokemones(data.results));
  }, []);

  const irAPokemon = (name) => {
    navigate(`/pokemones/${name}`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemones = pokemones.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pokemones-container">
      <h1>Selecciona un Pokémon</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={handleSearch}
          list="pokemones-list"
        />
        <datalist id="pokemones-list">
          {filteredPokemones.map(pokemon => (
            <option key={pokemon.name} value={pokemon.name} />
          ))}
        </datalist>
      </div>
      <button className="btn btn-danger" onClick={() => irAPokemon(searchTerm)}>Ver detalles</button> {/* Botón "Ver detalles" */}
    </div>
  );
}

export default Pokemones;
