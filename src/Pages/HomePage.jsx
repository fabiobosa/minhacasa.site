import React from 'react'
import { Box } from '@mui/material'
import banner_header_1 from '../assets/imgs/Home/Header/banner_header.webp'
import banner_header_2 from '../assets/imgs/Home/Header/banner_header_b.webp'
import banner_header_3 from '../assets/imgs/Home/Header/banner_header_c.webp'
import Header from '../Components/Header'

const headerProps = {
  element1: {
    image: banner_header_1,
    title: 'Casa completa com piscina',
    subTitle:
      'Desfrute de bons momentos com sua família ou amigos em um espaço almplo e aconchegante',
    buttonText: 'Conhecer alojamento'
  },
  element2: {
    image: banner_header_2,
    title: 'Casa completa na beira mar',
    subTitle:
      'Aproveite todo o conforte de uma casa confortável e tire dias de descanso com vista para o mar',
    buttonText: 'Conhecer alojamento'
  },
  element3: {
    image: banner_header_3,
    title: 'Casa confortável próximo a praia',
    subTitle:
      'Aproveite todo o conforto de uma casa confortável e tire dias de descanso a poucos metros do mar',
    buttonText: 'Conhecer alojamento'
  }
}

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      <Header headerProps={headerProps} />
    </Box>
  )
}

export default HomePage
