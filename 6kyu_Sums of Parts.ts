//Sums of Parts

export function partsSums(ls: number[]): number[] {
    let totalSum: number=0;
    let result:number[]=[];
    let subSum:number=0;
    console.log(ls)
    if(ls.length>0){
      for(let i=0;i<ls.length;i++){
        totalSum+=ls[i]
      }
    }else {
      result.push(0)
      return result
    }
    result.push(totalSum)
    console.log(result)
      for(let i=0;i<ls.length;i++){
        subSum+=ls[i];
        result.push(totalSum-subSum)
      }
    console.log(result)
  return result
    
  }