var MàuSP;
(function (MàuSP) {
    MàuSP[MàuSP["\u0110\u1ECF"] = 0] = "\u0110\u1ECF";
    MàuSP[MàuSP["Xanh"] = 1] = "Xanh";
    MàuSP[MàuSP["T\u00EDm"] = 2] = "T\u00EDm";
    MàuSP[MàuSP["\u0110en"] = 3] = "\u0110en";
    MàuSP[MàuSP["Tr\u1EAFng"] = 4] = "Tr\u1EAFng";
})(MàuSP || (MàuSP = {}));
;
let sp1 = {
    id: 1,
    ten: "iPhone 14 Pro Max 128GB",
    gia: 27990000,
    hinh: "https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2014%20Pro%20Max%20128/iPhone-14-Pro-Max-3.jpg",
    mau: MàuSP.Tím
};
let html = `<div class="dt">
    <img src="${sp1.hinh}" alt="" style="height: 200px; width: 250px;">
    <div class="content">
        <h4>Tên sản phẩm ${sp1.ten}</h4>
        <p>Giá tiền ${sp1.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
        <p>Màu sắc: ${sp1.mau}</p>
    </div>
</div>`;
const app = document.getElementById('app');
const api = document.getElementById('api');
app.innerHTML += html;
let cart;
cart = [
    [7, 'Thuật Xử Thế Của Người Xưa', 80000, 2, 'xuthe.jpg'],
    [2, 'Sống Như Nhân Duyên', 96000, 1, 'songnd.jpg'],
    [3, 'Con đường hạnh phúc', 30000, 1, 'cdhp.jpg'],
    [9, 'Giá trị của sự tử tế', 75000, 3, 'tute.jpg'],
];
cart.push([5, 'Nhẹ gánh ưu phiền', 82000, 1, 'nheganh.jpg']);
let htmlCart = `<div id="cart">`;
cart.forEach(e => htmlCart +=
    `<p>
        <span>${e[1]}</span>
        <span>${e[2]}</span>
        <span>${e[3]}</span>
    </p>`);
htmlCart += '</div>';
app.innerHTML += htmlCart;
let apiKey = 'wtwj5endyPsIIC9MqLLkZ24u56h1ybPjil3rElFVaim12Hzn4Bm0V3AZ';
let tukhoa = 'People';
let url = `https://api.pexels.com/v1/search?query=${tukhoa}`;
let htmlAnh = "";
fetch(url, { headers: { Authorization: apiKey } })
    .then(res => res.json())
    .then(data => {
    console.log(data);
    htmlAnh += '</div>';
    api.innerHTML += htmlAnh;
    data.photos.forEach((_e) => {
        let h = {
            id: _e.id,
            dorong: _e.width,
            docao: _e.height,
            diachi: _e.src.landscape,
            tacgia: _e.photographer,
            mota: _e.alt
        };
        htmlAnh +=
            `<div class="box" >
            <img src="${h.diachi}" alt="${h.mota}" width="300">
            <h4>Tác giả: ${h.tacgia}</h4>
            <p>Rộng: ${h.dorong} Cao: ${h.docao}</p>
            <p>${h.mota}</p>
        </div>`;
        api.innerHTML = htmlAnh;
    });
});
