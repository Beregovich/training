export function dblLinear(n: number): number {
    let elements :number[]=[1];
    let x: number=0;
    let y: number=0;
    let xCount: number=0;
    let yCount: number=0;

    for (let i = 0; i < n; i++){
      let x=2*elements[xCount]+1;
      let y=3*elements[yCount]+1;
      if(x<=y){
        elements.push(x)
        xCount++
        if(x===y)yCount++
      }else{
        elements.push(y)
        yCount++
      }
        
    }
    return elements[n]
      
  }
  dblLinear(30)