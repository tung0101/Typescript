export const danhSachThanhPho = [
    { idTP: 1, tenTP: 'Hà Nội', soDan: 7000000 },
    { idTP: 2, tenTP: 'Hồ Chí Minh', soDan: 8900000 },
    { idTP: 3, tenTP: 'Đà Nẵng', soDan: 1500000 },
    { idTP: 4, tenTP: 'Hải Phòng', soDan: 2000000 },
    { idTP: 5, tenTP: 'Cần Thơ', soDan: 1200000 },
];
export function layTenTP(index) {
    return danhSachThanhPho[index]?.tenTP || '';
}
