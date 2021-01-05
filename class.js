// データ = プロパティ(クラス内で定義された変数のこと)
// 処理 = メソッド(クラス内で定義された関数のこと)

class Student {
  avg() { // functionを書かない
    console.log((80 + 70) / 2, "\n");
  }
}

var a001 = new Student(); // インスタンス化(a001のインスタンス)
a001.avg(); // メソッド呼び出し

// 引数付き
class Player {
  total_avg(score1, score2) {
    console.log((score1 + score2) / 2, "\n");
  }
}

var a002 = new Player();
a002.total_avg(60, 80);

// プロパティ
class Person {
  div_avg(height1, height2) {
    console.log((height1 + height2) / 2);
  }
}

var a003 = new Person();
a003.name = "Nakamura"; // プロパティの定義
a003.div_avg(170, 165);
console.log(a003.name, "\n");
console.log(a003.gender, "\n"); // 未定義のプロパティはundefinedとなる

var a004 = new Person();
console.log(a004.name, "\n"); // undefinedになる

// コンストラクタ(インスタンス化した時に呼び出されるメソッド)
class Animal {
  constructor(name) {
    this.name = name; // thisにインスタンスが代入される
  }
  avg(count1, count2) {
    console.log((count1 + count2) / 2, "\n");
  }
}

var a005 = new Animal("cat");
// a005.name = "cat";
// a005.avg(100, 50);
console.log(a005.name, "\n");

var a006 = new Animal("dog");
// a006.name = "dog";
console.log(a006.name, "\n"); // undefinedにはならず空の値が入る

// クラス式
var Car = class {
  constructor(name) { // コンストラクタ(初期化メソッド)
    this.name = name; // プロパティ
  }
  avg(count01, count02) {
    console.log((count01 + count02) / 2);
  }
};

var a007 = new Car("CR-X"); // インスタンス = クラス
console.log(a007.name, "\n");
a007.avg(100, 200); // メソッド

var a008 = new Car("CROWN");
console.log(a008.name, "\n");
