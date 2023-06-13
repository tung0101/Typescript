import { LayHS, hocSinhs } from "./index3.js";
console.log(hocSinhs);
let htmlcart = ``;
hocSinhs.forEach((c) => {
  htmlcart += `  
    <tr>
    <td>${c.id}</td>
    <td>${c.ten}</td>
    <td>${c.toan}</td>
    <td>${c.van}</td>
    </tr>
     `;
});
// htmlcart+=' ';
document.getElementById("table-body").innerHTML = htmlcart;
