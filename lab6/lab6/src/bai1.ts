function XeOTo<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      tenxe: string;
      giaxe: number;
      mauxe: string;
      
      constructor(...args: any[]) {
        super(...args);
        this.tenxe = "Lamborghini Aventador S";
        this.giaxe = 314000;
        this.mauxe = "Red";
      }
    };
  }
   
  function Xe<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      soluotmua: number;
      ngaysx: string;
  
      constructor(...args: any[]) {
        super(...args);
        this.soluotmua = 2000;
        this.ngaysx = "04/10/2002";
      }
    };
  }
    @XeOTo
    @Xe
class Oto {
  constructor() {}
}
const x1= new Oto()
console.log(x1);

