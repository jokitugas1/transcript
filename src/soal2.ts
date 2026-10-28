// Soal 2: Deret Aritmatika dari NIM
// Angka awal = 2 digit terakhir NIM
// Beda (step) = digit ke-3 dari belakang + 1 (sesuai contoh soal)
import { NIM } from "./config";

export function ambilAwal(nim: string): number {
  return Number(nim.slice(-2));
}

export function ambilBeda(nim: string): number {
  return Number(nim.charAt(nim.length - 3)) + 1;
}

export function buatDeret(awal: number, beda: number, jumlah: number): number[] {
  const deret: number[] = [];
  // Rumus suku ke-n: Un = a + (n - 1) * b
  for (let n = 1; n <= jumlah; n++) {
    deret.push(awal + (n - 1) * beda);
  }
  return deret;
}

if (require.main === module) {
  const awal = ambilAwal(NIM);
  const beda = ambilBeda(NIM);
  console.log(`NIM                  : ${NIM}`);
  console.log(`Angka awal (a)       : ${awal}`);
  console.log(`Digit ke-3 belakang  : ${NIM.charAt(NIM.length - 3)}`);
  console.log(`Beda (b)             : ${beda}`);
  console.log(`Output: ${buatDeret(awal, beda, 10).join(", ")}`);
}
