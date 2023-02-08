import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function PokeAPI() {
  const [pokemon, setPokemon] = useState([])
  const getPokemon = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getPokemon()
  })
}
