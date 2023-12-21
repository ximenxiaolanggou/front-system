export default function (...args) {
    return  args.reduce((pre, next) => pre + next, 0)
}
