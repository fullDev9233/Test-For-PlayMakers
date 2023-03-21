import { useCallback, useState } from 'react'
import { Typography } from '@mui/material'
import RulesModal from '../RulesModal'
import { HeaderContainer } from './styles'
import LogoImg from '../../assets/imgs/logo.png'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleChange = () => {
    setOpen(true)
  }

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <header>
      <HeaderContainer>
        <img src={LogoImg} className='logo-img' alt='Logo' />

        <Typography
          variant='h3'
          component='div'
          className='rules'
          onClick={handleChange}
        >
          Rules
        </Typography>
      </HeaderContainer>

      {open && <RulesModal open={open} handleClose={handleClose} />}
    </header>
  )
}

export default Header
