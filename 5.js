/*
 Write a function to print all permutations of a string. Max string length can be 50 characters.
*/
function permutString(string) {
  let result = [];
  // Validate if string length is one
  if (string.length === 1) {
    return string;
  }
  // Iteration input string
  for(let i = 0; i < string.length; i++) {
    const word = string[i];
    // Validate input string if already exist word
    if(string.indexOf(word) != i) {
      continue;
    }
    // Generate words
    let words = string.slice(0, i) + string.slice(i + 1, string.length);
    // Iteration permutation value with recursive "permutString" function
    for (let permutation of permutString(words)) {
      result.push(word + permutation);
    }
  }
  return result;
}
permutString('xy');
//Result: [ 'xy', 'yx' ]