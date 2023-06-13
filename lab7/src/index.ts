
import { User,  dangnhap, thoat } from "./user.js";
let u1 = new User;
u1.hoten = 'Tèo';
u1.username = 'teonv'; 
dangnhap();

import * as Kieu from './kieudulieu.js'
let arr_hinh: Kieu.IHinhDep[]; 
let url = Kieu.urlAPIServer;

let nc:Kieu.INguoiChoi = { 
    hoten:'Tèo', diem:0,
 thoidiem:'2023:3:1'
}
console.log(nc);

fetch("http://localhost:4000/hinh") 
.then( res => res.json())
.then (data => {
    arr_hinh = data as Kieu.IHinhDep[];
    console.log(arr_hinh);
    let divHinhDep = document.getElementById('divhinhdep');
    let hien1hinh = (h:hinhdep):void =>{
        divHinhDep.innerHTML +=`
        <div class="hinh">
            <img src='./dist/images/${h.url}'>
        </div>
        `
    }
    arr_hinh.forEach(hien1hinh);
})
.catch(e =>console.log(e))