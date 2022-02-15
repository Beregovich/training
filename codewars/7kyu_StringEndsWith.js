/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
*/
function solution(str, ending) {
    let flag = true;
    for (let i = 0; i < ending.length; i++) {
        if (ending[ending.length - 1 - i] != str[str.length - 1 - i]) {
            flag = false;
        }
    }
    return flag;
}