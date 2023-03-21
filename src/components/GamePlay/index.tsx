import { useCallback, useState } from 'react'
import { Card, IconButton, Typography } from '@mui/material'
import { GamePadContainer } from './styles'
import FlexBox from '../FlexBox'
import GameResult from '../GameResult'
import CashIcon from '../../assets/svgs/CashIcon'
import useIsMobile from '../../hooks/useIsMobile'
import { elements } from '../../utils/getImage'
import generateRandInt from '../../utils/getRandInt'
import getResult from '../../utils/getResult'

const GamePad = () => {
  const isMobile = useIsMobile()

  const [newGame, setNewGame] = useState(true)
  const [player, setPlayer] = useState(-1)
  const [computer, setComputer] = useState(-1)
  const [score, setScore] = useState({ player: 0, computer: 0 })
  const [result, setResult] = useState<ResultProps>({ title: '', color: '' })

  const handleChange = (id: number) => {
    // Set a new game
    setNewGame(false)

    setPlayer(id)

    // Set computer
    const _computer = generateRandInt()
    setComputer(_computer)

    // Calculate the result
    const _result = getResult(id, _computer)
    setResult(_result)

    // Calculate the score
    if (_result.title === 'You Won') {
      setScore({
        ...score,
        player: score.player + 1,
      })
    } else if (_result.title === 'You Lose') {
      setScore({
        ...score,
        computer: score.computer + 1,
      })
    }
  }

  const handleRetry = useCallback(() => {
    setNewGame(true)
  }, [])

  return (
    <GamePadContainer>
      <Card className='card'>
        <FlexBox sx={{ mb: 1 }}>
          <CashIcon sx={{ fontSize: 40 }} />
          <Typography variant='h3' color='text.secondary' ml={1}>
            Score
          </Typography>
        </FlexBox>

        {['Player', 'Computer'].map((item, id) => (
          <FlexBox key={item} sx={{ justifyContent: 'space-between' }}>
            <Typography variant='subtitle1' color='text.secondary'>
              {item}:
            </Typography>
            <Typography variant='h4' color='green.main'>
              {id === 0 ? score.player : score.computer}
            </Typography>
          </FlexBox>
        ))}
      </Card>

      {newGame ? (
        <>
          <Typography
            variant={isMobile ? 'h2' : 'h1'}
            color='text.primary'
            textAlign='center'
            mb={2}
          >
            Please choose one element to play
          </Typography>

          <FlexBox className='element-btn-group'>
            {elements.map((element, id) => (
              <IconButton
                key={element.name}
                aria-label={element.name}
                className='element-btn'
                onClick={() => handleChange(id)}
              >
                <img src={element.img} alt='Avatar' />
              </IconButton>
            ))}
          </FlexBox>
        </>
      ) : (
        <GameResult
          player={player}
          computer={computer}
          result={result}
          handleRetry={handleRetry}
        />
      )}
    </GamePadContainer>
  )
}

export default GamePad
