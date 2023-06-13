//index.ts
import * as Base from "./base";
import * as CauHinh from "./config";
var sp = new Base.Sanpham();
sp = { id: 1, tensp: "MSI I7 9300 T2", giasp: 1565, hinh: "" };
var user = { id: 1, hoten: "aa", email: "bb" };
var url = CauHinh.urlAPI;
var x = prompt("Nhập số");
console.log(user, url);
