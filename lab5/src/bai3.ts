// Sử dụng các biến generic trong typescript

// vidu1
type ThongTinSP = number|string|boolean;
function xuly<T extends ThongTinSP>( p: T):T[] { 
  const listsp = [ 
    {ten:'Cà chua',gia:30000, cònhàng:true}, 
    {ten:'Chuổi',gia:14000, cònhàng:false}, 
    {ten:'Cam thảo',gia:82000, cònhàng:true},
    {ten:'Chà Là',gia:194000, cònhàng:true}
  ]
  let arr: T[] =[];
  switch( typeof p){
    case 'number':                            
      arr =  listsp.map( e => e.gia) as T[];                        
      break;
    case 'string': 
      arr =  listsp.map( e => e.ten) as T[]; 
      break;
    case 'boolean': 
      arr =  listsp.map( e => e.cònhàng) as T[]; 
      break;
    default : arr=[];
  }
  return arr;
}
let arr1:number[] = xuly<number>(1); console.log(arr1);  
let arr2:string[] = xuly<string>(''); console.log(arr2); 
let arr3:boolean[] = xuly<boolean>(true); console.log(arr3); 
let arr4:boolean[] = xuly<undefined>(undefined); console.log(arr4);
// vidu2
type ketqua = number | string | boolean;
type sinhvienthi = [string,ketqua ];
let arr: sinhvienthi[] = [];
function themsv<T extends ketqua>( msv: string, kq: T  ):T  {
    arr.push([msv, kq]);
    return kq;
}
themsv<string>('pd12345', "Đậu"); 
themsv<boolean>('pd54321', true);
themsv<number>('ps12345', 8); 
console.log(arr);
// thức hành theo Generic function
// vidu1
//tạo ra một hàm generic xuly với tham số đầu vào là arg và kiểu trả về cũng là Type.
function xuly<Type>(arg: Type): Type { return arg;} 
//tạo ra một biến xl với kiểu dữ liệu là một hàm generic, trong đó T là kiểu dữ liệu của tham số đầu vào và cũng là kiểu trả về của hàm. Biến xl được gán bằng hàm xuly.
let xl: <T>(arg: T) => T = xuly; 
//đoạn mã in ra giá trị của hàm xl với các tham số kiểu khác nhau, 
console.log( xl<number>(5) ) ; //5
console.log( xl<string>("Thứ sáu") ) ; //Thứ sáu
console.log( xl<boolean>(true) ) ; //true
// vidu2
function thuchien<T1, T2>( param1:T1, param2: T2):void { 
    console.log(param1 + ' - '+ param2);
}
thuchien<string, number>("Gạo", 25000);
thuchien<number, string>(25000, "Gạo");
thuchien<string, string>("Gạo", "25000 đồng");
// Thực tập dùng generic interface như là function type
interface IThietBi<T, U>{ ( ten: T, gia: U): void; };
function hamA(ten:string, gia:number):void { 
  console.log(`Tên = ${ten} , giá = ${gia}`);
}
function hamB(ten: string, gia:string):void { 
  console.log(`Tên = ${ten} , giá = ${gia}`);
}
let tb1: IThietBi<string, number> = hamA;
tb1('Ổ cắm thông minh', 152000); 
let tb2: IThietBi<string, string> = hamB;
tb2('Quạt hút mùi', '3500000 đồng');
// Thực tập generic class
// class G_Test với một type parameter T. Lớp này có hai thuộc tính là zeroValue và cong.
class G_Test<T> { zeroValue: T; cong: (x: T, y: T) => T; }   //zeroValue là giá trị khởi tạo ban đầu của kiểu T  cong là một hàm nhận vào hai tham số có kiểu T và trả về một giá trị cũng có kiểu T.
let a = new G_Test<number>();
a.zeroValue = 0;
a.cong = (x, y) => x + y;
console.log(a.cong(8, 3));

let b = new G_Test<string>(); 
b.zeroValue = "";
b.cong =  (x, y) =>  x + y
console.log(b.cong("8", "3"));
console.log(b.cong("Tử", " tế"));

let c = new G_Test<boolean>(); 
c.zeroValue = false;
c.cong =  (x, y) =>  x || y;

