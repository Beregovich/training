"use strict";
exports.__esModule = true;
exports.dblLinear = void 0;
function dblLinear(n) {
    var elements = [0];
    var i = 0;
    while (i <= n) {
        if (elements[i] === n) {
            var x_1 = 2 * elements[i] + 1;
            if (!elements.includes(x_1))
                elements.push(x_1);
            var y_1 = 3 * elements[i] + 1;
            if (!elements.includes(y_1))
                elements.push(y_1);
            break;
        }
        var x = 2 * elements[i] + 1;
        if (!elements.includes(x))
            elements.push(x);
        var y = 3 * elements[i] + 1;
        if (!elements.includes(y))
            elements.push(y);
        i++;
    }
    elements.sort(function (a, b) { return a < b ? -1 : 1; });
    console.log(elements);
    return elements[elements.length - 2];
}
exports.dblLinear = dblLinear;
dblLinear(40);
