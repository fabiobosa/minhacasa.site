import React from 'react'
import { Box } from '@mui/material'
import GenericFieldTitle from '../../Components/GenericFieldTitle'
import GenericFieldButton from '../../Components/GenericFieldButton'
import imagem_morro01 from '../../imgs/Home/Regiao/imagem_morro01.webp'
import imagem_morro02 from '../../imgs/Home/Regiao/imagem_morro02.webp'

export const PraiasMontanhas = () => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'bg.grey',
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
          sx={{ width: { xs: '100%', md: '50%' } }}
        >
          <GenericFieldTitle
            imgSrc={imagem_morro01}
            text={
              'Estamos localizados no extremo sul de Santa Catarina, uma região abençoada por suas lindas praias e litoral de beleza exuberante para aproveitar os dias quentes.'
            }
            title={'Explore nossa região com lindas praias e montanhas!'}
          />
        </Box>

        <Box
          sx={{ width: { xs: '100%', md: '50%' } }}
        >
          <GenericFieldButton
            imgSrc={imagem_morro02}
            text={
              'Mas aqui você também pode aproveitar ao máximo o inverno gelado do sul do país curtindo lindas paisagens montanhosas próximo a serra onde neva no inverno.'
            }
            buttonText={'CONHECER REGIÃO'}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default PraiasMontanhas
