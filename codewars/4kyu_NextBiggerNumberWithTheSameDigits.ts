//4kyu Next bigger number with the same digits

export function nextBigger(n: number): number {
    let inputArray: number[]=[];
    let subArray: number[]=[];
    let p:number=0;
    let k:number=0;
    let min:number=0; //
//Make array from n.
    inputArray=n.toString()
        .split('')
        .map(e=>parseInt(e))
//Devide our array into two parts by index p. Left part will not change:
    for(let i=inputArray.length-1; i>0; i--){
        if(inputArray[i-1]<inputArray[i]){
            p=i-1;
            min=i; //As

            for(let i=p+1;i<inputArray.length;i++){
                if(inputArray[min]>inputArray[i] && inputArray[i]>inputArray[p]){
                    min=i;
                }
            }
//replace [p] element by minimal element from right part which [min]>[p]:
            k=inputArray[p];
            inputArray[p]=inputArray[min];
            inputArray[min]=k;
//Allocate right part in a subArray (not include [p])
            subArray=inputArray.splice(p+1)
//sort  subArray to make minimal number
            subArray.sort((a,b)=>a-b)
            return parseInt((inputArray.concat(subArray).join('')));
        }
    }
return -1;
}

nextBigger(459853);