//Magnet particules in boxes
//https://www.codewars.com/kata/56c04261c3fcf33f2d000534/train/typescript
export class G964 {
    public static doubles(maxk:number, maxn:number):number {
            let result: number=0;
///////////////////////////////////////////
    let subFunc=(k:number, n:number):number=>{
        let subResult:number=0;
        for(let i=1;i<=n;i++){
            subResult+=1/(k*Math.pow((1+i),2*k))
        }
        return subResult
    }
//////////////////////////////////////////
    for (let i=1; i<=maxk;i++){
        result+=subFunc(i,maxn)
    } 
    return result
    }
}