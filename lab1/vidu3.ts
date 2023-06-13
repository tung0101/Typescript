const xuly = function() {
  let tensp = document.getElementById('tensp') as HTMLInputElement;
  let loai = document.getElementById('loai') as HTMLInputElement;
  let tt = document.forms[0].tt as HTMLInputElement;
  let cn = document.getElementById('chongnuoc') as HTMLInputElement;
  let ct = document.getElementById('chongtrom') as HTMLInputElement;
  let mota = document.getElementById('mota') as HTMLInputElement;
  console.log("Tensp= ", tensp.value, " Loại= ", loai.value);
  console.log("Chống nước= ", cn.checked, " Chống trộm= ", ct.checked);
  console.log("Trạng thái= ", tt.value, " Mô tả= ",  mota.value);
  document.getElementById('sp').innerText=tensp.value;
    document.getElementById('loai').innerText=loai.value;
    document.getElementById('dad').innerText=c.value;
    document.getElementById('tt').innerText=tt.value;
}