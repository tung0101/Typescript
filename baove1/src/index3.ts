// Tạo kiểu dữ liệu enum mới
enum SO_THICH {
  NHAC = "Nhạc",
  THE_THAO = "Thể thao",
  PHIM = "Phim"
}

// Tạo kiểu dữ liệu mới SinhVien
type SinhVien = {
  id: number,
  hoTen: string,
  soThich: SO_THICH
}

// Tạo kiểu dữ liệu mới ThongTinSV
type ThongTinSV = {
  id: number,
  tinh: string,
  hocBong: number
}

// Tạo kiểu dữ liệu mới SV
type SV = SinhVien & ThongTinSV;

// Tạo một mảng 5 phần tử với kiểu SV
const danhSachSV: SV[] = [
  { id: 1, hoTen: "Nguyễn Văn A", soThich: SO_THICH.NHAC, tinh: "Hà Nội", hocBong: 5000000 },
  { id: 2, hoTen: "Phạm Thị B", soThich: SO_THICH.PHIM, tinh: "Hồ Chí Minh", hocBong: 7000000 },
  { id: 3, hoTen: "Trần Văn C", soThich: SO_THICH.THE_THAO, tinh: "Đà Nẵng", hocBong: 6000000 },
  { id: 4, hoTen: "Lê Thị D", soThich: SO_THICH.NHAC, tinh: "Hải Phòng", hocBong: 8000000 },
  { id: 5, hoTen: "Hoàng Văn E", soThich: SO_THICH.PHIM, tinh: "Nghệ An", hocBong: 5500000 }
];

// In ra mảng danhSachSV
console.log(danhSachSV);
