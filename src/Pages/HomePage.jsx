import React from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Navigator from '../Components/Navigator'
import Header from '../Components/Header'
import NossosAlojamentos from './HomePage/NossosAlojamentos'

import banner_header_1 from '../imgs/Home/Header/banner_header.webp'
import banner_header_2 from '../imgs/Home/Header/banner_header_b.webp'
import banner_header_3 from '../imgs/Home/Header/banner_header_c.webp'
import PraiasMontanhas from './HomePage/PraiasMontanhas'
import CampingField from './HomePage/CampingField'
import Review from './HomePage/Review'
import Faq from './HomePage/Faq'
import Contact from './HomePage/Contact'
import Footer from './HomePage/Footer'
import BookField from './HomePage/BookField'

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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      <Navigator />
      <Header headerProps={headerProps} />

      <BookField />
      <NossosAlojamentos />
      <PraiasMontanhas />
      <CampingField />
      <Review />
      <Faq />
      <Contact />
      <Footer />
    </Box>
  )
}

export default HomePage
