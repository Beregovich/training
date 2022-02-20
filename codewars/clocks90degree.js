var findNineDegree = function (h, m) {
    var clocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var steps = [];
    var target1 = clocks.indexOf((h + 3) % 12);
    var target2 = clocks.indexOf(Math.abs(h - 3) % 12);
    var mIndex = clocks.indexOf(m);
    steps.push(Math.abs(mIndex - target1));
    steps.push(Math.abs(mIndex - target2));
    console.log(steps);
    console.log('target1=' + target1);
    console.log('target2=' + target2);
    var result = steps.filter(function (e) { return e > -1; }).sort(function (a, b) { return a - b; });
    console.log('after ' + result[0] * 5, ' minutes');
    return result[0];
};
findNineDegree(11, 12);
