/*Your task is to write a function maskify,
which changes all but the last four characters into '#'.
*/
// return masked string
function maskify(cc) {
    var mask = "";
    if (cc.length >= 5) {
        for (let i = 0; i < cc.length - 4; i++) {
            mask += "#";
        }
        mask += cc[cc.length - 4] + cc[cc.length - 3] + cc[cc.length - 2] + cc[cc.length - 1];
        return mask;
    } else {
        mask = cc;
        return mask;
    }
}