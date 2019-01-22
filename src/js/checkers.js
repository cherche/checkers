import Array2 from './array2.js'

function Checkers (width, height, whiteRows = 3, blackRows = 3) {
  const checkers = {
    width,
    height,
    whiteRows,
    blackRows,
    turn: 0
  }

  checkers.resetBoard = function resetBoard () {
    const board = Array2({
      fill: 0,
      size: [checkers.width, checkers.height]
    })

    // Place all the white tiles
    for (let y = 0; y < checkers.whiteRows; y++) {
      // We start at row % 2 since it's a checker board
      // That is to say, each row of pieces of staggered
      for (let x = y % 2; x < checkers.width; x += 2) {
        board[x][y] = 1
      }
    }

    // Place all the black tiles
    for (let y = checkers.height - blackRows; y < checkers.height; y++) {
      for (let x = y % 2; x < checkers.width; x += 2) {
        board[x][y] = 2
      }
    }

    checkers.board = board
  }

  checkers.isInBoard = function isInBoard ([x, y]) {
    return (0 <= x && x < width) && (0 <= y && y < height)
  }

  checkers.getLegalMoves = function getLegalMoves ([x, y]) {
    // Negative of the regular id represents a promoted piece
    // That is, -1 on the board is still belonging to player 1,
    // but it has more available moves
    const isPromoted = checkers.board[x][y] < 0
    const currentPlayer = Math.abs(checkers.board[x][y])

    // "Forward directions" determined by currentPlayer
    const forward = currentPlayer === 1 ? 1 : -1
    const backward = -forward
    const directions = [[1, forward], [-1, forward]]
    if (isPromoted) {
      directions.push([1, backward], [-1, backward])
    }

    const legalMoves = []
    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i]
      const pos = [x + dx, y + dy]

      if (checkers.isInBoard(pos)) {
        const tile = checkers.board.get(pos)

        if (tile == 0) {
          legalMoves.push({ pos })
        } else if (tile != currentPlayer) {
          console.log('This might be it!')
          // Copy to preserve against mutation
          const captureCandidate = pos.slice()

          pos[0] = pos[0] + dx
          pos[1] = pos[1] + dy

          // Basically, we just need for the next space in the
          // same direction to be empty in order to capture
          if (checkers.isInBoard(pos)) {
            if (checkers.board.get(pos) == 0) {
              legalMoves.push({
                pos,
                capture: captureCandidate
              })
            }
          }
        }
      }
    }

    return legalMoves
  }

  // We kind of want there to be a board when we start . . .
  checkers.resetBoard()
  return checkers
}

export default Checkers
