function makeDate(timestamp:number):Date
function makeDate(d:number, m:number, y:number):Date
function makeDate(tsOrD:number,m?:number, y?:number):Date{
    if(m != undefined && y!= undefined) {
        return new Date(tsOrD, m, y);
    }else {
        return new Date(tsOrD)
    }
}

console.log(makeDate(12,12,2022))