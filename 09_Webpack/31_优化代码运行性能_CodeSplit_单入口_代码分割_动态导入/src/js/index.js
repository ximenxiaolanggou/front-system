export function count(x, y) {
    return x - y;
}

export function sum(...args) {
    return  args.reduce((pre, next) => pre + next, 0)
}
