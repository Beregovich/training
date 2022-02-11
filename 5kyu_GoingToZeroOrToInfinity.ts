//5 kyu Going to zero or to infinity?
  let going=(n: number): number =>{
  let f: number[] = [];
  let subArray: number[] = [];//[1!/n!, 2!/n!,...,(n-1)!/n!, n!/n!]
  let sum: number=0;
  for(let i=1;i<=n;i++){
    f.push[i]
  } //f=[1,2,3,4,5...n-1,n]

  for(let i=0;i<n;i++){
      subArray.push(1);
    for(let j=0;j<n;j++){
      if(i<j){
          subArray[i]/=j+1;
      }
    }
    sum+=subArray[i]
  }
  
  console.log(sum)
  return Math.floor((sum)*1000000)/1000000
}