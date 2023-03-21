import { IconButton, Typography } from '@mui/material'
import { RulesModalContainer } from './styles'
import CloseIcon from '../../assets/svgs/CloseIcon'
import RulesImg from '../../assets/imgs/rules.png'

interface RulesModalProps {
  open: boolean
  handleClose: () => void
}

const RulesModal = ({ open, handleClose }: RulesModalProps) => (
  <RulesModalContainer open={open} onClose={handleClose}>
    <Typography variant='h1' color='text.secondary' textAlign='center' mb={3}>
      Rules
    </Typography>

    <IconButton sx={{ p: 0 }} className='close-icon' onClick={handleClose}>
      <CloseIcon sx={{ fontSize: 32 }} />
    </IconButton>

    <img src={RulesImg} alt='Rule' />
  </RulesModalContainer>
)

export default RulesModal
