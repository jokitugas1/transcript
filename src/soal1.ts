// Soal 1: Pola Segitiga dari NIM
// Tinggi segitiga = digit terakhir NIM
import { NIM } from "./config";

export function buatSegitiga(nim: string): string[] {
  const tinggi: number = Number(nim.charAt(nim.length - 1));
  const hasil: string[] = [];

  // Perulangan luar: menentukan baris ke-1 sampai baris ke-tinggi
  for (let baris = 1; baris <= tinggi; baris++) {
    const angka: number[] = [];
    // Perulangan dalam: mengisi angka 1 sampai nomor baris
    for (let kolom = 1; kolom <= baris; kolom++) {
      angka.push(kolom);
    }
    hasil.push(angka.join(" "));
  }

  return hasil;
}

if (require.main === module) {
  const tinggi = Number(NIM.charAt(NIM.length - 1));
  console.log(`NIM            : ${NIM}`);
  console.log(`Digit terakhir : ${tinggi} (tinggi segitiga)`);
  console.log("Hasil:");
  if (tinggi === 0) {
    console.log("Digit terakhir 0, segitiga tidak memiliki baris.");
  }
  buatSegitiga(NIM).forEach((baris) => console.log(baris));
}
