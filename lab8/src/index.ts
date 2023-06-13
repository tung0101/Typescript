//index.ts
import * as Base from "./base";
import * as CauHinh from "./config";

let sp = new Base.Sanpham();
sp = { id: 1, tensp: "MSI I7 9300 T2", giasp: 1565, hinh: "" };
let user: Base.IUser = { id: 1, hoten: "aa", email: "bb" };
let url: string = CauHinh.urlAPI;
let x = prompt("Nhập số");
console.log(user, url);

import * as _ from "lodash";
let str = _.padStart("Hello TypeScript!", 20, " ");
console.log(str);
str = _.join(["a", "b", "c", "d"], "-");
console.log(str);
