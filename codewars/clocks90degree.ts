//Известно положение стрелок на настенных часах.
//Положение стрелок соответствует целому числу на циферблате.
//Необходимо определить через сколько минут угол между стрелками.
//на часах станет 90 градусов.


const findNineDegree=(h:number, m: number): number =>{
    let clocks: number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
    let steps: number[]=[];

    let target1: number = clocks.indexOf((h+3)%12);
    let target2: number = clocks.indexOf(Math.abs(h-3)%12);
    let mIndex: number =  clocks.indexOf(m);

    steps.push(Math.abs(mIndex-target1));
    steps.push(Math.abs(mIndex-target2));

    console.log(steps)
    console.log('target1='+target1)
    console.log('target2='+target2)
    let result=steps.filter(e=>e>-1).sort((a,b)=>a-b);
    console.log('after '+result[0]*5,' minutes')
    return result[0];
}
findNineDegree(11,12);
