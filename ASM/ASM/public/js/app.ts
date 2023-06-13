let hoten = localStorage.getItem("hoten") as string;
if (hoten == null) document.location = "login.html";
console.log("hoten");
document.getElementById("hoten").innerHTML = hoten;

type hinhdep = {
  id: number;
  ten: string;
  url: string;
  mota: string;
  level: number;
};
type nguoichoi = { id: number; ten: string; diem: number; thoidiem: number };

let arr_hinh: hinhdep[];
var urlhinh1: string = null;
var urlhinh2: string = null;
var diem = 0;
const divHinhDep = document.getElementById("divhinhdep");
const divNguoiChoi = document.getElementById("divnguoichoi");
var diemthang = 2;
var diemthua = -3;

//
fetch("http:/localhost:4000/hinh")
  .then((res) => res.json())
  .then((data) => {
    //xu ly ban dau

    arr_hinh = data as hinhdep[];
    //them mang
    arr_hinh = arr_hinh.concat(arr_hinh);
    // xao tron mang
    arr_hinh = arr_hinh.sort((a, b) => 0.5 - Math.random());
    console.log(data);
    return arr_hinh;
  })
  .then((arr_hinh) => {
    // hien hinh trong cac div
    arr_hinh.forEach((h) => {
      divHinhDep.innerHTML += `
        <div class="hinh">
           <img src="/public/images/${h.url}" title='${h.mota}'>
        </div>
        `;
    });
    return arr_hinh;
  })
  .then(function (arr_hinh) {
    //an hinh trong cac div
    const arrdivHinh = document.querySelectorAll("div.hinh");
    arrdivHinh.forEach(
      (div: HTMLElement) => (div.children.item(0).className = "an")
    );
    // gan click vao cac div de an hien hinh
    arrdivHinh.forEach((div: HTMLElement) => {
      div.onclick = function () {
        nhapVaoDiv(div);
      };
    });
  });

  let nhapVaoDiv = (div) => {
    let img = div.children.item(0);
    img.className = img.className == "an" ? "hien" : "an";
    if (urlhinh1 == null) {
      urlhinh1 = img.getAttribute("src");
      row1 = div.parentElement; // lưu thẻ div cha chứa hình ảnh đang được chọn vào hàng đầu tiên
    } else {
      // Kiểm tra nếu hình ảnh được chọn và hình ảnh trước đó nằm trên cùng 1 hàng
      if (div.parentElement == row1) {
        urlhinh2 = img.getAttribute("src");
        if (urlhinh1 != urlhinh2) {
          setTimeout(() => {
            let img1 = document.querySelector(`img[src="${urlhinh1}"]`);
            let img2 = document.querySelector(`img[src="${urlhinh2}"]`);
            if (img1 && img2) {
              img1.className = "an";
              img2.className = "an";
            }
            urlhinh1 = null;
            urlhinh2 = null;
            diem -= 1;
            document.getElementById("diem").innerHTML = diem;
            if (diem <= diemthua) {
              luudiem(hoten, diem);
              alert("Bạn đã thua");
            }
          }, 1000);
        } else {
          diem += 3;
          urlhinh1 = null;
          urlhinh2 = null;
          document.getElementById("diem").innerHTML = diem;
          if (diem > diemthang) {
            luudiem(hoten, diem);
            alert("Xin chúc mừng bạn đã chiến thắng");
          }
        }
      } else {
        // Nếu hình ảnh được chọn khác hàng với hình ảnh trước đó, bỏ qua việc so sánh và đợi cho đến khi chọn hình ảnh mới
        urlhinh1 = img.getAttribute("src");
        row1 = div.parentElement;
      }
    }
  };
  
  

let luudiem = (hoten: string, diem: number) => {
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
      let listnguoichoi: nguoichoi[] = data as nguoichoi[];
      divNguoiChoi.innerHTML = `<h4>Danh sách người chơi</h4>`;
      listnguoichoi.forEach((nc, index) => {
        divNguoiChoi.innerHTML += `
            <p> <span>${index + 1}</span>
                <span>Ten: ${nc.ten}</span>
                <span>Diem: ${nc.diem}</span>
            </p>`;
      });
    });
};
hiennguoichoi();
