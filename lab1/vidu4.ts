var arr: string[] = [
  "Tôi về tìm lại tuổi thơ",
  "Tìm trong câu hát ầu ơ ví dầu",
  "Tìm về đồng ruộng nương dâu",
  "Dòng sông bến nước cây cầu gốc đa",
];
var arr1: string[] = [
  "Tôi tìm một khắc tình qua",
  "Với con nước nhỏ, với hoa mười giờ",
  "Với bóng tre, với bóng đuờng tròn trĩnh",
  "Với thầy cô, với bạn đồng mình",
];
var arr2: string[] = [
  "Tôi tìm một trận cờ ván",
  "Một giọt sữa đá ngọt, vị quê",
  "Một đêm hội trăng trên sân",
  "Một đàn bò, một đàn trâu về",
];
var arr3: string[] = [
  'Tôi tìm bình yên như thuở',
  'Mà lời mẹ ru con thơ ngủ say',
  'Bình minh đốt lên trên cánh đồng mênh mông',
  'Trong chiều nắng, bước chân theo ngôi trường xưa.'
];
var divTho = document.getElementById("divTho") as HTMLElement;
var divTho1 = document.getElementById("divTho1") as HTMLElement;
var divTho2 = document.getElementById("divTho2") as HTMLElement;
var divTho3 = document.getElementById("divTho2") as HTMLElement;
if (divTho) arr.forEach((t) => (divTho.innerHTML += `<p> ` + t + `</p>`));
if (divTho1) arr1.forEach((t) => (divTho.innerHTML += `<p> ` + t + `</p>`));
if (divTho2) arr2.forEach((t) => (divTho.innerHTML += `<p> ` + t + `</p>`));
if (divTho3) arr3.forEach((t) => (divTho.innerHTML += `<p> ` + t + `</p>`));
