/**
 * Khối 1:
 * Nhập 3 số nguyên
 * 
 * Khối 2:
 * B1: Tạo biến chứa 3 số nguyên
 *  _num1
 *  _num2
 *  _num3
 * 
 * B2: 
 * _Tạo mảng chứa các biến vừa nhập vào
 *  var array = [num1, num2, num3];
 * _Sắp xếp theo thứ tự tăng dần của mảng 
 *  array.sort(function(a, b){return a - b});
 * 
 * B3: in kết quả
 * 
 * Khối 3: Thứ tự các số theo thứ tự tăng dần
 */


var sapXep = document.getElementById("sapXep");

sapXep.addEventListener("click", function (e) {
    e.preventDefault();

    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var array = [num1, num2, num3];
    console.log(num1, num2, num3);
    console.log(array);
    array.sort(function (a, b) { return a - b });

    var kq = document.getElementById("ketQua");
    kq.innerHTML = "Sắp xếp theo thứ tự tăng dần: " + array;
})



/**
 * Khối 1:
 * Chọn ai là người dùng trong các lựa chọn (Bố, Mẹ, Anh trai, Em gái)(Lấy từ form)
 * 
 * Khối 2:
 * B1: Tạo biến chứa người dùng 
 *  _bo
 *  _me
 *  _anh
 *  _em
 *  _nguoiDung
 * 
 * B2: dựa vào lựa chọn đưa ra lời chào phù hợp
 * _Bố: Chào bố
 * _Mẹ: Chào mẹ
 * _Anh trai: Chào anh trai
 * _Em gái: Chào em gái
 * 
 * B3: Xác định người dùng
 * 
 * B4: in lời chào
 * 
 * Khối 3: In lời chào theo người dùng
 */

var chaoHoi = document.getElementById("chaoHoi");

chaoHoi.addEventListener("click", function (e) {
    e.preventDefault();

    var radioBo = document.getElementById("chaoBo");
    var radioMe = document.getElementById("chaoMe");
    var radioAnh = document.getElementById("chaoAnh");
    var radioEm = document.getElementById("chaoEm");
    var loiChao = document.getElementById("loiChao");
    var nguoiDung = "";
    if (radioBo.checked) {
        nguoiDung = radioBo.value;
    }
    else if (radioMe.checked) {
        nguoiDung = radioMe.value;
    }
    else if (radioAnh.checked) {
        nguoiDung = radioAnh.value;
    }
    else if (radioEm.checked) {
        nguoiDung = radioEm.value;
    }
    else {
        console.log("Người dùng không xác định");
    }

    switch (nguoiDung) {
        case "bo":
            loiChao.innerHTML = "Chào bố";
            break;
        case "me":
            loiChao.innerHTML = "Chào mẹ";
            break;
        case "anh":
            loiChao.innerHTML = "Chào anh trai";
            break;
        case "em":
            loiChao.innerHTML = "Chào em gái";
            break;
        default:
            loiChao.innerHTML = "Người dùng không xác định";
    }
})



/**
 * Khối 1:
 * Nhập 3 số nguyên
 * 
 * 
 * Khối 2:
 * B1: Tạo biến chứa 3 số nguyên
 *  _so1
 *  _so2
 *  _so3
 * 
 * B2: 
 * Tạo mảng chứa các biến vừa nhập vào
 * _var arr = [so1, so2, so3];
 * Tạo biến đếm số chẵn, lẻ
 * _chan
 * _le
 * Đếm số số chẵn/lẻ trong mảng
 * _for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            chan++;
        }
        else if (arr[i] % 2 != 0) {
            le++;
        }
    }
 * 
 * B3: in kết quả
 * 
 * Khối 3: Số lượng số chẵn, lẻ
 */

var demSo = document.getElementById("demSo");

demSo.addEventListener("click", function (e) {
    e.preventDefault();

    var so1 = parseInt(document.getElementById("so1").value);
    var so2 = parseInt(document.getElementById("so2").value);
    var so3 = parseInt(document.getElementById("so3").value);

    var arr = [so1, so2, so3];
    console.log(so1, so2, so3);
    console.log(arr);

    var chan = 0;
    var le = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            chan++;
        }
        else if (arr[i] % 2 != 0) {
            le++;
        }
    }

    var sl = document.getElementById("soLuong");
    sl.innerHTML = "Số lượng số lẻ: " + le + "<br>" + "Số lượng số chẵn: " + chan;
})



/**
 * Khối 1:
 * Nhập độ dài 3 cạnh của tam giác
 * 
 * Khối 2:
 * B1: Tạo biến chứa 3 cạnh tam giác
 *  _a
 *  _b
 *  _c
 * 
 * B2: 
 * _Kiểm tra có phải 3 cạnh của 1 tam giác không?
 *   if( a<b+c && b<a+c && c<a+b )
 * _Nếu đúng: 
 *  +Kiểm tra có phải tam giác vuông:
 *       if( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b)
 *  +Kiểm tra có phải tam giác đều:
 *       else if(a==b && b==c)
 *  +Kiểm tra có phải tam giác cân:
 *       else if(a==b || a==c || b==c)
 *  +Kiểm tra tam giác tù hay nhọn
 *       else if(a*a > b*b+c*c || b*b > a*a+c*c || c*c > a*a+b*b)    (tam giác tù)
 *       else (tam giác nhọn)
 * _Nếu sai: không phải 3 cạnh của tam giác
 * 
 * B3: in kết quả
 * 
 * Khối 3: Cho biết loại tam giác
 * 
 */

var kiemTra = document.getElementById("kiemTra");

kiemTra.addEventListener("click", function (e) {
    e.preventDefault();

    var a = parseFloat(document.getElementById("canh1").value);
    var b = parseFloat(document.getElementById("canh2").value);
    var c = parseFloat(document.getElementById("canh3").value);

    var tamGiac = document.getElementById("tamGiac");

    if (a < b + c && b < a + c && c < a + b) {
        if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
            tamGiac.innerHTML = "Tam giác vuông";
        }
        else if (a == b && b == c) {
            tamGiac.innerHTML = "Tam giác đều";
        }
        else if (a == b || a == c || b == c) {
            tamGiac.innerHTML = "Tam giác cân";
        }
        else if (a * a > b * b + c * c || b * b > a * a + c * c || c * c > a * a + b * b) {
            tamGiac.innerHTML = "Tam giác tù";
        }
        else {
            tamGiac.innerHTML = "Tam giác nhọn";
        }
    }
    else {
        tamGiac.innerHTML = "3 cạnh a, b, c không phải 3 cạnh của 1 tam giác";
    }
})



