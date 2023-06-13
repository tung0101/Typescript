var checkValid = () => {
  let u = document.getElementById('u') as HTMLInputElement;
  let p = document.getElementById('p') as HTMLInputElement;
  console.log(u.value, p.value);
  document.getElementById('ht').innerText=u.value;
  document.getElementById('pass').innerText=p.value;
}