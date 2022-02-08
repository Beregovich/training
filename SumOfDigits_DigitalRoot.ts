//This example doesn't work on codewars. For codwars simple solution is "return(((n - 1) % 9) + 1);"

//Digital root is the recursive sum of all the digits in a number.
//Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced. 
//The input will be a non-negative integer.

let digitalRoot = (n:number):number => {
    let sum:number=0;
    n.toString().split('').map((e)=>sum+=Number(e));
    if (sum>9){
        digitalRoot(sum)
    } else {
        return(sum)    
    }
}