const matrix = 
[[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

const printMatrix = matrix => {
    const result = [];
  
    // Initialize the upper and lower bounds indexes
    const rowCount = matrix.length;
    const columnCount = matrix[0].length;
    let startRow = 0;
    let endRow = rowCount - 1;
    let startColumn = 0;
    let endColumn = columnCount - 1;
  
    // We will keep walking as long as rows or columns remain.
    // That happens as long as the end is greater or equal to the start.
    while (endRow >= startRow && endColumn >= startColumn) { // O(n)
      // Walk across the top starting row for each column from beginning to end
      // This is left-right across the top
      for (let column = startColumn; column <= endColumn; column++) { //O(n)
        // Add the item to result in order
        result.push(matrix[startRow][column]);
      }
  
      // Increment our start row since we visited each value
      startRow++;
  
      // Walk top-bottom for the end column
      for (let row = startRow; row <= endRow; row++) {  //O(n)
        result.push(matrix[row][endColumn]);
      }
      endColumn--;
  
      // Since we increment startRow, we need to make sure we are still in bounds
      if (endRow >= startRow) {
        //  Walk right-left on the bottom row
        for (let column = endColumn; column >= startColumn; column--) {  //O(n)
          result.push(matrix[endRow][column]);
        }
      }
      endRow--;
  
      // Since we increment startRow, we need to make sure we are still in bounds
      if (endColumn >= startColumn) {
        // walk bottom-top for the start column
        for (let row = endRow; row >= startRow; row--) {  //O(n)
          result.push(matrix[row][startColumn]);
        }
      }
      startColumn++;
    }
  
    return result;
  };

  console.log(printMatrix(matrix))

  //Time complexity O(N^2)
  //Space complexity O(1)