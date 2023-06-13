interface IHinhChuNhat {
  mota: string;
}
class HinhChuNhat implements IHinhChuNhat {
  public mota: string = "các hàm liên quan hình chữ nhật, hình vuông";
  static dientich = (dai: number, rong: number): number => dai * rong;
  static chuvi = (dai: number, rong: number): number => (dai + rong) * 2;
}
class HinhVuong extends HinhChuNhat {
  private canh: Number = 0;
  constructor(c: number) {
    super();
    this.canh = c;
  }
}
function cvdt() {
  let a = parseInt((<HTMLInputElement>document.getElementById("a")).value);
  let b = parseInt((<HTMLInputElement>document.getElementById("b")).value);
  let hcn = new HinhChuNhat();
  let cv1 = HinhChuNhat.chuvi(a, b);
  document.getElementById("cv")!.innerText = cv1.toString();
  console.log(cv1);
  let dt1 = HinhChuNhat.dientich(a, b);
  document.getElementById("dt")!.innerText = dt1.toString();
  console.log(dt1);
//   let c = 3;
//   let hv = new HinhVuong(c);
//   console.log(hv, hcn);
//   document.getElementById("v")!.innerText = hv.canh.toString();
}

let hv = new HinhVuong(3);
let hcn = new HinhChuNhat();
console.log(hv, hcn);
let dt1 = HinhChuNhat.dientich(3, 3);
console.log(dt1);
let ct1 = HinhChuNhat.chuvi(3, 3);
console.log(ct1);
