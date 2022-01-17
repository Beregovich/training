/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd
number of characters then it should replace the missing second character of the final pair with an underscore ('_').
 */

function solution(str) {
    let lgth = str.length;
    let res = [];
    if (lgth % 2 == 0) {
        let i = 0;
        while (i < lgth) {
            res.push(str[i] + str[i + 1]);
            i += 2;
        }
    } else {
        let i = 0;
        while (i < lgth - 1) {
            res.push(str[i] + str[i + 1]);
            i += 2;
        }
        res.push(str[lgth - 1] + "_");
    }
    return res;
}