import React from 'react'
import { Button } from '@mui/material'

const Button2 = ({ text, onClick }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        p: { xs: 1, md: 1.5 },
        ml: 2,
        typography: 'body1',
        color: '#004A80',
        borderColor: '#004A80',
        '&:hover': {
          color: 'white',
          backgroundColor: '#1D497C',
          transform: 'scale(1.05)'
        }
      }}
    >
      {text}
    </Button>
  )
}

export default Button2
