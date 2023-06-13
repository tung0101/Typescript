const cart = [
    { id: 1, tensp: 'bún xào', gia: 40000, soluong: 1, hinh: 'bunxao.jpg' },
    { id: 2, tensp: 'Hủ tiếu', gia: 50000, soluong: 2, hinh: 'hutieu.jpg' },
    { id: 3, tensp: 'Bánh canh', gia: 60000, soluong: 1, hinh: 'banhcanh.jpg' },
    { id: 4, tensp: 'mì xào giòn', gia: 70000, soluong: 4, hinh: 'mixaogion.jpg' },
    { id: 5, tensp: 'Súp nấm', gia: 80000, soluong: 3, hinh: 'supnam.jpg' },
    { id: 6, tensp: 'nấm xào xả', gia: 45000, soluong: 2, hinh: 'namxaoxa.jpg' },
];
let htmlcart = '';
cart.forEach(function (c) {
    htmlcart += `<tr class='sp'>
      <td>${c.id}</td>
      <td><img src=public/images/${c.hinh}></td>
      <td>${c.tensp}</td>
      <td>${c.gia}</td>
      <td>${c.soluong}</td>
      <td>${c.gia * c.soluong}</td>
    </tr>`;
});
document.getElementById('cart').innerHTML = htmlcart;
