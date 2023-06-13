// Định nghĩa enum PHÒNGBAN
enum PHONG_BAN {
  KY_THUAT = "KỸ THUẬT",
  KE_TOAN = "KẾ TOÁN",
  KINH_DOANH = "KINH DOANH",
  NGHIEP_VU = "NGHIỆP VỤ",
}

// Định nghĩa kiểu dữ liệu NhanVien
type NhanVien = {
  idnv: number;
  hoten: string;
  namsinh: number;
};

// Định nghĩa kiểu dữ liệu ThongTin
type ThongTin = {
  idnv: number;
  phongban: PHONG_BAN;
  sonamcongtac: number;
};

// Định nghĩa kiểu dữ liệu ThongTinNhanVien
type ThongTinNhanVien = NhanVien & ThongTin;

// Tạo mảng ThongTinNhanVien và gán giá trị
const mangThongTinNhanVien: ThongTinNhanVien[] = [
  { idnv: 1, hoten: "Nguyen Van A", namsinh: 1985, phongban: PHONG_BAN.KY_THUAT, sonamcongtac: 5 },
  { idnv: 2, hoten: "Nguyen Thi B", namsinh: 1990, phongban: PHONG_BAN.KE_TOAN, sonamcongtac: 3 },
  { idnv: 3, hoten: "Tran Van C", namsinh: 1992, phongban: PHONG_BAN.KINH_DOANH, sonamcongtac: 8 },
  { idnv: 4, hoten: "Tran Thi D", namsinh: 1995, phongban: PHONG_BAN.NGHIEP_VU, sonamcongtac: 2 },
  { idnv: 5, hoten: "Hoang Van E", namsinh: 1998, phongban: PHONG_BAN.KY_THUAT, sonamcongtac: 6 },
];

// In ra mảng ThongTinNhanVien trong console
console.log(mangThongTinNhanVien);
