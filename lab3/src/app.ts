function timthu() {
  const selectElement = document.getElementById("my-select") as HTMLSelectElement;
  const selectedIndex = selectElement.selectedIndex;
  const selectedValue = selectElement.options[selectedIndex].value;  
  var day_name = "";
  switch (selectedIndex) {
    case 0:
      day_name = "Chủ nhật";
      break;
    case 1:
      day_name = "Thứ hai";
      break;
    case 2:
      day_name = "Thứ ba";
      break;
    case 3:
      day_name = "Thứ tư";
      break;
    case 4:
      day_name = "Thứ năm";
      break;
    case 5:
      day_name = "Thứ sau";
      break;
    case 6:
      day_name = "Thứ bảy";
  }
  document.getElementById("demo").innerHTML = day_name;
}

function xuly() {
  var chuoi = document.getElementById("chuoi") as HTMLInputElement;
  let xoaKyTuDacBiet = (str: string): string => {
    str = str.replace(/[^a-z20-9- ]/gi, (m) => "");
    return str;
  };
  let c: string = chuoi.value;
  c = xoaKyTuDacBiet(c);
  console.log(c); //Hay Yeu Nhau Di
  document.getElementById("kq").innerHTML = c;
}

type hinhdep = {
  id: number;
  ten: string;
  url: string;
  mota: string;
};
let arr_hinh:hinhdep[]

arr_hinh = [
  {id:1, ten:'Hoa lan', url:'lan.jpg', mota:'Lan có mùi thơm dễ chịu, sang trọng, tao nhã'},
  {id:2, ten:'Anh đào', url:'anhdao.jpg', mota:'Hoa mỏng manh, tượng trưng cho sắc đẹp và tinh khiết'},
  {id:3, ten:'Thiên điểu', url:'thiendieu.jpg', mota:'Hoa có dạng chú chim đầy màu sắc'},
  {id:4, ten:'Hoa tigon', url:'tigon.jpg', mota:'Hoa màu hồng, cánh mỏng manh.Mọc thành từng chùm.'},
  {id:5, ten:'Thược dược', url:'thuocduoc.jpg', mota:'Hoa có nhiều màu, đẹp ngất ngây lòng người,'},
  {id:6, ten:'Cẩm tú cầu', url:'camtucau.jpg', mota:'Đẹp trang nhã, nhẹ nhàng. Sống lâu năm'},
  {id:7, ten:'Hoa lan', url:'lan.jpg', mota:'Lan có mùi thơm dễ chịu, sang trọng, tao nhã'},
  {id:8, ten:'Anh đào', url:'anhdao.jpg', mota:'Hoa mỏng manh, tượng trưng cho sắc đẹp và tinh khiết'},
  {id:9, ten:'Thiên điểu', url:'thiendieu.jpg', mota:'Hoa có dạng chú chim đầy màu sắc'},
  {id:10, ten:'Hoa tigon', url:'tigon.jpg', mota:'Hoa màu hồng, cánh mỏng manh.Mọc thành từng chùm.'},
  {id:11, ten:'Thược dược', url:'thuocduoc.jpg', mota:'Hoa có nhiều màu, đẹp ngất ngây lòng người,'},
  {id:12, ten:'Cẩm tú cầu', url:'camtucau.jpg', mota:'Đẹp trang nhã, nhẹ nhàng. Sống lâu năm'},
];
const divHinhDep = document.getElementById('divhinhdep');
let hienhinh = (h:hinhdep):void => {
  divHinhDep.innerHTML+=`<div class="hinh">
  <img src='public/images/${h.url}' title='${h.mota}'>
  </div>`;
}
const arr_hinh1:hinhdep[] = arr_hinh.sort((a, b) => 0.5 - Math.random());
arr_hinh1.forEach( hienhinh);
const arrdivHinh=document.querySelectorAll('div.hinh');
arrdivHinh.forEach(
  (div:HTMLElement)=>div.children.item(0).className='an'
)
arrdivHinh.forEach((div:HTMLElement)=>{
  let img=div.children.item(0);
  div.onclick=function(){
    img.className=(img.className=='an')?'hien':'an';
  }
})
