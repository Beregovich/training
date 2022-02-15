//Fans of The Wire will appreciate this one. For those that haven't seen the show,
// the Barksdale Organization has a simple method for encoding telephone numbers exchanged via pagers:
// "Jump to the other side of the 5 on the keypad, and swap 5's and 0's."
//Write a function called decode(). Given an encoded string of exactly 10 digits, 
//return the actual phone number in string form. Don't worry about input validation, parenthesis, or hyphens.
//

function decode(string) {
    let array = string.split('').map(e => {
        if (e === "5") return "0";
        if (e == "0") return "5";
        return (10 - parseInt(e)).toString();
    })
    console.log(array)
    return (array.join(''));
}