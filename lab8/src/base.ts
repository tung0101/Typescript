export class Sanpham {
  id: number;
  tensp: string;
  giasp: number;
  hinh: string;
}
export interface IUser {
  id: number;
  hoten: string;
  email: string;
}
export function naplaiSauXGiay(x: number) {
  setTimeout(`location.reload()`, x * 1000);
}
export function chao(x: string) {
  alert(x == "" ? "Chào quý khách" : x);
}
