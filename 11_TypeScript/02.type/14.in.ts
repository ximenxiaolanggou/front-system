type Fish = {swim: () => void}

type Bird = {fly: () => void}

function showFunA(animinal: Fish | Bird) {
    if('swim' in animinal) {

    }else if('fly' in animinal) {

    }
}

type obj = {
    username: string,
    age: number
}

if('username' in obj) {

}









