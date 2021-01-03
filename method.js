function say_hello() {
  console.log("Hello World");
}

say_hello();
say_hello();
say_hello();
console.log("\n");

// 関数式
var hello = function say_hello() {
  console.log("Good Morning");
};

hello();
console.log("\n");

var hello = function () { // say_helloを省略できる
  console.log("Good Morning");
};

hello();
console.log("\n");

// 引数のある関数
function do_greeting(greeting) { // 仮引数
  console.log(greeting);
};

do_greeting("Good Afternoon"); // 実引数
console.log("\n");

function cal(x) {
  console.log(x * 3);
};

cal(6);
console.log("\n");

function calc(a, b) {
  console.log(a / b);
};

calc(6, 3);
console.log("\n");

// 戻り値のある関数
function divs(c, d) {
  return c / d;
};

var result = divs(10, 5);
console.log(result, "\n");

function add(e, f, g) {
  return e + f + g;
};

var added = add(10, 5, 8);
console.log(added, "\n");
