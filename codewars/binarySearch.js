const myArr = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946];
const myNumber = 10946;

function guessNumber(arr, answ) {
    let start = 0;
    let stop = arr.length;
    let flag = false;
    console.log('arr.length=', +arr.length)
    while ((stop - start) >= 1) {
        let mid = Math.floor((start + stop) / 2);
        if (arr[mid] == answ) {
            console.log('It is', +arr[mid] + '; number=', +mid);
            flag = true;
            break;
        } else if (answ < arr[mid]) {
            stop = mid;
            console.log('focus=', +arr[mid])
            console.log('newStop=', +stop)
            console.log('mid el=', +arr[mid])
        } else {
            start = mid;
            console.log('newStart=', +start)
            console.log('mid el=', +arr[mid])
        }
    }
    if (!flag) {
        console.log('Answer is not in array')
    }
}
guessNumber(myArr, myNumber);