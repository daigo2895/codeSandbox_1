// var val1 = 'val変数';
// console.log(val1);
// val1 = '上書きしました';
// console.log(val1);

// let val1 = "val変数";
// console.log(val1);

// val1 = 'うわがきしたよ';
// console.log(val1);

// let val1 = '再せんげgんしたいです。';
// console.log(val1);

// const val3 = '定数だよ〜';
// console.log(val3);

// val3 = 'え！？上書きできないの？？';
// console.log(val3);

// const val4 = {
//   name: 'DGO',
//   age: 27,
// };

// console.log(val4.name);
// val4.name = '大ゴ';
// console.log(val4.name);
// console.log(val4);
// val4.born = '愛媛';
// console.log(val4);

// const val5 = ['dog', 'cat'];
// console.log(val5);
// val5[0] = 'bard';
// console.log(val5);
// val5.push('monkey');

// const name = '大吾';
// const age = 27;

// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

//従来の関数
// function funk1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str2) => {
//   return str2;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// const myProfile = {
//   name: "大吾",
//   age: 27
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前はね、${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['大吾', 27];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}ですよ。年齢は${age}歳です`;
// console.log(message4);

// const sayHello = (name = 'ゲスト') => {
//   console.log(`こんにちは!${name}さん!`)
// }

// sayHello('大吾');

//スプレッド構文 ...(ドット3つ)
//配列の展開
// const arr1 = [1, 3,];
// // console.log(arr1);
// // //(2)[1, 2]
// // console.log(...arr1);
// // //1 2

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };

// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
// console.log(arr5);

// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// const [...arr8] = arr2;
// console.log(arr8);
//mapやfilterを使った配列の処理
// const nameArr = ['田中', '山田', '久保'];
// for(let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}さんです`));
//filter(ある条件に一致したものだけ配列化)
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);
// const newNameArr = nameArr.map((name) => {
//   if(name === '久保') {
//     return name;
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

//三項演算子

//ある条件 ? 条件がtrueのとき ： 条件がfalseのとき
// const val1 = 1 > 2 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = '1300';
// console.log(num.toLocaleString());

// // const daigo = [1000, 'だいごだよ', 2000, 'ゆいだよ'];
// // daigo.map((arr) => {
// //   arr === num ? arr.toLocaleString() :
// // })

// const formattedNum = typeof num ==='number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(40, 50));

//論理演算子の本当の意味を知ろう　→　&& ||
// const flag1 = true;
// const flag2 = true;
// if(flag1 || flag2) {
//   console.log('1か2はtrueになります');
// }
// if(flag1 && flag2) {
//   console.log('1も2もtrueになります');
// }

// || は左側がfalseとなるとき右を返す
// const num = 100;
// const fee = num || '金額未設定です';
// console.log(fee);

// || は左側がtrueとなるとき右を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
