import { useMediaQuery } from '@mui/material'

const useIsMobile = () => {
  const matches = useMediaQuery('(min-width: 600px)')

  return !matches
}

export default useIsMobile
