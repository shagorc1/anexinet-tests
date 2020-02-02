/*
Given a number between 0 and 1 (e.g. 0.15), print its binary representation. If the number cannot be
represented accurately in binary with at most 32 characters, just print "Error".
*/
function binary(number) { 
  // Validate range number
  if(number > 0 && number < 1) {
    let res = [];
    let numbers = [];
    // Iterate 32 times for number of characters
    for(let i = 0; i < 32; i++){
      let multi = (number * 2).toFixed('2');
      let arr = multi.split('.');
      res.push(arr[0]);
      // Validate if have zero or already exist multiplication in numbers array and return result
      if (arr[1] === '00' || numbers.indexOf(multi) > -1) {
        return '0.' + res.join('');
      }else {
        // number equal zero and decimal value
        number = parseFloat(`0.${arr[1]}`);
      }
      // Add multiplication in numbers array
      numbers.push(multi);
    }
    return 'Error';
  } else {
    return 'Error';
  }
}

binary(0.15);
//Result: 0.0010011