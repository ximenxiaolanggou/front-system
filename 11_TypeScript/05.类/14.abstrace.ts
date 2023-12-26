abstract class Aclass {
    abstract showFun():string
}

class Bclass extends Aclass {
    showFun(): string {
        return '123'
    }
}