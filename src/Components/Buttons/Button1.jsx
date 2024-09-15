import React from 'react'
import { Button } from '@mui/material'

const Button1 = ({ text, sx, onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        ...sx,
        backgroundColor: '#004A80',
        typography: 'body1',
        color: 'white',
        '&:hover': {
          backgroundColor: '#1D3453',
          transform: 'scale(1.05)'
        }
      }}
    >
      {text}
    </Button>
  )
}

export default Button1
