// Soal 3: Bilangan Prima dari NIM
// Batas akhir = 2 digit terakhir NIM + 10
import { NIM } from "./config";

export function ambilBatas(nim: string): number {
  return Number(nim.slice(-2)) + 10;
}

export function isPrima(n: number): boolean {
  // Bilangan prima adalah bilangan > 1 yang hanya habis dibagi 1 dan dirinya sendiri
  if (n < 2) return false;
  // Cukup cek pembagi sampai akar kuadrat dari n
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export function cariPrima(batas: number): number[] {
  const prima: number[] = [];
  for (let i = 1; i <= batas; i++) {
    if (isPrima(i)) prima.push(i);
  }
  return prima;
}

if (require.main === module) {
  const batas = ambilBatas(NIM);
  console.log(`NIM                 : ${NIM}`);
  console.log(`2 digit terakhir    : ${NIM.slice(-2)}`);
  console.log(`Batas akhir (+10)   : ${batas}`);
  console.log(`Output: ${cariPrima(batas).join(", ")}`);
}
