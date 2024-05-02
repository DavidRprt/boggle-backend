function getWordsFromBoard(board, words) {
  const dictionary = new Set(words.map((word) => word.toLowerCase())) 
  const result = new Set()
  const boardSize = 4
  const dx = [-1, 0, 1, -1, 1, -1, 0, 1]
  const dy = [-1, -1, -1, 0, 0, 1, 1, 1]

  
  const lowerCaseBoard = board.map((row) =>
    row.map((char) => char.toLowerCase())
  )

  function dfs(x, y, path, visited) {
    if (path.length > 2 && dictionary.has(path)) {
      result.add(path)
    }
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i],
        ny = y + dy[i]
      if (
        nx >= 0 &&
        nx < boardSize &&
        ny >= 0 &&
        ny < boardSize &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true
        dfs(nx, ny, path + lowerCaseBoard[nx][ny], visited)
        visited[nx][ny] = false
      }
    }
  }


  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const visited = Array.from({ length: boardSize }, () =>
        Array(boardSize).fill(false)
      )
      visited[i][j] = true
      dfs(i, j, lowerCaseBoard[i][j], visited)
    }
  }

  return Array.from(result)
}

module.exports = getWordsFromBoard
