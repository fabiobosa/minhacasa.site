import React, { useRef, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import ReviewCard from './ReviewCard'

const ReviewSlider = ({ cards }) => {
  const theme = useTheme()

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const ref = useRef()

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
    ref.current.scrollLeft -= walk
    setStartX(x)
  }

  const onMouseUp = () => {
    setIsDragging(false)
    ref.current.style.cursor = 'grab'
  }

  const onMouseLeave = () => {
    setIsDragging(false)
  }

  const onTouchStart = e => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - ref.current.offsetLeft)
  }

  const onTouchMove = e => {
    if (!isDragging) return
    const x = e.touches[0].pageX - ref.current.offsetLeft
    const walk = x - startX
    ref.current.scrollLeft -= walk
    setStartX(x)
  }

  const onTouchEnd = () => {
    setIsDragging(false)
  }

  const containerStyle = {
    display: 'flex',
    overflowX: 'auto',
    scrollBehavior: 'auto',
    gap: { xs: '0.5rem', md: '1rem' },
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }

  const spacerStyle = {
    minWidth: { xs: '250px', md: '370px' }
  }

  return (
    <Box
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      sx={containerStyle}
    >
      <Box sx={spacerStyle} />
      {cards.map((card, index) => (
        <div key={index} style={{ flexShrink: 0 }}>
          <ReviewCard
            name={card.name}
            comment={card.comment}
            image={card.image}
          />
        </div>
      ))}
      <Box sx={spacerStyle} />
    </Box>
  )
}

export default ReviewSlider
