/*
. Write a method to sort an array of strings so that all the anagrams are next to each other.
*/
function sortAnagrams(word_list) {
  // Validate if matrix length is zero
  if (word_list.length === 0) {
    return [];
  }
  // Create array with anagrams sort
  let words = word_list.map(w => w.split('').sort().join('')).sort();
  return words.map(w => {
    // Iterate input word list
    for(let i = 0; i < word_list.length; i++) {
      // Validate if is equal anagram with word
      if (w === word_list[i].split('').sort().join('')) {
        let word = word_list[i];
        word_list.splice(i, 1);
        return word;
      }
    }
  });
}

sortAnagrams(['gato', 'gota', 'anchor', 'rancho', 'rata', 'arta']);
// Result: [ 'rata', 'arta', 'anchor', 'rancho', 'gato', 'gota' ]