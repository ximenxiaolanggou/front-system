type Cat = {swim: () => void}

type Dog = {fly: () => void}

function isCat(arg: Cat | Dog): arg is Cat{
    return (arg as Cat).swim != undefined
}