import RockImg from '../assets/imgs/rock.png'
import ScissorsImg from '../assets/imgs/scissors.png'
import PaperImg from '../assets/imgs/paper.png'

export const elements = [
  {
    name: 'rock',
    img: RockImg,
  },
  {
    name: 'scissors',
    img: ScissorsImg,
  },
  {
    name: 'paper',
    img: PaperImg,
  },
]

export const getImage = (option: number) => {
  switch (option) {
    case 0:
      return RockImg
    case 1:
      return ScissorsImg
    case 2:
      return PaperImg
    default:
      return RockImg
  }
}
