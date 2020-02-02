/*
. Write afunction such thatif an elementin an MxN matrix is 0, its entirerow and column aresetto0 and
then printed out.
*/
function matrixZero(matrix) {
  // Validate if matrix length is zero
  if (matrix.length === 0) {
    return [];
  }
  // Initialize variables for iterations
  const x = matrix.length;  
  const y = matrix[0].length;
  // Function "row" for iteration in matrix rows
  const row = (mtx, row) => {
    for(let i = 0; i < mtx[0].length; i++) {
      if(mtx[row][i] === 0) {
        return true;
      }
    }
    return false;
  }
  // Function "col" for iteration in matrix columns
  const col = (mtx, col) => {
    for(let i = 0;i < mtx.length;  i++) {
      if(mtx[i][col] === 0) {
        return true;
      }
    }
    return false;
  }
  // First validation in row and colum zero
  const firstRow = row(matrix, 0);
  const firstCol = col(matrix, 0);

  for(let i = 1; i < x; i++) {
    if(row(matrix, i) === true) {
      matrix[i][0] = 0;
    }
  }

  for(let i = 1; i < y; i++) {
    if(col(matrix, i) === true) {
      matrix[0][i] = 0;
    }
  }
  // Iteration matrix in rows and colums
  for(let i = 1; i < x; i++) {
    for(let j = 1; j < y; j++) {
      // Validate if row or colum have value zero
      if(matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  // Validate if variable firstrow is true and iterate row
  if(firstRow === true) {
    for(let i = 0; i < y; i++) {
      matrix[0][i] = 0;
    }
  }
  // Validate if variable firstcol is true and iterate col
  if(firstCol === true) {
    for(let i = 0; i < y; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
}

matrixZero([[1, 2, 3], [4, 0 , 6], [7, 8, 9]]);
// Result: [ [ 1, 0, 3 ], [ 0, 0, 0 ], [ 7, 0, 9 ] ]