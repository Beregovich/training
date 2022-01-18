var maxSequence = function (arr) {
    let lgth = arr.length;
    if (lgth < 1) return 0;
    let max = arr[0];
    for (let i = 0; i < lgth; i++) {
        let k = maxSeq(arr.slice(i, lgth));
        if (k > max) {
            max = k;
        }
    }
    return max < 1 ? 0 : max;
}
const maxSeq = function (subArr) {
    let max = subArr[0];
    let kontainer = subArr[0];
    for (let i = 1; i < subArr.length; i++) {
        kontainer += subArr[i];
        if (max < kontainer) {
            max = kontainer
        };

    }
    return max < 1 ? 0 : max;;
}