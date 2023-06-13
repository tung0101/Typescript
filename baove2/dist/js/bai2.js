var PHONG_BAN;
(function (PHONG_BAN) {
    PHONG_BAN["KY_THUAT"] = "K\u1EF8 THU\u1EACT";
    PHONG_BAN["KE_TOAN"] = "K\u1EBE TO\u00C1N";
    PHONG_BAN["KINH_DOANH"] = "KINH DOANH";
    PHONG_BAN["NGHIEP_VU"] = "NGHI\u1EC6P V\u1EE4";
})(PHONG_BAN || (PHONG_BAN = {}));
const mangThongTinNhanVien = [
    { idnv: 1, hoten: "Nguyen Van A", namsinh: 1985, phongban: PHONG_BAN.KY_THUAT, sonamcongtac: 5 },
    { idnv: 2, hoten: "Nguyen Thi B", namsinh: 1990, phongban: PHONG_BAN.KE_TOAN, sonamcongtac: 3 },
    { idnv: 3, hoten: "Tran Van C", namsinh: 1992, phongban: PHONG_BAN.KINH_DOANH, sonamcongtac: 8 },
    { idnv: 4, hoten: "Tran Thi D", namsinh: 1995, phongban: PHONG_BAN.NGHIEP_VU, sonamcongtac: 2 },
    { idnv: 5, hoten: "Hoang Van E", namsinh: 1998, phongban: PHONG_BAN.KY_THUAT, sonamcongtac: 6 },
];
console.log(mangThongTinNhanVien);
const table = document.getElementById("nhanvien").getElementsByTagName('tbody')[0];

for (let i = 0; i < mangThongTinNhanVien.length; i++) {
  const row = table.insertRow(i);
  const idnvCell = row.insertCell(0);
  const hotenCell = row.insertCell(1);
  const namsinhCell = row.insertCell(2);
  const phongbanCell = row.insertCell(3);
  const sonamcongtacCell = row.insertCell(4);

  idnvCell.innerHTML = mangThongTinNhanVien[i].idnv;
  hotenCell.innerHTML = mangThongTinNhanVien[i].hoten;
  namsinhCell.innerHTML = mangThongTinNhanVien[i].namsinh;
  phongbanCell.innerHTML = mangThongTinNhanVien[i].phongban;
  sonamcongtacCell.innerHTML = mangThongTinNhanVien[i].sonamcongtac;
}
