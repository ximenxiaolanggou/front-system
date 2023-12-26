class StaticClass {
    static #name = ''

    static sayHello(){
        this.#name = 'world'
    }

    sayHello2(){
        this.#name = 'world'
    }

    static {
        this.#name = 'hello'
    }
}

StaticClass.#name