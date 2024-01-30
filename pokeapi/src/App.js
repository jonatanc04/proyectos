import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { PokeList } from './comps/PokeList';

function App() {

  const [pokemons, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const getData = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1400&offset=0");
    return res.data.results;
  }

  const getPokemonDetails = async (name) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return res.data;
  }

  const getPokemon = async () => {
    const pokemonList = await getData();
    const detailedPokemonList = await Promise.all(pokemonList.map(async (pokemon) => {
      const details = await getPokemonDetails(pokemon.name);
      return details;
    }));
    setPokemon(detailedPokemonList);
  }

  useEffect(() => {
    getPokemon()
  },[])

  return (
    <div className="App">
      <input type='text' placeholder='Search pokemon...' className='buscar' onChange={e=>setSearch(e.target.value)}/>
      <PokeList pokemons={pokemons} search={search} />
    </div>
  );
}

export default App;
