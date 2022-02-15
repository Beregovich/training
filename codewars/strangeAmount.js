function add(num1, num2) {
    let num1Str = num1.toString();
    let num2Str = num2.toString();
    let res = '';
    if (num1Str.length >= num2Str.length) {
        let k = num1Str.length - num2Str.length;
        for (let i = 0; i < k; i++) {
            res = res + (num1Str[i]);
        }
        for (let i = 0; i < num2Str.length; i++) {
            res = res + (parseInt(num2Str[i], 10) + parseInt(num1Str[i + k], 10)).toString();
        }
    } else {
        let k = num2Str.length - num1Str.length;
        for (let i = 0; i < k; i++) {
            res = res + (num2Str[i]);
        }
        for (let i = 0; i < num1Str.length; i++) {
            res = res + (parseInt(num2Str[i + k], 10) + parseInt(num1Str[i], 10)).toString();
        }

    }
    return parseInt(res, 10);
}