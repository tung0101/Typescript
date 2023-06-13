function hienketqua(min: number, max: number) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const result = originalMethod.apply(this, args);
      if (result >= min && result <= max) {
        console.log(`Kết quả của sinh viên là ${result} và đạt`);
      } else {
        console.log(`Kết quả của sinh viên là ${result} và không đạt`);
      }
      return result;
    }
    return descriptor;
  }
}

class SinhVienThi {
  private d: number;
  
  constructor(diem: number) {
    this.d = diem;
  }
  
  @hienketqua(0, 10)
  public hienDiem(): number {
    return this.d;
  }
}

const sinhVien = new SinhVienThi(8);
sinhVien.hienDiem(); // Kết quả của sinh viên là 8 và đạt
function kiemtradiem(diem: number, min: number, max: number): string {
  if (diem >= min && diem <= max) {
    return "Đạt";
  } else {
    return "Không đạt";
  }
}
const d = 5;
const ketQua = kiemtradiem(d, 0, 10);
console.log(`Điểm của sinh viên là ${d} và ${ketQua}`);
// Kết quả: Điểm của sinh viên là 5 và Đạt
