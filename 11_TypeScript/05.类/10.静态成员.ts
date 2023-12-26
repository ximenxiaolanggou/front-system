class Banner {
    static color:string = 'red'

    static sayHello() {}
}

let color:string = Banner.color

Banner.sayHello()

class BannerChild extends Banner {
    
}

BannerChild.color
BannerChild.sayHello()