import { styled } from '@mui/material'

const Layout = styled('div')(({ theme }) => ({
  padding: '0 60px',

  [theme.breakpoints.down('sm')]: {
    padding: '0 20px',

    '.logo-img': {
      width: 140,
    },
  },
}))

export default Layout
