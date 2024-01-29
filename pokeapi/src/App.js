import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { PokeList } from './comps/PokeList';

function App() {

  const [pokemons, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const getData = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0");
    setPokemon(res.data.results);
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className="App">
      <input type='text' placeholder='Search pokemon...' className='buscar' onChange={e=>setSearch(e.target.value)}/>
      <PokeList pokemons={pokemons} search={search} />
    </div>
  );
}

export default App;
