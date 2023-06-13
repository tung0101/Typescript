var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function hienketqua(min, max) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const result = originalMethod.apply(this, args);
            if (result >= min && result <= max) {
                console.log(`Kết quả của sinh viên là ${result} và đạt`);
            }
            else {
                console.log(`Kết quả của sinh viên là ${result} và không đạt`);
            }
            return result;
        };
        return descriptor;
    };
}
class SinhVienThi {
    constructor(diem) {
        this.d = diem;
    }
    hienDiem() {
        return this.d;
    }
}
__decorate([
    hienketqua(0, 10)
], SinhVienThi.prototype, "hienDiem", null);
const sinhVien = new SinhVienThi(8);
sinhVien.hienDiem();
function kiemtradiem(diem, min, max) {
    if (diem >= min && diem <= max) {
        return "Đạt";
    }
    else {
        return "Không đạt";
    }
}
const d = 5;
const ketQua = kiemtradiem(d, 0, 10);
console.log(`Điểm của sinh viên là ${d} và ${ketQua}`);
