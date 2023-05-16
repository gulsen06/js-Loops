// For loop ile benzer şekilde sadece syntax farklılığı vardır.Birbirini yerine kullanılabilir

// genelde daha komplex bir şart durumu varsa o zaman kullanmak avantajlı olabilir

// while(Koşul) {
//      çalıştırılacak kodlar
//   }
// 1 den 10 a kadar olan sayilari yazdiran program
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//100 ile 200 arasinda  bir sayi girilene kadar isleme devam eden program

// let sayi = 100;
// while (sayi >= 100 && sayi <= 200) {
//   sayi = +prompt("100 ile 200 arasinda deger giriniz:");
// }
// console.log("100 ile 200 arasinda bir deger girmediniz");

// Kullanıcıdan 1-100 arasında not girmesini isteyen
// Farklı bir değer girerse 1-100 arasına not girene kadar zorlayan program

// let not = +prompt(" 1-100 arasında not giriniz");
// while (not <= 0 || not > 100) {
//   not = +prompt("1 ile 100 arasinda deger giriniz:");
// }

let x = 0;
while (x < 20) {
  console.log(x);
  x++;
  if (x >= 8) break;
}
