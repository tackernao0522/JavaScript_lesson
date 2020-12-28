// var a = new Array(3);
var a = new Array("sato", "suzuki", "takahashi");
// a[0] = "sato";
// a[1] = "suzuki";
// a[2] = "takahashi";

console.log(a[0]);
console.log(a[1]);
console.log(a[2], "\n");

// []での配列の書き方
var b = ["Taka", "Naomi", "Keiko"];

console.log(b[0]);
console.log(b[1]);
console.log(b[2], "\n");

// 配列の中身の変更
var arr = ["Nakamura", "Etsui", "Ito"];

arr[2] = "Yamaguchi";

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2], "\n");

// 二次元配列
var c;
c = [["sato", "suzuki"], ["takahashi", "tanaka"]];

console.log(c[0][0]);
console.log(c[0][1]);
console.log(c[1][0]);
console.log(c[1][1], "\n");
