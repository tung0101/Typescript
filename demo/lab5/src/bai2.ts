interface IThongSoLaptop{
  idLT:number;
  RAM:string;
  CPU:string;
  OCung:string;
  CanNang?:number;
}

enum MÀULAPTOP{ĐEN,TRẮNG , XÁM}
interface ILapTop{
  idLT:number;
  tenLT:string;
  gia:number;
  mau:MÀULAPTOP
}
type MyLapTop = IThongSoLaptop & ILapTop;
let listlaptop:MyLapTop[] = 
[
  { idLT:1, tenLT:'A', gia:1, mau: MÀULAPTOP.ĐEN, RAM:'8GB', CPU:'i1', OCung:'1GB', CanNang:1  },
  { idLT:2, tenLT:'B', gia:1, mau: MÀULAPTOP.TRẮNG, RAM:'2GB', CPU:'i2', OCung:'2GB', CanNang:3 },
  { idLT:3, tenLT:'C', gia:1, mau: MÀULAPTOP.XÁM, RAM:'4GB', CPU:'i4', OCung:'3GB', CanNang:2  },
]
console.log(listlaptop);