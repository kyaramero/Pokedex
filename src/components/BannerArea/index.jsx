import React from 'react'
import { Banner } from './style'
import { Logo } from '../../assets'
import { BannerContainer } from './style'

export default function BannerArea() {
  return (
    <BannerContainer>
      <Banner src={Logo} alt="PokemonLogo" />
    </BannerContainer>
  )
}
