//Doors in the school

export const doors = (n: number): number => {
    let boolDoors: boolean[]=[]
    let count: number = 0;
    for (let i=1;i<=n;i++){
      boolDoors.push(false)
    }
    for (let i=1;i<=n;i++){
      let j: number=i;
      while (j<=n){
        boolDoors[j]=!boolDoors[j]
        j+=i;
      }
    }
    console.log(boolDoors);
    for(let i=1;i<=n;i++){
      if (boolDoors[i]) count++
    }
    return count
  }