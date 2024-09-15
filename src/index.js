import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './Pages/HomePage'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import AppRoutes from './Routes'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    primary: {
      main: '#004A80',
      dark: '#00375F'
    },
    bg: {
      white: '#FFFFFF',
      grey: '#F4F4F4'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Poppins',
      fontWeight: 600,
      color: '#FFFFFF',
      textShadow: '0px 3px 6px #00000029',
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem'
      },
      '@media (min-width:960px)': {
        fontSize: '3.75rem'
      },
      '@media (min-width:1280px)': {
        fontSize: '4rem'
      }
    },
    h2: {
      fontFamily: 'Poppins',
      fontSize: '40px',
      fontWeight: 700,
      color: '#000000'
    },
    h3: {
      fontFamily: 'Poppins',
      fontSize: '40px',
      fontWeight: 'bold',
      color: '#000000'
    },
    h4: {
      fontFamily: 'Poppins',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#000000'
    },
    body1: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      color: '#000000',
      textShadow: '0px 3px 6px #00000029',
      '@media (min-width:0px)': {
        fontSize: '0.75rem'
      },
      '@media (min-width:600px)': {
        fontSize: '0.85rem'
      },
      '@media (min-width:1280px)': {
        fontSize: '1rem'
      }
    },
    body2: {
      fontFamily: 'Poppins',
      fontSize: '12px',
      fontWeight: 'light',
      color: '#000000',
      textShadow: '0px 3px 6px #00000029'
    },
    subtitle1: {
      fontFamily: 'Poppins',
      color: '#FFFFFF',
      '@media (min-width:600px)': {
        fontSize: '0.75rem'
      },
      '@media (min-width:960px)': {
        fontSize: '1rem'
      },
      '@media (min-width:1280px)': {
        fontSize: '1.2rem'
      }
    }
  }
})
function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes>
        <HomePage />
      </AppRoutes>
    </ThemeProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
