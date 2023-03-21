import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          '& ::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
          },
          '& ::-webkit-scrollbar-track': {
            boxShadow: `inset 0 0 5px #fff`,
            borderRadius: '10px',
          },
          '& ::-webkit-scrollbar-thumb': {
            backgroundColor: '#C4C8CC',
            borderRadius: '10px',
          },
          '& ::-webkit-scrollbar-thumb:hover': {},
        },
        body: {
          background: '#F1F1F1',
        },
      },
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeightRegular: 'normal',
    h1: {
      fontSize: 48,
      lineHeight: '56px',
      fontWeight: 700,
    },
    h2: {
      fontSize: 30,
      lineHeight: '42px',
      fontWeight: 600,
    },
    h3: {
      fontSize: 26,
      lineHeight: '41px',
      fontWeight: 500,
    },
    h4: {
      fontSize: 24,
      lineHeight: 1.2,
      fontWeight: 600,
    },
    h5: {
      fontSize: 20,
      lineHeight: 1.4,
      fontWeight: 500,
    },
    h6: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 15,
      lineHeight: 1.2,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: '24px',
      fontWeight: 500,
    },
    body1: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 400,
    },
    body2: {
      fontSize: 13,
      lineHeight: '18px',
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
      lineHeight: '20px',
      fontWeight: 400,
    },
  },
  palette: {
    primary: { main: '#F1F1F1' },
    secondary: { main: '#fff' },
    button: { main: '#5865F2' },
    card: {
      main: 'linear-gradient(252.31deg, #7C4DFF 37.91%, #7C4DFF 37.91%, #FB4DFF 86.97%)',
    },
    green: { main: '#4CAF50' },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: '#fff',
    },
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    button: Palette['primary']
    card: Palette['primary']
    green: Palette['primary']
  }

  interface PaletteOptions {
    button?: PaletteOptions['primary']
    card?: PaletteOptions['primary']
    green?: PaletteOptions['primary']
  }
}

export default theme
