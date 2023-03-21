import { SvgIcon } from '@mui/material'

const CashIcon = ({ ...props }) => {
  return (
    <SvgIcon width='41' height='41' viewBox='0 0 41 41' {...props}>
      <path
        d='M6.57143 33.8869L1 20.5L7.03571 6.72619L20.2292 1L33.9256 6.72619L39.6131 20.5L33.7321 33.8869L20.2679 40L6.57143 33.8869Z'
        fill='#4CAF50'
        stroke='#4CAF50'
      />
      <path
        d='M12.8782 27.6191L9.70557 15.5476L15.4318 18.1399L20.3454 12.2589L25.2591 17.9851L30.9079 15.5476L27.5806 27.6191H12.8782Z'
        fill='#4CAF50'
        stroke='white'
        strokeWidth='2'
      />
    </SvgIcon>
  )
}

export default CashIcon
