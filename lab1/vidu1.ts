var nhap = () => {
  let name = document.getElementById('name') as HTMLInputElement;
  console.log(name.value);
  let tien:string = "100k";
  let str= "Chào" + name + "Tặng bạn" + tien;
  console.log(str)
  document.getElementById('kq').innerText=str;
}