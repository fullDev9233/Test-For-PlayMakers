import { Dialog, styled } from '@mui/material'

export const RulesModalContainer = styled(Dialog)(({ theme }) => ({
  '.MuiPaper-root': {
    position: 'relation',
    padding: '40px 30px',
    background: theme.palette.card.main,

    '.close-icon': {
      position: 'absolute',
      top: 25,
      right: 25,
    },

    img: {
      width: 420,
    },

    [theme.breakpoints.down('sm')]: {
      padding: '40px 20px',

      img: {
        width: '100%',
      },
    },
  },
}))
