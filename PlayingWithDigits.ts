//Some numbers have funny properties. For example:
//89 --> 8¹ + 9² = 89 * 1
//Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
//we want to find a positive integer k, if it exists, 
//such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
//
//In other words: Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// n and p will always be given as strictly positive integers.

let digPow = (n: number, p: number) => {
    let array : number[]=n.toString().split('').map((e)=>parseInt(e));
    let sum : number=0;
    for(let i=0; i<array.length; i++){
      sum+=Math.pow(array[i],i+p)
    }
    if(sum%n===0){
      return sum/n
    }else{
        return -1
      }
}