// In bảng cửu chương:

// let i = 2;
// let j = 1;
// for (let i = 2; i <= 10; i++) {
//   console.log("bảng cửu chương", i);
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + "x" + j + "=" + i * j);
//   }
// }

// Tính tổng các số từ 1 đến n:

// let N = parseInt(prompt("moi nhap so hang:"));
// for (let n = 1; n <= N; n++) {
//   let p = ((N + 1) / 2) * N;
//   console.log("tong cac so hang la:", p);
//   break;
// }

//in cac so chan le tu m den n:
// let m = parseInt(prompt("moi nhap so m"));
// let n = parseInt(prompt("moi nhap so n"));

// for (let a = m; a >= m, a <= n; a++) {
//   if (a % 2 === 0) {
//     console.log("so chan", a);
//   }
// }

// for (let a = m; a >= m, a <= n; a++) {
//   if (a % 2 !== 0) {
//     console.log("so le", a);
//   }
// }

//dao nguoc chuoi
// let myName = "Ngovanquy";
// let nameReverce = "";
// for (let i = myName.length - 1; i >= 0; i--) {
//   //   console.log(myName[i]);
//   //   console.log(myName.length);

//   nameReverce = nameReverce + myName[i];
// }
// console.log("chuoi dao nguoc:", nameReverce);

//in 20 so chuoi Fibonaci
// let a1 = 0;
// let a2 = 1;

// let a3 = a1 + a2;

// let FibonaciString = a1 + " " + a2 + " " + a2 + " ";
// for (let i = 2; i < 20; i++) {
//   a1 = a2;
//   a2 = a3;
//   a3 = a1 + a2;

//   FibonaciString = FibonaciString + a3 + " ";
// }
// console.log(FibonaciString);

// let count = "1";

// while(count<=20){
//     for(i = 1; i <= 3; i++){
//       for(c=(a1[i]+a2[i-1])){

//       }
//     }
//      //        a1     a2   a3
//     //   0      1     1    2    3     5    8    13    21
//     //  a1     a2    a3    a1   a2    a3   a1   a2    a3
//     //a3=a1+a2
//     //a2=a3+a1
//     //a1=a3+a2

// }
// count++;

//bai tap chia cho 3 va 5;
// let a = 1;

// for (let a = 1; a > 1, a < 100; a++) {
//   if (a % 3 === 0) {
//     console.log("fizz", a);
//   }
// }

// for (let a = 1; a > 1, a < 100; a++) {
//   if (a % 5 === 0) {
//     console.log("buzz", a);
//   }
// }
// for (let a = 1; a > 1, a < 100; a++) {
//   if (a % 3 === 0 && a % 5 === 0) {
//     console.log("fizzbuzz", a);
//   }
// }

//bai tap số hoàn hảoo:

let a = parseInt(prompt("moi nhap"));
let x = 0;
for (let b = 1; b < a; b++) {
  if (a % b === 0) {
    console.log(b);
    x += b;
  }
}

console.log("tong cac uoc cua a la :", x);
if (a == x) {
  console.log(`${a} la so hoan hao`);
} else {
  console.log(`${a} ko phai so hoan hao`);
}
