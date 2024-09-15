import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Header = ({ headerProps }) => {
  const divStyle = image => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundSize: 'cover',
    minHeight: { xs: '50vh', md: '65vh' },
    paddingBottom: { xs: '10vh', md: '23vh' },
    backgroundImage: `url(${image})`,
    width: '100%'
  })

  return (
    <Box sx={{ width: '100%' }}>
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        emulateTouch={true}
        style={{ display: 'flex', minWidth: '100%' }}
      >
        {Object.values(headerProps).map(item => (
          <Box key={item.id} sx={divStyle(item.image)}>
            <Typography variant="h1" component="div">
              {item.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: '2vh', mt: '2vh' }}>
              {item.subTitle}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#004A80',
                '&:hover': {
                  backgroundColor: '#1D497C',
                  transform: 'scale(1.02)'
                }
              }}
            >
              {item.buttonText}
            </Button>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default Header
