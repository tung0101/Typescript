;
let tt;
function cong(so1, so2) { return so1 + so2; }
function tru(so1, so2) { return so1 - so2; }
function nhan(so1, so2) { return so1 * so2; }
function chia(so1, so2) { return so1 / so2; }
let frm = document.forms['frm'];
frm.btn.onclick = () => {
    let a = Number(frm.a.value);
    let b = Number(frm.b.value);
    switch (frm.pheptoan.value) {
        case "1":
            tt = cong;
            break;
        case "2":
            tt = tru;
            break;
        case "3":
            tt = nhan;
            break;
        default: tt = chia;
    }
    let kq = tt(a, b);
    console.log(a, b, kq);
    document.getElementById('ketqua').innerHTML = kq.toString();
};
