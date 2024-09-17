import React from 'react'
import { Box, Typography } from '@mui/material'
import Button1 from '../Components/Buttons/Button1'

const GenericFieldButton = ({ imgSrc, text, buttonText }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'flex-start', md: 'flex-start' },
        gap: 2,
        width: '100%',
        minHeight: { xs: 'auto', md: '507px' }
      }}
    >
      <Box
        component="img"
        src={imgSrc}
        alt="Descrição da imagem"
        sx={{
          width: { xs: '100%', md: '100%' },
          height: 'auto',
          maxWidth: '100%'
        }}
      />
      <Typography
        variant="body1"
        sx={{
          textAlign: { xs: 'left', md: 'left' }
        }}
      >
        {text}
      </Typography>

      <Button1 text={buttonText} />
    </Box>
  )
}

export default GenericFieldButton
