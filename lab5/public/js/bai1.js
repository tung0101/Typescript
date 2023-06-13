let sp1 = {
    id: 12,
    ten: "Lenovo Ideapad 3 15IAU7",
    gia: "10.990.000",
    mota: `Laptop Lenovo Ideapad 3 15IAU7 i3 có kích thước màn hình 15.6 inch với độ phân giải Full HD giúp các chi tiết hiển thị trên màn hình được rõ ràng, sắc nét. <br><br>`,
    hinh: "public/images/hinh1.jpg",
    nsx: { idNSX: 1, tenNSX: "Lenovo" },
    thuoctinh: [
        { tenTT: "CPU", giaTri: "i3 1215U1.2GHz" },
        { tenTT: "RAM", giaTri: "8 GBDDR4 2 khe" },
        { tenTT: "Ổ Cứng", giaTri: "256 GB SSD NVMe" },
    ],
};
const a = document.getElementById("product_details");
const b = document.getElementById("mota");
let htmlProduct = `<div class="row s_product_inner">
<div class="col-lg-6">
<img class="img-fluid" src="${sp1.hinh}" alt="" style="margin-top: 3.5rem;">
</div>
<div class="col-lg-5 offset-lg-1">
    <div class="s_product_text">
        <h1>${sp1.ten}</h1>
        <h3>${sp1.gia} đ</h3>
        <p>Tên Nhà Sản Xuất : ${sp1.nsx.tenNSX}</p>
        <ul class="list">
            <li><a class="active" href="#"><span>${sp1.thuoctinh[0].tenTT}</span> : ${sp1.thuoctinh[0].giaTri} </a></li>
            <li><a href="#"><span>${sp1.thuoctinh[1].tenTT}</span> : ${sp1.thuoctinh[1].giaTri}</a></li>
            <li><a href="#"><span>${sp1.thuoctinh[2].tenTT}</span> : ${sp1.thuoctinh[2].giaTri}</a></li>
		</ul>
        <div class="product_count" style="margin-top: 2rem;">             
        </div>
        <div class="card_area d-flex align-items-center">
      
        </div>
    </div>
</div>
</div>`;
a.innerHTML += htmlProduct;
let htmlmota = `
<div class="container">
			<ul class="nav nav-tabs" id="myTab" role="tablist">
				<li class="nav-item">
					<a class="nav-link" id="home-tab" data-toggle="tab"  role="tab" aria-controls="home" aria-selected="true">Mô tả</a>
				</li>
			</ul>
			<div class="tab-content" id="myTabContent">
				<div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
					<p>${sp1.mota}</p>
		        </div>
            </div>
</div>
`;
b.innerHTML += htmlmota;
