import { Container } from '@mui/system'
import * as React from 'react'
import BannerArea from '../components/BannerArea'
import Cards from '../components/Cards'
import InputArea from '../components/InputArea'
import BasicSelect from '../components/Select'
import Grid from '@mui/material/Grid'

export const Home = () => {
  return (
    <div>
      <BannerArea />
      <InputArea />
      <BasicSelect />
      <Container maxWidth="false">
        <Grid container>
          <Grid item xs={3}>
            <Cards />
          </Grid>
          <Grid item xs={3}>
            <Cards />
          </Grid>
          <Grid item xs={3}>
            <Cards />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
