import React from 'react'
import { Box, Typography, Avatar } from '@mui/material'

const ReviewCard = ({ image, comment, name }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: { xs: 'column', sm: 'row' },
        width: { xs: '100%', md: '698px' },
        padding: { xs: 1, md: 2 },
        borderRadius: 2,
        gap: { xs: 1, md: 2 }
      }}
    >
      <Avatar
        alt={name}
        src={image}
        sx={{
          width: 95,
          height: 95
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 1
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
