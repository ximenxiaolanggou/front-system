type o1 = {
    x:1,
    y:2
}

type Oobj = keyof o1

const ov1:Oobj = 'x' 
const ov2:Oobj = 'y' 

type MapFish = {
    [k:number]:number
}

type M = keyof MapFish

const m1:M = 1

