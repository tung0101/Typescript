import * as Base from "./base";
import * as CauHinh from "./config";
let sp = new Base.Sanpham();
sp = { id: 1, tensp: "MSI I7 9300 T2", giasp: 1565, hinh: "" };
let user = { id: 1, hoten: "aa", email: "bb" };
let url = CauHinh.urlAPI;
let x = prompt("Nhập số");
console.log(user, url);
