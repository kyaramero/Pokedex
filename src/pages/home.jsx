import { Container } from '@mui/system'
import BannerArea from '../components/BannerArea'
import Cards from '../components/Cards'
import Grid from '@mui/material/Grid'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ContainerRow from '../components/ContainerRow'

export const Home = () => {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    getPokemon()
  }, [])

  const getPokemon = () => {
    let endpoints = []

    // Fetching a LIMITED list of pokemon
    for (let i = 1; i <= 151; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios
      .all(endpoints.map(endpoint => axios.get(endpoint)))
      .then(res => setPokemon(res))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <BannerArea />
      <ContainerRow />
      <Container maxWidth="false">
        <Grid container>
          {pokemon.map((poke, key) => (
            <Grid item xs={3} key={key}>
              <Cards
                name={poke.data.name}
                image={poke.data.sprites.front_default}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
