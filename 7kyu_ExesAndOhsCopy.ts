//Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. The string can contain any char.
function xo(str: string): boolean {
    let xs: number= (str.match(/[oO]/g) || []).length;
    let os: number= (str.match(/[xX]/g) || []).length;
    return (xs===os)
}

xo('XXxxOoO');
//In my own case  match method with regular expression was didn't compiling. match was returned null
