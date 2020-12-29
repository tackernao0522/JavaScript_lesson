// 算出演算子
var x = 10;
var y = 2;
var z = 10;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y, "\n");

// 関係演算子 正しい or 正しくない true or false
console.log(x > y); // true
console.log(x < y); // false
console.log(x <= y); // false
console.log(x >= z, "\n"); // true

// 等価 ２つの値が等しい
console.log(x == y); // flase
console.log(x != y, "\n"); // true

// 論理演算子 複数の条件を判断
var a = 8;
var b = 3;

console.log(a >= 5 && a <= 10); // true
console.log(b >= 5 && b <= 10); // false
console.log(a == 3 || b == 3); // true
console.log(a == 1 || b == 1, "\n"); // false

// 複合代入演算子(足し算、引き算などと組み合わせて代入する演算子) 複合演算子
var c = 8;
var d = 12;
var e = 20;

c += 10;
e += d;

console.log(c); // 18
console.log(e, "\n"); // 32

// インクリメント(変数名++)とデクリメント(変数名--)
var f = 8;
var g = 8;

f++;
g--;

console.log(f); // 9
console.log(g); // 7
