import { SvgIcon } from '@mui/material'

const CloseIcon = ({ ...props }) => {
  return (
    <SvgIcon width='32' height='32' viewBox='0 0 24 24' {...props}>
      <path
        d='M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17'
        stroke='#ffffff'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </SvgIcon>
  )
}

export default CloseIcon
