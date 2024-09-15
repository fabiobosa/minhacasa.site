import React from 'react'
import { Box, Typography } from '@mui/material'
import ReviewSlider from '../../Components/ReviewSlider'
import imgMauriane from '../../imgs/Home/Prova_Social/miniatura_prova_social_mauriane_minha_casa.webp'
import imgGabriel from '../../imgs/Home/Prova_Social/miniatura_prova_social_gabriel_minha_casa.webp'
import imgGuilherme from '../../imgs/Home/Prova_Social/miniatura_prova_social_guilherme_minha_casa.webp'
import imgRodrigo from '../../imgs/Home/Prova_Social/miniatura_prova_social_rodrigo_minha_casa.webp'

const Review = () => {
  const cards = [
    {
      name: 'Mauriane',
      comment:
        'Conhecer uma nova cidade e ser recebido por um Anfitrião que demonstra estar feliz por te receber. Tem coisa melhor? Tudo impecável: receptividade, comunicação, wi-fi, dicas de onde ir em Araranguá e nos arredores. Cidade calma e aconchegante! Acomodações confortáveis, grandes, muito limpas! Espaço amplo permitindo tanto a convivência, mas também possui cantinhos mais reservados, caso queira privacidade. Uma ótima opção pra quem quer descansar e curtir sem estar longe do centro da cidade! - ',
      image: imgMauriane
    },
    {
      name: 'Gabriel',
      comment:
        'Um ambiente maravilhoso que nos disponibiliza tudo que precisamos. O acesso é perfeito e a cidade tem muitos atrativos turísticos. Considerei a estadia muito boa, pela disponibilidade do William e de sua família pra qualquer coisa que precisasse e pelo verdadeiro sentimento de estar em casa, e se sentir à vontade. São pessoas maravilhosas que merecem a retribuição do carinho e a gratidão por oferecem o melhor da humanidade que esperamos sempre e dificilmente encontramos! - ',
      image: imgGabriel
    },
    {
      name: 'Guilherme',
      comment:
        'Acomodações limpas, organizadas, reservadas e seguras! Não faltou nada! É tão bom ou melhor que um serviço de hotel! Sobre a hospitalidade: Família muito querida, fazendo de nós hóspedes parte dela! Prestativos, cuidadosos e amáveis! Um diferencial comparado a um serviço de hotel! Sobre Araranguá: Cidade com muito potencial! Em expansão imobiliária e com o Ponto Turístico do Morro dos Conventos sendo imperdível para quem passar por lá! - ',
      image: imgGuilherme
    },
    {
      name: 'Rodrigo',
      comment:
        'Excelente! Ambiente familiar, e não é qualquer família, é uma família que se ama e se respeita muito... adorei tudo, as acomodações, a cidade, a hospitalidade tudo muito bom. Um destaque para o pai do William, S. Nelson (que pessoa fantástica) muito simpático, atencioso, solícito. A viagem rendeu muitas fotos, bons momentos e ótimos amigos. - ',
      image: imgRodrigo
    }
  ]

  return (
    <Box
      sx={{ padding: { xs: '20px 10px', md: '20px 0' }, bgcolor: 'bg.grey' }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '918px' },
          height: 'auto',
          margin: { xs: '0 auto', md: '50px auto' },
          textAlign: { xs: 'center', md: 'left' }
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '1.5rem', md: '2.5rem' } }}
        >
          Veja o que nossos hospedes comentam sobre nossas acomodações:
        </Typography>
      </Box>

      <Box sx={{ width: '100%' }}>
        <ReviewSlider cards={cards} />
      </Box>
    </Box>
  )
}

export default Review
