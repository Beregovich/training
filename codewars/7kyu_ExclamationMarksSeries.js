/*
Move all exclamation marks to the end of the sentence
*/
function remove(s) {
    var k = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "!") {
            k++;
        }
    }
    return s.replace(/!/g, '') + "!".repeat(k);

}