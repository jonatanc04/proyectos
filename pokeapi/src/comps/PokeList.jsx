import React from 'react'
import { PokeRow } from './PokeRow'

const titles = ['ID', "Sprite", "Name", "Ability", "Hidden Ab.", "Weight", "Height"];

export const PokeList = ({ pokemons, search }) => {

  const filteredPokemon = pokemons.filter((pokemon) =>
  pokemon.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <table>
      <thead>
        <tr>
          {
            titles.map((title, index) => (
              <td key={index}>{title}</td>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          filteredPokemon.map((pokemon) => (
            <PokeRow pokemon={pokemon} />
          ))
        }
      </tbody>
    </table>
  )
}