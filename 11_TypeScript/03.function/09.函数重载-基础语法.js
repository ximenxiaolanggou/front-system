function makeDate(tsOrD, m, y) {
    if (m != undefined && y != undefined) {
        return new Date(tsOrD, m, y);
    }
    else {
        return new Date(tsOrD);
    }
}
console.log(makeDate(12, 12, 2022));
