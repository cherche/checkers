import Checkers from './js/checkers.js'

const checkers = Checkers(8, 8)
checkers.board.set([3, 3], 2)

window.checkers = checkers
function array2ToString (array2) {
  const width = array2.length
  const height = array2[0].length
  let string = ''

  // Order of iteration does matter
  // since we're appending to a string
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      string += array2[x][y]
    }

    string += '\n'
  }

  return string
}

console.log(array2ToString(checkers.board))
