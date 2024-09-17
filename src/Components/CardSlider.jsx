import React, { useRef, useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import CardAlojamento from './CardAlojamento'
import { Box, useMediaQuery } from '@mui/material'

const CardSlider = ({ cards }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const ref = useRef()

  useEffect(() => {
    if (isMobile && ref.current) {
      ref.current.scrollTo({
        left: 365,
        behavior: 'smooth'
      })
    }
  }, [isMobile])

  const containerStyle = {
    display: 'flex',
    overflowX: 'auto',
    scrollBehavior: 'auto',
    gap: '1rem',
    cursor: 'grab',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }

  const onMouseDown = e => {
    setIsDragging(true)
    setStartX(e.pageX - ref.current.offsetLeft)
    ref.current.style.cursor = 'grabbing'
  }

  const onMouseMove = e => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    const walk = x - startX
    ref.current.scrollLeft = ref.current.scrollLeft - walk
    setStartX(x)
  }

  const onMouseUp = () => {
    setIsDragging(false)
    ref.current.style.cursor = 'grab'
  }

  const onMouseLeave = () => {
    setIsDragging(false)
  }

  const spacerStyle = {
    minWidth: 370
  }

  return (
    <Box
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      sx={containerStyle}
    >
      <Box sx={spacerStyle} />
      {cards.map((card, index) => (
        <Box key={index} sx={{ flexShrink: 0 }}>
          <CardAlojamento
            imgList={card.imgSrc}
            title={card.title}
            description={card.description}
            capacity={card.capacity}
            capacityIcon={card.capacityIcon}
            iconList={card.iconList}
            bgColor={'bg.grey'}
          />
        </Box>
      ))}
      <Box sx={spacerStyle} />
    </Box>
  )
}
export default CardSlider
