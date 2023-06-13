var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function XeOTo(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            this.tenxe = "Lamborghini Aventador S";
            this.giaxe = 314000;
            this.mauxe = "Red";
        }
    };
}
function Xe(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            this.soluotmua = 2000;
            this.ngaysx = "04/10/2002";
        }
    };
}
let Oto = class Oto {
    constructor() { }
};
Oto = __decorate([
    XeOTo,
    Xe
], Oto);
const x1 = new Oto();
console.log(x1);
// document.querySelector('#x1').innerHTML=x1;
