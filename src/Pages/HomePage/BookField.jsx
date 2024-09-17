import React, { useState } from 'react'
import { Box, TextField, Button, Grid } from '@mui/material'
import BasicDatePicker from '../../Components/BasicDatePicker'
import dayjs from 'dayjs'

const BookField = () => {
  const [startDate, setStartDate] = useState(dayjs())
  const [endDate, setEndDate] = useState(dayjs().add(2, 'day'))
  const [numberOfGuests, setNumberOfGuests] = useState(1)

  const handleStartDateChange = newValue => {
    setStartDate(newValue)
  }

  const handleEndDateChange = newValue => {
    setEndDate(newValue)
  }

  const handleGuestChange = event => {
    setNumberOfGuests(event.target.value)
  }

  const handleBooking = () => {
    const bookingUrl = `https://www.minhacasa.site/pt/booking/room?info%5Barrival_date%5D=${encodeURIComponent(
      startDate
    )}&info%5Bdeparture_date%5D=${encodeURIComponent(
      endDate
    )}&info%5Btotal_adult%5D=${encodeURIComponent(numberOfGuests)}`
    window.location.href = bookingUrl
  }

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        px: { xs: 2, md: 6 },
        width: '100%',
        py: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={4} sm={4} md="auto">
          <BasicDatePicker
            text="Check-in"
            value={startDate}
            onChange={handleStartDateChange}
            fullWidth 
          />
        </Grid>
        <Grid item xs={4} sm={4} md="auto">
          <BasicDatePicker
            text="Check-out"
            value={endDate}
            onChange={handleEndDateChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sm={4} md="auto">
          <TextField
            label="Hóspedes"
            variant="outlined"
            type="number"
            value={numberOfGuests}
            onChange={handleGuestChange}
            fullWidth 
            focused
          />
        </Grid>
        <Grid item xs={11} sm={4} md="auto">
          <Button
            variant="contained"
            onClick={handleBooking}
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: '#004A80',
              '&:hover': {
                backgroundColor: '#1D497C'
              }
            }}
          >
            VER DISPONIBILIDADE
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BookField
