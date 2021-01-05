class Student {
  constructor(name) {
    this.name = name; // プロパティ
  }

  cal_avg(data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += data[i];
    }
    var avg = sum / data.length;
    return avg;
  }

  judge(avg) {
    var result;
    if (60 <= avg) {
      result = "passed";
    } else {
      retult = "failed";
    }
    return result;
  }
}

var a001 = new Student("佐藤"); // インスタンス化してconstructorメソッドの引数に佐藤が代入される
var data = [70, 65, 50, 90, 30]; // 変数dataにこれらの数字配列が代入される
var avg = a001.cal_avg(data); // cal_avgメソッドを呼び出しその引数にはdataの配列が渡される returnでavgの結果が返ってくる
var result = a001.judge(avg); // judgeメソッドを呼び出し resultの結果が返ってくる

console.log(data.length); // 配列の要素数
console.log(a001.name); // Studentクラスのインスタンスのname = "佐藤"
console.log(avg); // 平均
console.log(result); // 結果
