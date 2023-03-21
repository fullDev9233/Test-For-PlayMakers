const getResult = (myValue: number, aiValue: number): ResultProps => {
  if (
    (myValue === 0 && aiValue === 1) ||
    (myValue === 1 && aiValue === 2) ||
    (myValue === 2 && aiValue === 0)
  ) {
    return { title: 'You Won', color: '#4CAF50' }
  } else if (myValue === aiValue) {
    return { title: 'It is Draw', color: 'rgba(0, 0, 0, 0.87)' }
  } else {
    return { title: 'You Lose', color: 'red' }
  }
}

export default getResult
