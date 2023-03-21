import { styled } from '@mui/material'
import FlexBox from '../FlexBox'

export const GamePadContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'center',

  '.card': {
    marginLeft: 'auto',
    padding: '20px 30px',
    background: theme.palette.card.main,
    marginBottom: 30,
  },

  '.element-btn-group': {
    '.element-btn': {
      ':not(:last-of-type)': {
        marginRight: 12,
      },

      img: {
        width: 100,
      },
    },
  },
}))
