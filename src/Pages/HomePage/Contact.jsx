import React from 'react'
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Container
} from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import Button1 from '../../Components/Buttons/Button1'

const Contact = () => {
  const textFieldStyles = {
    '& label.Mui-focused': {
      color: 'black'
    },
    '& .MuiInputLabel-root': {
      color: 'gray'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'primary.main'
      },
      '&:hover fieldset': {
        borderColor: 'primary.main'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'primary.main'
      }
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        p: { xs: '20px', md: '100px 10%' },
        bgcolor: 'bg.grey',
        alignItems: { xs: 'center', md: 'flex-start' }
      }}
    >
      <Container
        sx={{
          width: { xs: '100%', md: '50%' },
          textAlign: { xs: 'center', md: 'left' },
          mb: { xs: 4, md: 0 }
        }}
      >
        <Typography variant="h2" gutterBottom>
          Ainda com dúvidas sobre nossas acomodações e nosso espaço? Envie-nos
          uma mensagem agora mesmo!
        </Typography>
      </Container>

      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <TextField
          margin="normal"
          fullWidth
          id="nome"
          label="Nome"
          size="small"
          sx={textFieldStyles}
        />
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          size="small"
          sx={textFieldStyles}
        />
        <TextField
          margin="normal"
          fullWidth
          id="telefone"
          label="Telefone (opcional)"
          size="small"
          sx={textFieldStyles}
        />
        <TextField
          margin="normal"
          fullWidth
          multiline
          id="msg"
          label="Conte-nos como podemos ajudar"
          rows="4"
          sx={textFieldStyles}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            gap: 3,
            mt: 2
          }}
        >
          <Button1
            sx={{ width: 180, alignSelf: { xs: 'center', md: 'flex-start' } }}
            text="ENVIAR"
          />
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                />
              }
              label={
                <Typography variant="body1">
                  Concordo com a política de privacidade
                </Typography>
              }
              sx={{ height: 25 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                />
              }
              label={
                <Typography variant="body1">
                  Aceito receber notícias e promoções
                </Typography>
              }
              sx={{ height: 25 }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
