/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1,str2){
  str1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join();
  str2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join();
  if (str1==str2){
    return true
  }
  else{
    return false
  }
}

str1 = 'listen';
str2 = 'silent';
var answer = isAnagram(str1,str2);
console.log(answer)

module.exports = isAnagram;
