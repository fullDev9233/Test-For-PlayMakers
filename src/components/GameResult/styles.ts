import { styled } from '@mui/material'
import FlexBox from '../FlexBox'

export const FlexColumn = styled(FlexBox)(() => ({
  flexDirection: 'column',
  alignItems: 'center',
}))

export const GameResultContainer = styled(FlexColumn)(({ theme }) => ({
  '.player': {
    ':not(:last-of-type)': {
      marginRight: 40,
    },

    img: {
      width: 120,
    },
  },

  button: {
    padding: '10px 32px',
    background: theme.palette.button.main,
    color: theme.palette.secondary.main,
    fontSize: 18,
    borderRadius: 8,

    ':hover': {
      background: theme.palette.button.main,
      color: theme.palette.secondary.main,
    },
  },
}))
