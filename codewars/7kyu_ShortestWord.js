/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s) {
    let subArr = s.split(" ");
    let min = subArr[0].length;
    for (let i = 0; i < subArr.length; i++) {
        let k = subArr[i].length;
        if (k < min) {
            min = k;
        }
    }
    return min;
}