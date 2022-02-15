/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/
const binaryArrayToNumber = arr => {
    let resInt = 0;
    for (i = 0; i < arr.length; i++) {
        resInt += arr[arr.length - 1 - i] * 2 ** i;
    }
    return resInt;
};