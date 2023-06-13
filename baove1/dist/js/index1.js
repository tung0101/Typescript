import { danhSachThanhPho, layTenTP } from "./thanhpho.js";

const cityList = document.getElementById("city-list");

danhSachThanhPho.forEach((city) => {
  const li = document.createElement("li");
  li.textContent = city.tenTP;
  cityList.appendChild(li);
});

const index = 2;
const tenThanhPho = LayTenTP(index);

alert(`Tên thành phố thứ ${index + 1} là: ${tenThanhPho}`);
