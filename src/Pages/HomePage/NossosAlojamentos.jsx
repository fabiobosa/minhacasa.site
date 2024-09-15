import React from 'react'
import { Box, Typography } from '@mui/material'
import CardSlider from '../../Components/CardSlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import icone_comodidade_ar from '../../imgs/Home/CardAlojamento/icone_comodidade_ar_minha_casa.svg'
import icone_comodidade_churrasqueira from '../../imgs/Home/CardAlojamento/icone_comodidade_churrasqueira_minha_casa.svg'
import icone_comodidade_cozinha from '../../imgs/Home/CardAlojamento/icone_comodidade_cozinha_minha_casa.svg'
import icone_comodidade_mar from '../../imgs/Home/CardAlojamento/icone_comodidade_mar_minha_casa.svg'
import icone_comodidade_piscina from '../../imgs/Home/CardAlojamento/icone_comodidade_piscina_minha_casa.svg'
import icone_comodidade_sinuca from '../../imgs/Home/CardAlojamento/icone_comodidade_sinuca_minha_casa.svg'
import icone_comodidade_tv from '../../imgs/Home/CardAlojamento/icone_comodidade_tv_minha_casa.svg'
import icone_comodidade_ventilador from '../../imgs/Home/CardAlojamento/icone_comodidade_ventilador_minha_casa.svg'
import icone_comodidade_wifi from '../../imgs/Home/CardAlojamento/icone_comodidade_wifi_minha_casa.svg'

import icone_capacidade_casa_mar from '../../imgs/Home/CardAlojamento/CasaMaraVista/icone_capacidade_casa_maravista_minha_casa.svg'
import foto_slider_casa_mar1 from '../../imgs/Home/CardAlojamento/CasaMaraVista/foto_a_slider_card_alojamento.webp'
import foto_slider_casa_mar2 from '../../imgs/Home/CardAlojamento/CasaMaraVista/foto_b_slider_card_alojamento.webp'
import foto_slider_casa_mar3 from '../../imgs/Home/CardAlojamento/CasaMaraVista/foto_c_slider_card_alojamento.webp'

import icone_capacidade_casa_avenida from '../../imgs/Home/CardAlojamento/CasaDaAvenida/icone_capacidade_casa_avenida_minha_casa.svg'
import foto_slider_casa_avenida1 from '../../imgs/Home/CardAlojamento/CasaDaAvenida/foto_a_slider_card_alojamento.webp'
import foto_slider_casa_avenida2 from '../../imgs/Home/CardAlojamento/CasaDaAvenida/foto_b_slider_card_alojamento.webp'
import foto_slider_casa_avenida3 from '../../imgs/Home/CardAlojamento/CasaDaAvenida/foto_c_slider_card_alojamento.webp'

import icone_capacidade_recanto from '../../imgs/Home/CardAlojamento/RecantoViana/icone_capacidade_recando_minha_casa.svg'
import foto_slider_casa_recanto1 from '../../imgs/Home/CardAlojamento/RecantoViana/foto_a_slider_card_alojamento.webp'
import foto_slider_casa_recanto2 from '../../imgs/Home/CardAlojamento/RecantoViana/foto_b_slider_card_alojamento.webp'
import foto_slider_casa_recanto3 from '../../imgs/Home/CardAlojamento/RecantoViana/foto_c_slider_card_alojamento.webp'

const NossosAlojamentos = () => {
  const cards = [
    {
      imgSrc: [
        foto_slider_casa_recanto1,
        foto_slider_casa_recanto2,
        foto_slider_casa_recanto3
      ],
      title: 'Casa completa com piscina',
      description:
        'Desfrute de bons momentos com sua família ou amigos em um espaço amplo e aconchegante',
      capacity: 15,
      capacityIcon: icone_capacidade_recanto,
      iconList: [
        icone_comodidade_piscina,
        icone_comodidade_cozinha,
        icone_comodidade_ar,
        icone_comodidade_tv,
        icone_comodidade_sinuca,
        icone_comodidade_wifi,
        icone_comodidade_churrasqueira,
        icone_comodidade_ventilador
      ]
    },
    {
      imgSrc: [
        foto_slider_casa_mar1,
        foto_slider_casa_mar2,
        foto_slider_casa_mar3
      ],
      title: 'Casa completa na beira mar',
      description:
        'Aproveite todo o conforto de uma casa confortável e tire dias de descanso com vista para o mar',
      capacity: 8,
      capacityIcon: icone_capacidade_casa_mar,
      iconList: [
        icone_comodidade_mar,
        icone_comodidade_cozinha,
        icone_comodidade_tv,
        icone_comodidade_wifi,
        icone_comodidade_churrasqueira,
        icone_comodidade_ventilador
      ]
    },
    {
      imgSrc: [
        foto_slider_casa_avenida1,
        foto_slider_casa_avenida2,
        foto_slider_casa_avenida3
      ],
      title: 'Casa confortábel próximo a praia',
      description:
        'Aproveite todo o conforto de uma casa confortável e tire dias de descanso a alguns metros do mar',
      capacity: 5,
      capacityIcon: icone_capacidade_casa_avenida,
      iconList: [
        icone_comodidade_cozinha,
        icone_comodidade_wifi,
        icone_comodidade_churrasqueira,
        icone_comodidade_ventilador
      ]
    }
  ]

  return (
    <Box sx={{}}>
      <Typography variant="h2" sx={{ mt: '10vh', ml: '20vw' }}>
        Nossos Alojamentos:
      </Typography>
      <Box
        sx={{
          mb: 15,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 5
        }}
      >
        <CardSlider cards={cards} />
      </Box>
    </Box>
  )
}

export default NossosAlojamentos
