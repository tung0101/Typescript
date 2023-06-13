export class Sanpham {
    id;
    tensp;
    giasp;
    hinh;
}
export function naplaiSauXGiay(x) {
    setTimeout(`location.reload()`, x * 1000);
}
export function chao(x) {
    alert(x == "" ? "Chào quý khách" : x);
}
