import React from 'react'
import { IconButton } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const WhatsAppButton = ({ phoneNumber }) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}`
    window.open(url, '_blank')
  }

  return (
    <IconButton
      onClick={handleClick}
      sx={{
        position: 'fixed', // Faz o botão ser fixo na tela
        bottom: { xs: 10, md: 100 },
        right: { xs: 10, md: 250 },
        backgroundColor: '#25D366', // Cor verde do WhatsApp
        '&:hover': {
          backgroundColor: '#128C7E'
        },
        width: 56,
        height: 56,
        color: 'white',
        borderRadius: '50%',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Adiciona uma sombra para destacar o botão
        zIndex: 1000 // Garante que o botão fique acima de outros elementos
      }}
    >
      <WhatsAppIcon fontSize="large" />
    </IconButton>
  )
}

export default WhatsAppButton
