var SO_THICH;
(function (SO_THICH) {
    SO_THICH["NHAC"] = "Nh\u1EA1c";
    SO_THICH["THE_THAO"] = "Th\u1EC3 thao";
    SO_THICH["PHIM"] = "Phim";
})(SO_THICH || (SO_THICH = {}));
const danhSachSV = [
    { id: 1, hoTen: "Nguyễn Văn A", soThich: SO_THICH.NHAC, tinh: "Hà Nội", hocBong: 5000000 },
    { id: 2, hoTen: "Phạm Thị B", soThich: SO_THICH.PHIM, tinh: "Hồ Chí Minh", hocBong: 7000000 },
    { id: 3, hoTen: "Trần Văn C", soThich: SO_THICH.THE_THAO, tinh: "Đà Nẵng", hocBong: 6000000 },
    { id: 4, hoTen: "Lê Thị D", soThich: SO_THICH.NHAC, tinh: "Hải Phòng", hocBong: 8000000 },
    { id: 5, hoTen: "Hoàng Văn E", soThich: SO_THICH.PHIM, tinh: "Nghệ An", hocBong: 5500000 }
];
console.log(danhSachSV);
const tableBody = document.getElementById("table-body");

danhSachSV.forEach(sinhVien => {
  const row = document.createElement("tr");
  const idCell = document.createElement("td");
  idCell.textContent = sinhVien.id;
  const hoTenCell = document.createElement("td");
  hoTenCell.textContent = sinhVien.hoTen;
  const soThichCell = document.createElement("td");
  soThichCell.textContent = sinhVien.soThich;
  const tinhCell = document.createElement("td");
  tinhCell.textContent = sinhVien.tinh;
  const hocBongCell = document.createElement("td");
  hocBongCell.textContent = sinhVien.hocBong;
  row.appendChild(idCell);
  row.appendChild(hoTenCell);
  row.appendChild(soThichCell);
  row.appendChild(tinhCell);
  row.appendChild(hocBongCell);
  tableBody.appendChild(row);
});

