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

    return (resultArr);
}
