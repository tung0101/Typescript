interface INhaSX{ idNSX:number; tenNSX:string}
interface IThuocTinh{ tenTT:string; giaTri:string}
interface ISanpham{ id:number; ten:string; gia:number; hinh?:string; mota?:string;
nsx:INhaSX; thuoctinh:IThuocTinh[]}
let sp1:ISanpham = {
  id: 12,
  ten:'Lenovo Ideapad 3 15IAU7',
  gia: 10990000,
  mota:`Laptop Lenovo Ideapad 3 15IAU7 i3 có kích thước màn hình 15.6 inch với độ phân giải Full HD giúp các chi tiết hiển thị trên màn hình được rõ ràng, sắc nét.`,
  hinh:'https://cdn.tgdd.vn/Products/Images/44/287769/Slider/vi-vn-lenovo-ideapad-3-15iau7-i3-82rk005lvn-1.jpg',
  nsx : {idNSX:1, tenNSX:'Lenovo'},
  thuoctinh: [
      { tenTT:'CPU', giaTri: 'i3 1215U1.2GHz'},
      { tenTT: 'RAM', giaTri:'8 GBDDR4 2 khe'},
      { tenTT: 'Ổ cứng', giaTri:'256 GB SSD NVMe'},
  ]
};