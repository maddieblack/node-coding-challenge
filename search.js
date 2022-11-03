/***
 * search (grid, wordlist)
 * This function accepts a grid (a 2d array of letters)
 * and a wordlist (an array of words to search for). The function finds any words
 * that exist in the word search in any of the 8 possible directions (up, down, left,
 * right and all 4 diagonal directions). This function is case-insensitive in its
 * matching.
 *
 * Returns: an array of words that can be found in the word search
 ***/
module.exports = function search (originalGrid, wordlist) {
  // evalRows -- reusable function once grid is rotated
  const evalRows = (grid) => {
    // convert grid into one big string (doing this outside of the filter function
    // prevents us from needing to used nested looping as much as possible)
    const gridString = grid.map(row => row.join('')).join('')

    return wordlist.filter((word) => {
      const reversedGridString = gridString.split('').reverse().join('');
      return gridString.includes(word.toUpperCase()) || reversedGridString.includes(word.toUpperCase());
    });
  }

  // Rotate rows to form the horizontal grid
  const horizontalGrid = originalGrid.reduce((acc, row, rowIndex) => {
    if(rowIndex === 0) {
      // Build inital new 2D array if its the first row
      return row.map((letter) => {
        return [letter]
      })
    }

    const newHG = [...acc]

    row.forEach((letter, columnIndex) => {
      // loop through the letters in column from the original grid to add them to
      // their new row in the new grid
      newHG[columnIndex].push(letter)
    })

    return newHG
  }, [])

  const getDiagonalGrid = (grid) => {
    const numberOfRows = grid.length + grid[0].length - 1

    // Create an empty 2D array with the appropriate number of rows
    const diagonalGrid = [];
    for (var i = 0; i < numberOfRows; i++) {
      diagonalGrid.push([])
    }

    //
    grid.forEach((row, rowIndex) => {
      row.forEach((letter, columnIndex) => {
        const previousRow = grid[rowIndex - 1] || null
        const topRight = previousRow?.[columnIndex + 1] || null

        // If there isn't anything in the top right position of the letter, then it
        // means its the first letter in each of the rows
        if(!topRight && rowIndex !== 0) {
          // If its not in the first row of the original grid, then it means its on
          // the right side of the grid
          diagonalGrid[row.length + rowIndex - 1].push(letter)
        } else if(!topRight && rowIndex === 0){
          diagonalGrid[columnIndex].push(letter)
        }

        if(topRight) {
          // If there is a top right position, then the index of the row is equal to
          // adding its x and y axis together
          diagonalGrid[rowIndex + columnIndex].push(letter)
        }
      })
    })

    return diagonalGrid
  }


  const verticalWords = evalRows(originalGrid)
  const horizontalWords = evalRows(horizontalGrid)
  const leftToRightDiagonalWords = evalRows(getDiagonalGrid(originalGrid))
  const rightToLeftDiagonalWords = evalRows(getDiagonalGrid(originalGrid.map(row => row.reverse())))


  return [...verticalWords, ...horizontalWords,...leftToRightDiagonalWords,...rightToLeftDiagonalWords]
}
