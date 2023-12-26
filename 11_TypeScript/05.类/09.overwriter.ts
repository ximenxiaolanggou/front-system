class Usb {
    trans(){
        console.log('Usb')
    }
}

class Usb1 extends Usb {
    trans(name?:string): void {
       if(!name) {
        super.trans()
       }else {
        console.log('Usb1')
       }
    }
}

let u:Usb1 = new Usb1();
u.trans()
u.trans('hello')

// 类型可以为父类
let u2:Usb = u;
