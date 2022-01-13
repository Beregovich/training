function arrayDiff(a, b) {
    var validator = [];
    var resultArr = [];
    for (let i = 0; i < a.length; i++) {
        validator[i] = true;
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                validator[i] = true;
            }
        }
    }
    for (let k = 0; k < a.length; k++) {
        if (validator[k]) {
            resultArr.push(a[k]);
        }
    }

    console.log(resultArr);
}


function squareDigits(num) {
    let s = String(num);
    let res;
    for (let i = 0; i < s.length; i++) {
        res = res + String(Number(s[i]) ** 2);
    }


    return Number(res);
}