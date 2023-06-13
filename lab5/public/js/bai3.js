function xuly(p) {
    const listsp = [
        { ten: 'Cà chua', gia: 30000, cònhàng: true },
        { ten: 'Chuổi', gia: 14000, cònhàng: false },
        { ten: 'Cam thảo', gia: 82000, cònhàng: true },
        { ten: 'Chà Là', gia: 194000, cònhàng: true }
    ];
    let arr = [];
    switch (typeof p) {
        case 'number':
            arr = listsp.map(e => e.gia);
            break;
        case 'string':
            arr = listsp.map(e => e.ten);
            break;
        case 'boolean':
            arr = listsp.map(e => e.cònhàng);
            break;
        default: arr = [];
    }
    return arr;
}
let arr1 = xuly(1);
console.log(arr1);
let arr2 = xuly('');
console.log(arr2);
let arr3 = xuly(true);
console.log(arr3);
let arr4 = xuly(undefined);
console.log(arr4);
let arr = [];
function themsv(msv, kq) {
    arr.push([msv, kq]);
    return kq;
}
themsv('pd12345', "Đậu");
themsv('pd54321', true);
themsv('ps12345', 8);
console.log(arr);
function xuly(arg) { return arg; }
let xl = xuly;
console.log(xl(5));
console.log(xl("Thứ sáu"));
console.log(xl(true));
function thuchien(param1, param2) {
    console.log(param1 + ' - ' + param2);
}
thuchien("Gạo", 25000);
thuchien(25000, "Gạo");
thuchien("Gạo", "25000 đồng");
;
function hamA(ten, gia) {
    console.log(`Tên = ${ten} , giá = ${gia}`);
}
function hamB(ten, gia) {
    console.log(`Tên = ${ten} , giá = ${gia}`);
}
let tb1 = hamA;
tb1('Ổ cắm thông minh', 152000);
let tb2 = hamB;
tb2('Quạt hút mùi', '3500000 đồng');
class G_Test {
    zeroValue;
    cong;
}
let a = new G_Test();
a.zeroValue = 0;
a.cong = (x, y) => x + y;
console.log(a.cong(8, 3));
let b = new G_Test();
b.zeroValue = "";
b.cong = (x, y) => x + y;
console.log(b.cong("8", "3"));
console.log(b.cong("Tử", " tế"));
let c = new G_Test();
c.zeroValue = false;
c.cong = (x, y) => x || y;
