function removeChar(str: string): string {
  if(str.length>2){
    console.log(str.slice(1,-1))
    return str.slice(1,-1);
  }else throw new Error('length<3')
}
