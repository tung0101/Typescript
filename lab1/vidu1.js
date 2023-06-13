var nhap = function () {
    var name = document.getElementById('name');
    console.log(name.value);
    var tien = "100k";
    var str = "Chào " + name.value + " tặng bạn " + tien;
    console.log(str)
    document.getElementById('kq').innerText=str;
};

