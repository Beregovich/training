/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
*/
function isValidIP(str) {
    let ipArr = str.split(".");
    if (ipArr.length != 4) {
        return false
    }
    for (let value of ipArr) {
        if (value != "0") {
            if (true) {
                if (parseInt(value) < 0 || parseInt(value) > 255 || /^0/.test(value) || !(/^[0-9]{1,3}$/.test(value))) {
                    return false;
                }
            }
        }
    }
    return true;
}