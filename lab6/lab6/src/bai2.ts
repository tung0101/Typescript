class User {
    public username:string;
    @TheoDoiPass(7,20) 
    public password: string;
    constructor(u:string, p:string){
        this.username = u;
        this.password = p;
    }
  }
  let u1 = new User('teo','huadi'); 
  u1.password = 'anhhua'; //Báo lỗi vì quá ngắn <=7 ký tự 
  u1.password = 'anhxinhua'; //Không báo lỗi vì gán hợp lệ
  let un = u1.username; 
  let pw = u1.password; //Thông báo lấy pass
  function TheoDoiPass(sokytumin: number, sokytumax: number) {
    return function(  constructor: Object, tenthuoctinh: string) { 
      let value : string;
      const laygiatri  = function() { 
        return value;  
      };
      const gangiatri  = function( newVal: string) {
        value = newVal;
        if(newVal.length <= sokytumin)
        console.log(`${tenthuoctinh} ${newVal} phải nằm trong khoảng ${sokytumin} đến ${sokytumax}`);
        }; 
      
      // Khai báo 2 method setter getter để kiểm soát 
      Object.defineProperty(constructor, tenthuoctinh, {
         get: laygiatri,
         set: gangiatri
      }); 
    }
    }