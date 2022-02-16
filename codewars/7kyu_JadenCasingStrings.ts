//7kyu Jaden Casing Strings

//Use cycle

String.prototype.toJadenCase = function () {
    let str : string = this;
    let arr : string[] = [];
    let i: number=1;
    arr.push(str[0].toUpperCase())
    while(i<str.length){
        if( str[i]==" "){
            arr.push(str[i]);
            arr.push(str[i+1].toUpperCase())
            i++;
        }else
            arr.push(str[i]);
        i++;
    }
    return arr.join('')
};

//Use replace and RegExp

String.prototype.toJadenCase = function () {
    this.replace(/(^|\s)[a-z]/g, (letter) => letter.toUpperCase())
}
