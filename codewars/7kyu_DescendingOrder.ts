function descendingOrder(n: number): number {
    return Number(String(n).split('').sort((a:string, b:string)=>Number(b)-Number(a)).join(''));
     
  }
