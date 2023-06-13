export interface IHocSinh {
  id: number;
  ten: string;
  toan: number;
  van: number;
}

export const dsHocSinh: IHocSinh[] = [
  { id: 1, ten: "Nguyen Van A", toan: 8, van: 7 },
  { id: 2, ten: "Le Thi B", toan: 9, van: 8 },
  { id: 3, ten: "Tran Van C", toan: 7, van: 6 },
  { id: 4, ten: "Hoang Van D", toan: 8, van: 5 },
];

export function LayHS(index: number): IHocSinh {
  return dsHocSinh[index];
}



