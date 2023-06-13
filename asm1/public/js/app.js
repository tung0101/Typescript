// const hoten = localStorage.getItem("hoten") as String ;
// if (hoten == null) document.location.href = "login.html";
// document.getElementById("hoten").innerHTML = hoten;

let arr_hinh;
arr_hinh = [
  {
    id: 1,
    ten: "Hoa lan",
    url: "lan.jpg",
    mota: "Lan có mùi thơm dễ chịu, sang trọng, tao nhã",
  },
  {
    id: 2,
    ten: "Anh đào",
    url: "anhdao.jpg",
    mota: "Hoa mỏng manh, tượng trưng cho sắc đẹp và tinh khiết",
  },
  {
    id: 3,
    ten: "Thiên điểu",
    url: "thiendieu.jpg",
    mota: "Hoa có dạng chú chim đầy màu sắc",
  },
  {
    id: 4,
    ten: "Hoa tigon",
    url: "tigon.jpg",
    mota: "Hoa màu hồng, cánh mỏng manh.Mọc thành từng chùm.",
  },
  {
    id: 5,
    ten: "Thược dược",
    url: "thuocduoc.jpg",
    mota: "Hoa có nhiều màu, đẹp ngất ngây lòng người,",
  },
  {
    id: 6,
    ten: "Cẩm tú cầu",
    url: "camtucau.jpg",
    mota: "Đẹp trang nhã, nhẹ nhàng. Sống lâu năm",
  },
  {
    id: 7,
    ten: "Hoa lan",
    url: "lan.jpg",
    mota: "Lan có mùi thơm dễ chịu, sang trọng, tao nhã",
  },
  {
    id: 8,
    ten: "Anh đào",
    url: "anhdao.jpg",
    mota: "Hoa mỏng manh, tượng trưng cho sắc đẹp và tinh khiết",
  },
  {
    id: 9,
    ten: "Thiên điểu",
    url: "thiendieu.jpg",
    mota: "Hoa có dạng chú chim đầy màu sắc",
  },
  {
    id: 10,
    ten: "Hoa tigon",
    url: "tigon.jpg",
    mota: "Hoa màu hồng, cánh mỏng manh.Mọc thành từng chùm.",
  },
  {
    id: 11,
    ten: "Thược dược",
    url: "thuocduoc.jpg",
    mota: "Hoa có nhiều màu, đẹp ngất ngây lòng người,",
  },
  {
    id: 12,
    ten: "Cẩm tú cầu",
    url: "camtucau.jpg",
    mota: "Đẹp trang nhã, nhẹ nhàng. Sống lâu năm",
  },
];
const divHinhDep = document.getElementById("divhinhdep");
let hienhinh = (h) => {
  divHinhDep.innerHTML += `<div class="hinh">
  <img src='public/images/${h.url}' title='${h.mota}'>
  </div>`;
};
const arr_hinh1 = arr_hinh.sort((a, b) => 0.5 - Math.random());
arr_hinh1.forEach(hienhinh);
const arrdivHinh = document.querySelectorAll("div.hinh");
arrdivHinh.forEach((div) => (div.children.item(0).className = "an"));
var urlhinh1 = null;
var urlhinh2 = null;
let diemso = 0;
arrdivHinh.forEach((div) => {
  let img = div.children.item(0);


  div.onclick = function () {
    img.className = img.className == "an" ? "hien" : "an";
    if (urlhinh1 == null) {
      urlhinh1 = img.getAttribute("src");
    } else {
      urlhinh2 = img.getAttribute("src");
    }
    if (urlhinh1 != null && urlhinh2 != null) {
      if (urlhinh1 == urlhinh2) {
        diemso += 3;
        urlhinh1 = null;
        urlhinh2 = null;
      } else {
        diemso -= 1;
        setTimeout(() => {
          img.className = "an";
          document.querySelector(`img[src='${urlhinh1}']`).className = "an";
          urlhinh1 = null;
          urlhinh2 = null;
        }, 1000);
      }
      document.getElementById("diemso").innerHTML = String(diemso);
    }
    
  };

});
function log(){
  var ht=document.getElementById("hoten").value
  document.getElementById("ht").innerHTML=ht
}
