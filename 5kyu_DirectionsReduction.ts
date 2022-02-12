//Directions Reduction

export function dirReduc(arr: string[]): string[] {

    let result :number[]=[]; //Way in numbr form
    let resultStrings: string[]=[]; //Way in string form
    let len:number=arr.length;
    let xySteps:number[]=[]; //Steps from input in number form:N=1,S=-1,E=2,W=-2 
    if (len<1)return []
  
//Function which remove Zeros and opposite neighbors:
    let filtredSteps=(xySteps: number[]):number[]=>{
        let result:number[]=[]
        result[xySteps.length-1]=xySteps[xySteps.length-1]
        let i: number=0;
        while (i<xySteps.length-1){
            if(xySteps[i]===0){
                i++
                continue;
            }
            if(xySteps[i]+xySteps[i+1]===0){
                result[i]=0;
                result[i+1]=0;
                i+=2;
            }else {
                result[i]=xySteps[i]
                i++;
            }
        }
        return result.filter(function(elem) {
            return (elem !== 0);
        })
    }
        for(let i=0; i<len; i++){
            if(arr[i]=="NORTH"){
                xySteps.push(1);          
            }
            if(arr[i]=="SOUTH"){
                xySteps.push(-1);         
            }
            if(arr[i]=="EAST"){
                xySteps.push(2);
            }
            if(arr[i]=="WEST"){
                xySteps.push(-2);
            }
        }
        result=filtredSteps(xySteps)
        while(result.length!=filtredSteps(result).length){
            result=filtredSteps(result)
        }
  //Make string array with way from numberic array.
        for(let i=0;i<result.length;i++){
            switch(result[i]){
                case 1:
                    resultStrings.push("NORTH")
                    continue;
                case -1:
                    resultStrings.push("SOUTH")
                    continue;
                case 2:
                    resultStrings.push("EAST")
                    continue;
                case -2:
                    resultStrings.push("WEST")
                    continue;
            }
        }

        return resultStrings;
    }