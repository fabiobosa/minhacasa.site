import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../../imgs/Home/Rodape/logo_rodape.svg'
import instaIcon from '../../imgs/Home/Rodape/logo_instagram.svg'
import faceIcon from '../../imgs/Home/Rodape/icone_facebook.svg'

const Footer = () => {
  const handleBooking = () => {
    const bookingUrl = `https://www.minhacasa.site/pt/booking/room?info[arrival`
    window.location.href = bookingUrl
  }

  const styles = {
    link: {
      textDecoration: 'none'
    },
    socialIcon: {
      maxWidth: '100%'
    },
    button: {
      color: 'white',
      borderColor: 'white',
      '&:hover': {
        color: 'black',
        borderColor: 'white',
        backgroundColor: 'white'
      }
    }
  }

  const FooterLink = ({ to, children }) => (
    <Link to={to} style={styles.link}>
      <Typography color="white">{children}</Typography>
    </Link>
  )

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        display: 'flex',
        color: 'white',
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        width: '100%',
        textAlign: { xs: 'center', md: 'left' },
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          justifyContent: 'center',
          alignItems: 'stretch',
          width: '100%',
          maxWidth: 1200
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={5}
          sx={{
            width: { xs: '100%', md: '80%' },
            mx: 'auto'
          }}
        >
          <Grid
            item
            xs={12}
            md={3}
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            gap={2}
          >
            <img
              src={logo}
              alt="Logo Minha Casa"
              style={{ width: '200px', height: 'auto' }}
            />
            <Button
              variant="outlined"
              onClick={handleBooking}
              sx={styles.button}
            >
              Reservar
            </Button>
          </Grid>
          <Grid item xs={12} md={3} container direction="column" gap={3}>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/alojamentos">Alojamentos</FooterLink>
            <FooterLink to="/camping">Camping</FooterLink>
          </Grid>

          <Grid item xs={12} md={3} container direction="column" gap={3}>
            <FooterLink to="/regiao">Região</FooterLink>
            <FooterLink to="/contato">Contato</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
          </Grid>
          <Grid item xs={12} md={3} container direction="column" gap={3}>
            <FooterLink to="/privacypolicy">Política de Privacidade</FooterLink>
            <FooterLink to="/useterms">Termos de Uso</FooterLink>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 2
              }}
            >
              <img
                src={faceIcon}
                alt="Facebook"
                style={{ width: 24, height: 24 }}
              />
              <img
                src={instaIcon}
                alt="Instagram"
                style={{ width: 24, height: 24 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Footer
