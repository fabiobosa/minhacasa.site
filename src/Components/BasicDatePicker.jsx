import React from 'react'
import { Box, Container } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

const BasicDatePicker = ({ text, value, onChange }) => {
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={text}
          defaultValue={dayjs()}
          format="DD/MM/YYYY"
          value={value}
          onChange={onChange}
          sx={{ width: '100%' }}
        />
      </LocalizationProvider>
    </Box>
  )
}

export default BasicDatePicker
