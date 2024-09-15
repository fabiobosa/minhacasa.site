import React from 'react'
import bullet_icon from '../../imgs/Home/Faq/bullet_icon.svg'
import {
  Box,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Container,
  ListItemIcon
} from '@mui/material'

const Faq = () => {
  const questions = [
    {
      question: 'Os alojamentos ficam próximos a praia?',
      answer:
        'Sim, todos nossos espaços ficam no litoral de SC com ótima localização e proximidade a praia. Nosso alojamento mais distante fica a 13km da praia, enquanto nosso alojamento mais próximo fica na beira mar a 100 metros do mar.'
    },
    {
      question: 'Posso alugar por longos períodos?',
      answer:
        'Sim, oferecemos opções de longa duração, sujeitas à disponibilidade e termos específicos que podem ser discutidos no momento da reserva. Além disso, temos um desconto especial para locações acima de 29 dias.'
    },
    {
      question: 'Animais de estimação são permitidos?',
      answer:
        'Todos nossos alojamentos são Pet Friendly. Mas ainda sim pedimos que os hóspedes sempre nos questionem sobre isso, já que alguns de nossos alojamentos contam com cães de guarda e precisamos nos preparar nestas situações.'
    },
    {
      question: 'Como funcionam os check-in e check-out?',
      answer:
        'O check-in geralmente é a partir das 14h e o check-out até às 11h. Oferecemos flexibilidade nesses horários quando possível.'
    }
  ]

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'bg.white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '20px', md: '100px' }
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mb: { xs: 3, md: 5 },
          fontSize: { xs: '1.5rem', md: '2.5rem' }
        }}
      >
        Perguntas Frequentes
      </Typography>
      <List sx={{ width: '100%', maxWidth: { xs: '100%', md: '730px' } }}>
        {questions.map((faq, index) => (
          <Container
            key={faq.question}
            sx={{
              width: '100%',
              padding: { xs: '10px', md: '0' }
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemIcon sx={{ minWidth: 30, mt: 1.5 }}>
                <img src={bullet_icon} alt="" />
              </ListItemIcon>
              <ListItemText
                primary={faq.question}
                primaryTypographyProps={{
                  variant: 'body1',
                  mb: 1,
                  fontSize: { xs: '1rem', md: '1.25rem' }
                }}
                secondary={faq.answer}
                secondaryTypographyProps={{
                  variant: 'body2',
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              />
            </ListItem>
            {index < questions.length - 1 && <Divider component="li" />}
          </Container>
        ))}
      </List>
      <Button variant="text" sx={{ mt: 3 }}>
        <Typography
          variant="body1"
          sx={{ textDecoration: 'underline', color: 'black' }}
        >
          Mais perguntas
        </Typography>
      </Button>
    </Box>
  )
}

export default Faq
