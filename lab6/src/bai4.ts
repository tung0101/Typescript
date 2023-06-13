function ChangeHS( st:number){
  return function (constructor: Function):any {
      return class {       
          private hoten:string;  tuoi:number;
          constructor(h:string){
              this.hoten = h; 
              this.tuoi = st;
          }
      } 
  }
}
@ChangeHS(20)
class HocSinh {  
  public name: string;
  constructor( h:string ) { this.name=h;}
}
let student= new HocSinh("Trâm kiki");  console.log(student);