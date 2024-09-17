import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'

const BookField = () => {
  useEffect(() => {
    // Carregar o script da Lodgify para renderizar a barra de pesquisa
    const script = document.createElement('script')
    script.src =
      'https://app.lodgify.com/portable-search-bar/stable/renderPortableSearchBar.js'
    script.defer = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script) // Limpa o script ao desmontar o componente
    }
  }, [])

  return (
    <div
      id="lodgify-search-bar"
      data-website-id="535408"
      data-language-code="pt"
      data-search-page-url="https://minhacasite.lodgify.com/pt/todas-as-propriedades"
      data-dates-check-in-label="Chegada"
      data-dates-check-out-label="Saída"
      data-guests-counter-label="Convidados"
      data-guests-input-singular-label="Convidado de {{NumberOfGuests}}"
      data-guests-input-plural-label="Convidados de {{NumberOfGuests}}"
      data-location-input-label="Localização"
      data-search-button-label="Pesquisar"
      data-dates-input-min-stay-tooltip-text='{"one":"Mínimo {minStay} noite","other":"Mínimo de {minStay} noites"}'
      data-new-tab="true"
      data-version="stable"
    ></div>
  )
}

export default BookField
