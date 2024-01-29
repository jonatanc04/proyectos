import React, { useState } from 'react'
import axios from 'axios';

export const PokeRow = ({ pokemon }) => {

  const [poke, setPokemon] = useState([]);
  const getData = async () => {
    const res = await axios.get(pokemon.url);
    setPokemon(res.data);
  }
  getData();

  return (
    <tr key={poke.id}>
      <td>{poke.id}</td>
      <td><img src={poke.sprites['front_default']} alt={poke.id}></img></td>
      <td>{poke.name}</td>
      <td>{poke.abilities[0].ability.name}</td>
    </tr>
  )
}
