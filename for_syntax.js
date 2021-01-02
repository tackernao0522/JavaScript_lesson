// 繰り返し(for)
for (var i = 0; i <= 4; i++) {
  console.log(i);
}
console.log("\n");

// break
for (var i = 0; i <= 4; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}
console.log("\n");

// continue
for (var i = 0; i <= 4; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
console.log("\n");

// nest of for
for (var i = 0; i <= 2; i++) {
  for (var j = 0; j <= 2; j++) {
    console.log(i + "-" + j);
  }
}
console.log("\n");

// 配列の中身を表示
var arr = [2, 4, 6, 8, 10];

for (var i = 0; i <= 4; i++) {
  console.log(arr[i]);
}
console.log("\n");

var arr = [2, 4, 6, 8, 10];
var sum = 0;

for (var i = 0; i <= 4; i++) {
  sum += arr[i];
}
console.log(sum, "\n");

// 確認問題
for (var i = 1; i <= 10; i++) {
  if (i == 3) {
    continue;
  } else if (i == 7) {
    break;
  } else {
    console.log(i);
  }
}
