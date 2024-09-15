import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Button1 from './Buttons/Button1'
import Button2 from './Buttons/Button2'

const CardAlojamento = ({
  imgList,
  title,
  description,
  capacity,
  iconList,
  capacityIcon,
  bgColor
}) => {
  const handleBooking = () => {
    const bookingUrl = `https://www.minhacasa.site/pt/booking/room?info[arrival`
    window.location.href = bookingUrl
  }

  return (
    <Box
      sx={{
        width: '45vw',
        backgroundColor: bgColor,
        display: 'flex',
        borderRadius: 1,
        overflow: 'hidden',
        height: '100%',
        p: 4
      }}
    >
      <Box
        sx={{
          width: 316,
          height: '100%',
          '.carousel .slide': {
            background: 'none'
          }
        }}
      >
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={false}
        >
          {imgList.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={`Slide ${index}`} />
          ))}
        </Carousel>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
          ml: 3
        }}
      >
        <Grid container direction="row" alignItems="flex-start" spacing={2}>
          <Grid item>
            <img src={capacityIcon} alt="Ícone de Capacidade" />
          </Grid>
          <Grid item xs>
            <Typography variant="body1" fontWeight="bold" color="primary.main">
              Capacidade:
            </Typography>
            <Typography variant="body1" color="primary.main">
              {capacity} pessoas
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>

        <Grid container direction="row" spacing={2}>
          {iconList.map((icon, index) => (
            <Grid item key={index}>
              <img src={icon} alt="" />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end'
          }}
        >
          <Button1 onClick={handleBooking} text={'RESERVE AGORA'} />
          <Button2 text={'CONHECER ALOJAMENTO'} />
        </Box>
      </Box>
    </Box>
  )
}

export default CardAlojamento
