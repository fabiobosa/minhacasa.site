import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoG from '../imgs/Home/Menu/logoG.svg'
import logoP from '../imgs/Home/Menu/logoP.svg'
import {
  useScrollTrigger,
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

function useElevateAppBar() {
  return useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  })
}

const Navigator = () => {
  const [elevateNav, setElevateNav] = useState(false)
  const trigger = useElevateAppBar()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    if (isMobile) {
      setElevateNav(true)
    } else {
      setElevateNav(trigger)
    }
  }, [trigger, isMobile])

  const handleBooking = () => {
    const bookingUrl = 'https://www.minhacasa.site/pt/booking/room?info[arrival'
    window.location.href = bookingUrl
  }

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const TransparentButtonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    color: 'white',
    '&:hover': {
      fontWeight: 'bold',
      textDecoration: 'underline'
    }
  }

  const NavContent = ({ isMobile }) => {
    if (isMobile) {
      return (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
            <List>
              <ListItem button component={Link} to="/alojamentos">
                <ListItemText primary="Alojamentos" />
              </ListItem>
              <ListItem button component={Link} to="/camping">
                <ListItemText primary="Camping" />
              </ListItem>
              <ListItem button component={Link} to="/regiao">
                <ListItemText primary="Região" />
              </ListItem>
              <ListItem button component={Link} to="/contato">
                <ListItemText primary="Contato" />
              </ListItem>
              <ListItem button onClick={handleBooking}>
                <ListItemText primary="Reservar" />
              </ListItem>
            </List>
          </Drawer>
        </>
      )
    }
    return (
      <Box display="flex" alignItems="center" gap={3}>
        <Link to="/alojamentos">
          <Button sx={TransparentButtonStyle}>Alojamentos</Button>
        </Link>
        <Link to="/camping">
          <Button sx={TransparentButtonStyle}>Camping</Button>
        </Link>
        <Link to="/regiao">
          <Button sx={TransparentButtonStyle}>Região</Button>
        </Link>
        <Link to="/contato">
          <Button sx={TransparentButtonStyle}>Contato</Button>
        </Link>
        <Button
          variant="outlined"
          onClick={handleBooking}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              color: '#004A80',
              borderColor: 'white',
              backgroundColor: 'white'
            }
          }}
        >
          Reservar
        </Button>
      </Box>
    )
  }

  return (
    <Box display="flex" sx={{ flexGrow: 1, background: 'black' }}>
      <AppBar
        position="fixed"
        elevation={elevateNav ? 4 : 0}
        sx={{
          backgroundColor: elevateNav ? 'primary.main' : 'transparent',
          transition: '0.3s'
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            maxWidth: '1200px',
            width: '100%',
            mx: 'auto',
            px: { xs: 2, md: 4 }
          }}
        >
          <Link to="/">
            <img
              src={elevateNav ? logoP : logoG}
              alt="Logo"
              style={{
                height: elevateNav ? '50px' : '70px',
                transition: '0.3s'
              }}
            />
          </Link>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <NavContent isMobile={false} />
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <NavContent isMobile={true} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navigator
