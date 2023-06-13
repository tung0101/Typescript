class HinhChuNhat {
  mota = "các hàm liên quan hình chữ nhật, hình vuông";
  static dientich = (dai, rong) => dai * rong;
  static chuvi = (dai, rong) => (dai + rong) * 2;
}
class HinhVuong extends HinhChuNhat {
  canh = 0;
  constructor(c) {
    super();
    this.canh = c;
  }
  static dientich = (canh) => canh * canh;
}
function cvdt() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  let c = parseInt(document.getElementById("c").value);
  let hv = new HinhVuong();
  let dtv = HinhVuong.dientich(c);
  document.getElementById("v").innerText = dtv;
  let hcn = new HinhChuNhat();
  let cv1 = HinhChuNhat.chuvi(a, b);
  document.getElementById("cv").innerText = cv1;
  console.log(cv1);
  let dt1 = HinhChuNhat.dientich(a, b);
  document.getElementById("dt").innerText = dt1;
  console.log(dt1);
}
// let hv = new HinhVuong();
// let dtv = HinhVuong.dientich(3);
// console.log(dtv);
// let hcn = new HinhChuNhat();
// console.log(hv, hcn);
// let dt1 = HinhChuNhat.dientich(3, 3);
// console.log(dt1);
// let ct1 = HinhChuNhat.chuvi(3, 3);
// console.log(ct1);
