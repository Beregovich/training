//5kyu Esolang Interpreters #2 - Custom Smallfuck Interpreter
export function interpreter(code: string, tape: string): string {
    let target :number=0;
    let command: string[];
    let data: string[]=[];
    let openLoopPosition: number =0;
  
    command=code.split('');
    data = tape.split('')
    let l:number = tape.split('').length;
    console.log('____________________________________________________________')
    console.log('commands:'+command.length)
    console.log('commands'+command)
    console.log('data lengt:'+data.length)
    console.log('data'+data);
  
    let i:number=0;
    let c:number=0;
    while(target<l){ 
      if(target<0 || target>=l)return (data.join(''))
      if (c>=command.length)return (data.join(''))
      switch(command[c]){
          case '>':
            target++;
            c++;      
            continue;
          case '<':
            target--;
            c++;
            continue;
          case '*':
            data[target]=data[target]==='1'?'0':'1'
            c++;   
            continue;
        case '[':
            openLoopPosition=c+1;
            c++;
            if(data[target]==='0')return (data.join(''))
            continue;
        case ']':
            c=openLoopPosition;
            continue;
        default:
          c++;
          continue;
      }
    }
    return(data.join(''))
  }