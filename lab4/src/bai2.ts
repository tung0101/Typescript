interface tinhtoan{
    (a: number, b: number): number;
};
 let tt: tinhtoan;
 function cong(so1:number, so2:number): number{ return so1+so2}
 function tru(so1:number, so2:number): number{ return so1-so2}
 function nhan(so1:number, so2:number): number{ return so1*so2}
 function chia(so1:number, so2:number): number{ return so1/so2}
 let frm =document.forms['frm'];
 frm.btn.onclick=()=>{
    let a: number = Number(frm.a.value);
    let b: number = Number(frm.b.value);
    switch (frm.pheptoan.value){
        case "1":tt = cong;break;
        case "2":tt = tru;break;
        case "3":tt = nhan;break;
        default: tt = chia;
    }
    let kq =tt(a,b);
    console.log(a,b,kq)
    document.getElementById('ketqua')!.innerHTML = kq.toString();
 }