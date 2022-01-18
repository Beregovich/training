var maxSequence = function (arr) {
    if (arr.length < 1) return 0;
    let max = arr[0];
    let end = arr[arr.length - 1];
    for (let i = 0; i <= end; i++) {
        let k = maxSeq(arr.slice(i, end + 1));
        if (k > max) {
            max = k;
        }
    }
    return max;
}

const maxSeq = function (subArr) {
    let max = subArr[0];
    let kontainer;
    for (let i = 0; i < subArr.length; i++) {
        kontainer += subArr[i];
        if (max < kontainer) {
            max = kontainer;
        }
    }
    return max;
}