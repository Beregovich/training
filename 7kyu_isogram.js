/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
*/
function isIsogram(strI) {
  let str = strI.toLowerCase();
  if (str == "") {
    return true;
  }
  let flag = true;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        flag = false;
      }
    }
  }
  return flag;
}