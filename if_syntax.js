// if文
var age = 20;
if (age <= 20) {
  console.log('adult', "\n");
}

// if ~ else 文
var age = 18;

if (age >= 20) {
  console.log('adult', "\n");
} else {
  console.log('child', "\n");
}

// if ~ else if文
var age = 0;

if (age >= 20) {
  console.log("adult", "\n");
} else if (age == 0) {
  console.log("baby", "\n");
} else {
  console.log("child", "\n");
}

// 確認問題
var age = 43;

if (age >= 10 && age < 20) {
  console.log('10代');
} else if (age >= 20 && age < 30) {
  console.log('20代');
} else if (age >= 30 && age < 40) {
  console.log('30代');
} else {
  console.log('それ以外');
}
