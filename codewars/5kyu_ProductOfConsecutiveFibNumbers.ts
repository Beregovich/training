//Product of consecutive Fib numbers
export class G964 {

    public static productFib = (prod) => {
      let fNumbers: number[]=[0,1]
      let multiply: number=0;
      let i: number=1;
      while (multiply<=prod){
        multiply=fNumbers[i]*fNumbers[i-1];
        if (multiply===prod) return [fNumbers[i-1],fNumbers[i], true]
        fNumbers.push(fNumbers[i]+fNumbers[i-1]);
        i++
      }
      return [fNumbers[i-2],fNumbers[i-1], false]
    }
}