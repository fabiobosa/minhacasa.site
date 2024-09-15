import React from 'react'
import { Box } from '@mui/material'
import GenericFieldTitle from '../../Components/GenericFieldTitle'
import GenericFieldButton from '../../Components/GenericFieldButton'
import imagem_camping01 from '../../imgs/Home/Camping/imagem_camping01.webp'
import imagem_camping02 from '../../imgs/Home/Camping/imagem_camping02.webp'

const CampingField = () => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'bg.white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: 2, md: 8 }
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
        <Box
          sx={{
            order: { xs: 2, md: 1 }
          }}
        >
          <GenericFieldButton
            imgSrc={imagem_camping01}
            text={
              'Você pode vir acampar com sua barraca ou estacionar seu Motorhome em uma praia tranquila com uma localização privilegiada e uma vista direto para o mar.'
            }
            buttonText={'CONHECER CAMPING'}
          />
        </Box>
        <Box
          sx={{
            order: { xs: 1, md: 2 }
          }}
        >
          <GenericFieldTitle
            imgSrc={imagem_camping02}
            text={
              'Que tal aproveitar o verão em um camping a beira mar totalmente equipado com cozinha coletiva, churrasqueiras, banheiros com chuveiro quente além de muito conforto?!'
            }
            title={
              'Seja de barraca ou motorhome, visite o camping mar a vista!'
            }
          />
        </Box>
      </Box>
    </Box>
  )
}

export default CampingField
