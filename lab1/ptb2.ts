var ptb2 = function (a: number, b: number, c: number) {
  var d = b * b - 4 * a * c;
  if (a == 0) {
    //ptb1
    if (b == 0) {
      if (c == 0) {
        document.getElementById("kq").innerHTML = "<p> Vô Số Nghiệm </p>";
      } else {
        document.getElementById("kq").innerHTML = "<p> Vô Nghiệm </p>";
      }
    } else {
      var x = -c / b;
      str = `<p> Phương trình có nghiệm kép: ${x.toFixed(2)}</p>`;
    }
  } else {
    if (d <= 0) {
      document.getElementById("kq").innerHTML = "<p> Vô Nghiệm </p>";
      return [];
    } else if (d == 0) {
      var n = -b / (2 * a);
      str = `<p> Phương trình có nghiệm kép: ${n.toFixed(2)}</p>`;
      document.getElementById("kq").innerHTML = str;
      return [n];
    } else {
      var n1 = -b - Math.sqrt(d) / (2 * a);
      var n2 = -b + Math.sqrt(d) / (2 * a);
      var n3 = n1 + n2;
      var str = `<p>Phương trình có 2 nghiệm phân biệt</p>
            <p>X<sub>1</sub> = ${n1.toFixed(2)}</p>
            <p>X<sub>2</sub> = ${n2.toFixed(2)}</p>
            <P>Tổng 2 nghiệm x1, x2 = ${n3.toFixed(2)}</p>`;
      document.getElementById("kq").innerHTML = str;
      return [n1, n2];
    }
  }
};

function choso() {
  // lần lượt hệ số a, b, c của phương trình được random từ -10 đến 10
  var a = -10 + Math.round(20 * Math.random());
  var b = -10 + Math.round(20 * Math.random());
  var c = -10 + Math.round(20 * Math.random());

  document.getElementById("a").value = a;
  document.getElementById("b").value = b;
  document.getElementById("c").value = c;

  // kiểm tra số a
  // if (a > 0) {
  //   a = " " + a;
  //   var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
  //   document.getElementById("ptb2").innerHTML = equa;
  // } else if (a < 0) {
  //   a *= -1;
  //   a = " - " + a;
  //   var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
  //   document.getElementById("ptb2").innerHTML = equa;
  // } else {
  //   a = "";
  //   var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
  //   document.getElementById("ptb2").innerHTML = equa;
  // }
  // // kiểm tra số b
  // if (b > 0) {
  //   b = " + " + b;
  //   var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
  //   document.getElementById("ptb2").innerHTML = equa;
  // } else if (b < 0) {
  //   b *= -1;
  //   b = " - " + b;
  //   var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
  //   document.getElementById("ptb2").innerHTML = equa;
  // } else {
  //   b = "+ ";
  //   var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
  //   document.getElementById("ptb2").innerHTML = equa;
  // }
  // // kiểm tra số c
  // if (c > 0) {
  //   c = " + " + c;
  //   var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
  //   document.getElementById("ptb2").innerHTML = equa;
  // } else if (c < 0) {
  //   c *= -1;
  //   c = " - " + c;
  //   var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
  //   document.getElementById("ptb2").innerHTML = equa;
  // } else {
  //   c = "";
  //   var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
  //   document.getElementById("ptb2").innerHTML = equa;
  // }
  var btn = document.getElementById("btngiai");
  btn.disabled = false;
  btn.className = "nut";
}
