let hoten = localStorage.getItem("hoten");
if (hoten == null) document.location = "login.html";
console.log("hoten");
document.getElementById("hoten").innerHTML = hoten;
let arr_hinh;
var urlhinh1 = null;
var urlhinh2 = null;
var diem = 0;
const divHinhDep = document.getElementById("divhinhdep");
const divNguoiChoi = document.getElementById("divnguoichoi");
var diemthang = 6;
var diemthua = -3;
fetch("http://localhost:4000/hinh")
  .then((res) => res.json())
  .then((data) => {
    arr_hinh = data;
    arr_hinh = arr_hinh.concat(arr_hinh);
    arr_hinh = arr_hinh.sort((a, b) => 0.5 - Math.random());
    console.log(data);
    return arr_hinh;
  })
  .then((arr_hinh) => {
    arr_hinh.forEach((h) => {
      divHinhDep.innerHTML += `
        <div class="hinh">
           <img src='./public/images/${h.url}' title='${h.mota}'>
        </div>
        `;
    });
    return arr_hinh;
  })
  .then((arr_hinh) => {
    const arrdivHinh = document.querySelectorAll("div.hinh");
    arrdivHinh.forEach((div) => (div.children.item(0).className = "an"));
    arrdivHinh.forEach((div) => {
      div.onclick = function () {
        nhapVaoDiv(div);
      };
    });
  });
  // let urlhinh1 = null;
  // let urlhinh2 = null;
  let count = 0;
  
  let nhapVaoDiv = (div) => {
    let img = div.children.item(0);
    img.className = img.className == "an" ? "hien" : "an";
    if (urlhinh1 == null) {
      urlhinh1 = img.getAttribute("src");
      count++;
    } else if (urlhinh2 == null) {
      urlhinh2 = img.getAttribute("src");
      count++;
    }
    if (count === 2) {
      if (urlhinh1 === urlhinh2) {
        diem += 3;
      } else {
        setTimeout(() => {
          let img1 = document.querySelector(`[src="${urlhinh1}"]`);
          let img2 = document.querySelector(`[src="${urlhinh2}"]`);
          img1.className = "an";
          img2.className = "an";
        }, 1000);
        diem -= 1;
      }
      urlhinh1 = null;
      urlhinh2 = null;
      count = 0;
      if (diem <= diemthua) {
        luudiem(hoten, diem);
        alert("Bạn đã thua");
      }
      if (diem > diemthang) {
        luudiem(hoten, diem);
        alert("Xin chúc mừng bạn đã chiến thắng");
      }
    }
    document.getElementById("diem").innerHTML = String(diem);
  };
  
  
  
let luudiem = (hoten, diem) => {
  fetch("http://localhost:4000/choi", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ten: hoten, diem: diem, thoidiem: new Date() }),
  });
};
let hiennguoichoi = () => {
  fetch("http://localhost:4000/choi/?_sort=diem&_order=desc")
    .then((res) => res.json())
    .then((data) => {
      let listnguoichoi = data;
      divNguoiChoi.innerHTML = `<h4>Danh sách người chơi</h4>`;
      listnguoichoi.forEach((nc, index) => {
        divNguoiChoi.innerHTML += `
            <p> <span>${index + 1}</span>
                <span>Tên: ${nc.ten}</span>
                <span>Điểm: ${nc.diem}</span>
                <span>Thời điểm: ${nc.thoidiem}</span>
            </p>`;
      });
    });
};
hiennguoichoi();
