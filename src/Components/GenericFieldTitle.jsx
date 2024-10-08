import React from 'react'
import { Box, Typography } from '@mui/material'

export const GenericFieldTitle = ({ imgSrc, title, text }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: { xs: 'center', md: 'flex-start' },
        gap: 2,
        width: '100%',
        minHeight: { xs: 'auto', md: '100%' }
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: { xs: 'left', md: 'left' }
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: { xs: 'left', md: 'left' }
        }}
      >
        {text}
      </Typography>

      <Box
        component="img"
        src={imgSrc}
        alt="Descrição da imagem"
        sx={{
          width: { xs: '100%', md: '100' },
          height: 'auto',
          maxWidth: '100%'
        }}
      />
    </Box>
  )
}

export default GenericFieldTitle
