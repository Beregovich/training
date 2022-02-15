//6kyu_Consecutive strings
export function longestConsec(strarr: string[], k: number): string {
    if(strarr.length<1 || k>strarr.length || k<=0) return ""
    let start: number=0;
    let end: number=start+k-1;
    let totalLength: number=0;
    let currentLength: number =0;
    let maxLenStart: number=0;
    let resultString: string = '';
    
    while (end<strarr.length){
      
      for (let i=start; i<=end;i++){
        currentLength+=strarr[i].length
      }
      if(currentLength>totalLength){
        totalLength=currentLength;
        maxLenStart=start;
        start++;
        end++;
      }else{
        start++;
        end++;
      }
      currentLength=0;
    }
  for(let i=maxLenStart;i<maxLenStart+k;i++){
    resultString+=strarr[i]
  }
  return resultString;
}