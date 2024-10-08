import React from 'react'
import { Box, Typography, Avatar, useMediaQuery, useTheme } from '@mui/material'

const ReviewCard = ({ image, comment, name }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) // Detecta se a tela é mobile

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: { xs: 'row', sm: 'row' },
        width: { xs: '100%', md: '698px' },
        padding: { xs: 1, md: 2 },
        borderRadius: 2,
        gap: { xs: 1, md: 2 }
      }}
    >
      {/* Renderiza o Avatar apenas se não estiver no mobile */}
      {!isMobile && (
        <Avatar
          alt={name}
          src={image}
          sx={{
            width: 95,
            height: 95
          }}
        />
      )}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 1,
          maxWidth: '75vw'
        }}
      >
        <Typography variant="body1">
          {comment}
          <Box component="span" sx={{ fontWeight: 'bold', marginLeft: 1 }}>
            {name}
          </Box>
        </Typography>
      </Box>
    </Box>
  )
}

export default ReviewCard
