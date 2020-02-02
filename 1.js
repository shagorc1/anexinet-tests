/*
Write a function that receives two numeric parameters (positive integers), adds them and prints the result
in the console. You should not use + or any arithmetic operators.
*/

function sum(param1, param2) {
  // Sum of two bits XOR(^)
  return param1 ^ param2;
}

sum(15, 32);
// Result: 47