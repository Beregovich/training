//4kyu Sum of Intervals

export function sumOfIntervals(InputIntervals: [number, number][]) {
    console.log('Input:'+InputIntervals)
    let intervals: [number, number][];
    let isChanged:boolean=false;
    let len:number=0;
  
    intervals=InputIntervals;

  
//Function, which move scopes of cross intervals to make max length.
    const optimize = (intervals: [number, number][])=>{
      let isChanged:boolean=true;
      for (let i=0;i<intervals.length;i++){
        for(let j=0;j<intervals.length;j++){
          if (i!=j){
           if(intervals[j][0]>intervals[i][0] && intervals[j][0]<intervals[i][1]){
              intervals[j][0]=intervals[i][0];
              intervals[i][1]>intervals[j][1]?intervals[j][1]=intervals[i][1]:intervals[i][1]=intervals[j][1]
             isChanged=true;
            }else if(intervals[j][1]>intervals[i][0] && intervals[j][1]<=intervals[i][1]){
              intervals[j][1]=intervals[i][1];
              intervals[i][0]<intervals[j][0]?intervals[j][0]=intervals[i][0]:intervals[i][0]=intervals[j][0]
             isChanged=true;
            }else(isChanged=false)
         }else(isChanged=false)
        }
      }
      return isChanged;
    }
    
//Use optemize while it modify array intervals.   
    do{
        isChanged=optimize(intervals)
    }while(isChanged)
      
//replace dublicates intervals with zeros and make sum.
        for (let i=0;i<intervals.length;i++){
            for(let j=0;j<intervals.length;j++){
                if(i!=j){
                    if(intervals[i][0]===intervals[j][0] && intervals[i][1]===intervals[j][1]){
                      intervals[j][0]=0
                      intervals[j][1]=0
                    }
                }
            }
            len+=intervals[i][1]-intervals[i][0]
        }
  
    return len;
  }
  sumOfIntervals([[1, 4], [7, 10], [3, 5], [3, 5], [3, 5]])