//! ********* FOR -LOOp *********
// Karar durumları gibi döngülerde günlük hayatta çok karşımıza çıkan yapılardır.
//Tekrarlı olan işlerde farklı türlerde döngülerden birini kullanabiliriz

//? FOR -LOOP
//? for (initialization,condition,increment/decrement){

//? }
//1 den 10 a kadar olan sayilari yazdiran program
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 10 dan baslayarak geriye dogru yazan program
console.log("10 dan geriye dogru");
for (let i = 10; i > 0; i--) {
  console.log(i);
}
// 1 den 10 kadar olan sayilarin programini bulan program

let toplam = 0;
for (let i = 1; i <= 100; i++) {
  //toplam = i + toplam;
  toplam += i;
}
console.log(toplam);
//  1 den 100 kadar olan cift sayilari toplayalim

let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) sum += i;
}
console.log(sum);

let ciftsayi = 0;
for (let i = 1; i <= 100; i++) {
  i % 2 === 0 ? (ciftsayi += i) : null;
}
console.log(ciftsayi);
// kullanicidan girilen sayinin faktörüyelini bulan program
// let sayi = +prompt("lütfen bir sayi giriniz:");
// let faktoryel = 1;
// for (let i = 1; i <= sayi; i++) {
//   faktoryel *= i;
// }
// console.log(faktoryel);

// console.clear();

// Amstrong Number  Bine kadar olan sayilardan basamaklarinin küplerini toplami

console.log("** AMSTRONG NUMBERS **");
for (let i = 0; i <= 1000; i++) {
  // 154

  let birler = i % 10;
  let onlar = Math.trunc(i / 10) % 10;
  let yuzler = Math.trunc(i / 100);

  let sayi = birler ** 3 + onlar ** 3 + yuzler ** 3;

  sayi === i ? console.log(`${i} sayısı bir amstrong sayıdır`) : null;
}
// 1 ile 1o arasinda rast gele secilen sayiyi kullanicinin  bulmasini isteyiniz

//for (i=1;i<=10)

// carim tablosu
for (let i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) console.log(`${i} x ${j}=${i * j}`);
}

// let counter = 0;
// let num = +prompt("sayi giriniz");
// for (let i = 2; i <= num; i++) {
//   if (num % i === 0) {
//     counter++;
//   }
// }
// if (counter === 0) {
//   console.log(`${num}  bir asal sayidir`);
// } else {
//   console.log(`${num} bir asal sayi degildir`);
// }

// 1 den 100 e kadar olan sayilarin asal sayilarini bulunuz
for (let x = 2; x <= 100; x++) {
  let counter = 0;
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      counter++;
    }
  }
}
console.log(`${x} bir asal sayidir`);
