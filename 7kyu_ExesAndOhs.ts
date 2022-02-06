//Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. The string can contain any char.
function xo(str: string): boolean {
    let xs: number=0;
    let os: number=0;
  for(let el of str){
    switch(el){
        case 'o':
        case 'O':
        os+=1;
        break;
        case 'x':
        case 'X':
        xs+=1;
        break
    }
  }
    return (xs===os)
}
//In my own case  match method with regular expression was didn't compiling. match was returned null
