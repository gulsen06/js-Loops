// kontrol sonda yapıldığı için, en az bir defa işlem gerçekleşir.

// do {
//      çalıştırılacak kodlar
//   }
//   while(Koşul);

//? Kullanıcıdan vize ve final notlarını isteyen ve vizenin %40 ını finalin %60 ını alarak
//? notunu hesaplayan her işlem bittiğinde devam etmek isteyip istemediğini soran program
let islem = "";
let ort;
do {
  const vize = +prompt("vize notunu giriniz");
  const final = +prompt("finalize notunu giriniz");
  ort = (vize * 40) / 100 + (final * 60) / 100;
  console.log(ort);
  islem = prompt("devam etmek istermisiniz(e/E");
} while (islem === "e" || islem === "E");
