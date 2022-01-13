function squareDigits(num) {
    let s = String(num);
    let res;
    for (let i = 0; i < s.length; i++) {
        res = res + String(Number(s[i]) ** 2);
    }


    return Number(res);
}