export interface IThanhPho {
  idTP: number;
  tenTP: string;
  soDan: number;
}

export const danhSachThanhPho: IThanhPho[] = [
  { idTP: 1, tenTP: 'Hà Nội', soDan: 7_000_000 },
  { idTP: 2, tenTP: 'Hồ Chí Minh', soDan: 8_900_000 },
  { idTP: 3, tenTP: 'Đà Nẵng', soDan: 1_500_000 },
  { idTP: 4, tenTP: 'Hải Phòng', soDan: 2_000_000 },
  { idTP: 5, tenTP: 'Cần Thơ', soDan: 1_200_000 },
];

export function layTenTP(index: number): string {
  return danhSachThanhPho[index]?.tenTP || '';
}
