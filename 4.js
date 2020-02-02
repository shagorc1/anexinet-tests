/*
Write a function that receives a matrix and returns its transposed one. 
*/
function transpose(matrix) {
  // Validate if matrix length is zero
  if (matrix.length === 0) {
    return [];
  }
  const h = matrix[0].length;
  const w = matrix.length;
  let result = [];
  // Iterate matrix height 
  for (i = 0; i < h; i++) {
    result[i] = [];
    // Iterate matrix width 
    for (j = 0; j < w; j++) {
        // Add to result array the value in current position
        result[i][j] = matrix[j][i];
    }
  }
  return result;
}

transpose([[1, 2, 3], [4, 5, 6]]);
// Result: [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]