import { Button, Typography } from '@mui/material'
import FlexBox from '../FlexBox'
import useIsMobile from '../../hooks/useIsMobile'
import { getImage } from '../../utils/getImage'
import { GameResultContainer, FlexColumn } from './styles'

interface GameResultProps {
  player: number
  computer: number
  result: ResultProps
  handleRetry: () => void
}

const GameResult = ({
  player,
  computer,
  result,
  handleRetry,
}: GameResultProps) => {
  const isMobile = useIsMobile()

  return (
    <GameResultContainer>
      <FlexBox>
        {[player, computer].map((element, id) => (
          <FlexColumn key={`element-${id}`} className='player'>
            <Typography
              variant={isMobile ? 'h2' : 'h1'}
              color='text.primary'
              textAlign='center'
              mb={2}
            >
              {id === 0 ? 'Player' : 'Computer'}
            </Typography>
            <img src={getImage(element)} alt='ElementImage' />
          </FlexColumn>
        ))}
      </FlexBox>

      <Typography variant='h1' my={4} sx={{ color: result.color }}>
        {result.title}
      </Typography>

      <Button variant='contained' onClick={handleRetry}>
        Retry Game
      </Button>
    </GameResultContainer>
  )
}

export default GameResult
