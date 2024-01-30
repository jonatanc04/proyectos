import React from 'react'

export const PokeRow = ({ pokemon }) => {

  return (
    <tr key={pokemon.id}>
      <td>{pokemon.id}</td>
      <td><img src={pokemon.sprites['front_default']} alt={pokemon.id}></img></td>
      <td>{pokemon.name}</td>
      <td>{pokemon.abilities[0].ability.name}</td>
      <td>{pokemon.abilities[1] ? pokemon.abilities[1].ability.name : "not found"}</td>
      <td>{pokemon.weight}</td>
      <td>{pokemon.height}</td>
    </tr>
  )
}