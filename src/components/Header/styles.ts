import { styled } from '@mui/material'
import FlexBox from '../FlexBox'

export const HeaderContainer = styled(FlexBox)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: '30px 0',

  '.logo-img': { width: 200 },

  '.rules': { cursor: 'pointer' },

  [theme.breakpoints.down('sm')]: {
    padding: '30px 0',

    '.logo-img': { width: 140 },
  },
}))
