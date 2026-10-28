// Membuat laporan praktikum (.docx) dan naskah voice note (.md)
// dari kode dan output program yang sebenarnya.
import * as fs from "fs";
import * as path from "path";
import {
  AlignmentType,
  BorderStyle,
  Document,
  HeadingLevel,
  LevelFormat,
  Packer,
  PageBreak,
  Paragraph,
  ShadingType,
  TextRun,
} from "docx";
import { NAMA, NIM, PRODI, MATA_KULIAH } from "../src/config";
import { buatSegitiga } from "../src/soal1";
import { ambilAwal, ambilBeda, buatDeret } from "../src/soal2";
import { ambilBatas, cariPrima } from "../src/soal3";

const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "output");

// ---------- Data hasil program ----------
const tinggi = Number(NIM.charAt(NIM.length - 1));
const segitiga = buatSegitiga(NIM);
const awal = ambilAwal(NIM);
const digitKe3 = NIM.charAt(NIM.length - 3);
const beda = ambilBeda(NIM);
const deret = buatDeret(awal, beda, 10);
const batas = ambilBatas(NIM);
const prima = cariPrima(batas);

const bacaKode = (file: string) =>
  fs.readFileSync(path.join(ROOT, "src", file), "utf8").trimEnd().split("\n");

// ---------- Komponen dokumen ----------
const FONT = "Times New Roman";
const MONO = "Consolas";

const p = (text: string, opts: { bold?: boolean; center?: boolean; size?: number } = {}) =>
  new Paragraph({
    alignment: opts.center ? AlignmentType.CENTER : AlignmentType.JUSTIFIED,
    spacing: { after: 120, line: 360 },
    children: [new TextRun({ text, bold: opts.bold, size: opts.size })],
  });

const h1 = (text: string) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(text)] });
const h2 = (text: string) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] });

const bullet = (text: string) =>
  new Paragraph({ numbering: { reference: "bullet", level: 0 }, spacing: { after: 60 }, children: [new TextRun(text)] });

let numberedRef = 0;
const numbered = (items: string[]) => {
  const ref = `num${numberedRef++}`;
  numberingConfigs.push({
    reference: ref,
    levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 720, hanging: 360 } } } }],
  });
  return items.map(
    (t) => new Paragraph({ numbering: { reference: ref, level: 0 }, spacing: { after: 60 }, children: [new TextRun(t)] })
  );
};

const label = (key: string, value: string) =>
  new Paragraph({
    spacing: { after: 60 },
    tabStops: [{ type: "left", position: 2200 }],
    children: [new TextRun({ text: key, bold: true }), new TextRun(`\t: ${value}`)],
  });

// Blok kode / output: baris monospace dengan latar abu-abu dan garis tepi
const blok = (lines: string[], warna = "F2F2F2") => {
  const border = { style: BorderStyle.SINGLE, size: 4, color: "BFBFBF", space: 4 };
  return lines.map(
    (line, i) =>
      new Paragraph({
        shading: { type: ShadingType.CLEAR, fill: warna, color: "auto" },
        border: {
          left: border,
          right: border,
          top: i === 0 ? border : undefined,
          bottom: i === lines.length - 1 ? border : undefined,
        },
        spacing: { after: 0, line: 240 },
        children: [new TextRun({ text: line.replace(/\t/g, "  ") || " ", font: MONO, size: 18 })],
      })
  );
};

const spasi = () => new Paragraph({ spacing: { after: 120 }, children: [] });

const numberingConfigs: any[] = [
  {
    reference: "bullet",
    levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 720, hanging: 360 } } } }],
  },
];

// ---------- Isi laporan ----------
const sampul = [
  new Paragraph({ spacing: { before: 1800 }, children: [] }),
  p("LAPORAN PRAKTIKUM", { bold: true, center: true, size: 36 }),
  p(MATA_KULIAH.toUpperCase(), { bold: true, center: true, size: 28 }),
  spasi(),
  p("Pemrograman TypeScript Berbasis NIM:", { center: true, size: 24 }),
  p("Pola Segitiga, Deret Aritmatika, dan Bilangan Prima", { center: true, size: 24 }),
  new Paragraph({ spacing: { before: 1800 }, children: [] }),
  p("Disusun oleh:", { center: true }),
  p(NAMA, { bold: true, center: true }),
  p(`NIM ${NIM}`, { bold: true, center: true }),
  p(`Program Studi ${PRODI}`, { center: true }),
  new Paragraph({ spacing: { before: 1800 }, children: [] }),
  p("UNIVERSITAS TERBUKA", { bold: true, center: true, size: 28 }),
  p(String(new Date().getFullYear()), { bold: true, center: true }),
  new Paragraph({ children: [new PageBreak()] }),
];

const pendahuluan = [
  h1("A. Identitas Mahasiswa"),
  label("Nama", NAMA),
  label("NIM", NIM),
  label("Program Studi", PRODI),
  label("Mata Kuliah", MATA_KULIAH),
  spasi(),

  h1("B. Tujuan Praktikum"),
  bullet("Memahami penggunaan tipe data, fungsi, dan perulangan dalam TypeScript."),
  bullet("Mengolah digit NIM sebagai data masukan program menggunakan operasi string."),
  bullet("Menerapkan logika perulangan bersarang, rumus deret aritmatika, dan pengecekan bilangan prima."),
  spasi(),

  h1("C. Alat dan Bahan"),
  bullet("Laptop dengan sistem operasi Windows/Linux."),
  bullet("Visual Studio Code sebagai editor kode."),
  bullet("Node.js versi 22 sebagai runtime JavaScript."),
  bullet("TypeScript 5 dan tsx untuk menjalankan file .ts secara langsung."),
  spasi(),

  h1("D. Langkah-langkah Praktikum"),
  ...numbered([
    "Membuat folder proyek baru, lalu menjalankan perintah npm init -y untuk membuat file package.json.",
    "Memasang TypeScript dan tsx dengan perintah npm install -D typescript tsx @types/node.",
    "Membuat file tsconfig.json untuk mengatur kompilasi TypeScript (mode strict aktif).",
    "Membuat file src/config.ts yang berisi NIM, sehingga ketiga program memakai satu sumber data yang sama.",
    "Menulis program Soal 1 (src/soal1.ts), Soal 2 (src/soal2.ts), dan Soal 3 (src/soal3.ts).",
    "Memeriksa kesalahan tipe dengan perintah npx tsc --noEmit.",
    "Menjalankan setiap program dengan perintah npx tsx src/soal1.ts, npx tsx src/soal2.ts, dan npx tsx src/soal3.ts, lalu mencatat hasilnya.",
  ]),
  spasi(),
  p("Isi file konfigurasi NIM (src/config.ts):"),
  ...blok(bacaKode("config.ts")),
  new Paragraph({ children: [new PageBreak()] }),
];

const soal1 = [
  h1("E. Soal 1 – Pola Segitiga dari NIM"),
  h2("1. Analisis Soal"),
  p(`Tinggi segitiga diambil dari digit terakhir NIM. NIM saya adalah ${NIM}, sehingga digit terakhirnya ${tinggi} dan tinggi segitiga = ${tinggi}. Setiap baris ke-n menampilkan angka 1 sampai n.`),
  h2("2. Kode Program"),
  ...blok(bacaKode("soal1.ts")),
  spasi(),
  h2("3. Hasil Output"),
  ...blok(["$ npx tsx src/soal1.ts", `NIM            : ${NIM}`, `Digit terakhir : ${tinggi} (tinggi segitiga)`, "Hasil:", ...segitiga], "E8F0FE"),
  spasi(),
  h2("4. Analisa"),
  p("Program memakai dua perulangan for bersarang. Perulangan luar (variabel baris) berjalan dari 1 sampai tinggi dan menentukan jumlah baris. Perulangan dalam (variabel kolom) berjalan dari 1 sampai nilai baris, sehingga setiap baris memiliki jumlah angka yang sama dengan nomor barisnya. Angka di setiap baris disimpan ke array lalu digabung dengan spasi menggunakan join(\" \")."),
  p(`Digit terakhir NIM diambil dengan nim.charAt(nim.length - 1) lalu diubah menjadi angka dengan Number(). Output yang dihasilkan sesuai dengan pola pada soal, yaitu ${tinggi} baris dengan baris terakhir berisi angka 1 sampai ${tinggi}.`),
  new Paragraph({ children: [new PageBreak()] }),
];

const soal2 = [
  h1("F. Soal 2 – Deret Aritmatika dari NIM"),
  h2("1. Analisis Soal"),
  p(`Angka awal deret (a) diambil dari 2 digit terakhir NIM, yaitu ${NIM.slice(-2)}, sehingga a = ${awal}. Beda (b) diambil dari digit ke-3 dari belakang, yaitu ${digitKe3}, lalu ditambah 1 sesuai contoh pada soal, sehingga b = ${digitKe3} + 1 = ${beda}. Program mencetak 10 suku pertama.`),
  h2("2. Kode Program"),
  ...blok(bacaKode("soal2.ts")),
  spasi(),
  h2("3. Hasil Output"),
  ...blok([
    "$ npx tsx src/soal2.ts",
    `NIM                  : ${NIM}`,
    `Angka awal (a)       : ${awal}`,
    `Digit ke-3 belakang  : ${digitKe3}`,
    `Beda (b)             : ${beda}`,
    `Output: ${deret.join(", ")}`,
  ], "E8F0FE"),
  spasi(),
  h2("4. Analisa"),
  p("Program menggunakan rumus suku ke-n deret aritmatika, yaitu Un = a + (n − 1) × b, di dalam perulangan for dari n = 1 sampai n = 10. Dua digit terakhir NIM diambil dengan nim.slice(-2), sedangkan digit ke-3 dari belakang diambil dengan nim.charAt(nim.length - 3)."),
  p(`Penambahan 1 pada beda mengikuti contoh soal (0 + 1 = 1). Penambahan ini juga mencegah deret menjadi konstan apabila digit ke-3 dari belakang bernilai 0. Hasil yang diperoleh adalah ${deret.join(", ")}, dengan selisih antarsuku tetap sebesar ${beda}.`),
  new Paragraph({ children: [new PageBreak()] }),
];

const soal3 = [
  h1("G. Soal 3 – Bilangan Prima dari NIM"),
  h2("1. Analisis Soal"),
  p(`Batas akhir pencarian adalah 2 digit terakhir NIM ditambah 10. Dua digit terakhir NIM saya adalah ${NIM.slice(-2)}, sehingga batas akhir = ${Number(NIM.slice(-2))} + 10 = ${batas}. Program menampilkan semua bilangan prima dari 1 sampai ${batas}.`),
  h2("2. Kode Program"),
  ...blok(bacaKode("soal3.ts")),
  spasi(),
  h2("3. Hasil Output"),
  ...blok([
    "$ npx tsx src/soal3.ts",
    `NIM                 : ${NIM}`,
    `2 digit terakhir    : ${NIM.slice(-2)}`,
    `Batas akhir (+10)   : ${batas}`,
    `Output: ${prima.join(", ")}`,
  ], "E8F0FE"),
  spasi(),
  h2("4. Analisa"),
  p("Fungsi isPrima() mengembalikan false untuk bilangan kurang dari 2, karena 0 dan 1 bukan bilangan prima. Untuk bilangan lainnya, program mengecek apakah bilangan tersebut habis dibagi oleh angka 2 sampai akar kuadratnya (kondisi i * i <= n). Jika ada pembagi, bilangan tersebut bukan prima."),
  p(`Pengecekan sampai akar kuadrat sudah cukup, karena jika n memiliki pembagi lebih besar dari √n, pasangannya pasti lebih kecil dari √n dan sudah dicek lebih dulu. Cara ini membuat program lebih efisien. Fungsi cariPrima() memeriksa setiap angka dari 1 sampai ${batas} dan menghasilkan ${prima.length} bilangan prima: ${prima.join(", ")}.`),
  new Paragraph({ children: [new PageBreak()] }),
];

const penutup = [
  h1("H. Kesimpulan"),
  bullet("Digit NIM dapat diolah dengan method string charAt() dan slice(), lalu diubah menjadi angka dengan Number()."),
  bullet("Perulangan for bersarang dapat digunakan untuk membuat pola segitiga angka."),
  bullet("Deret aritmatika dapat dibuat dengan rumus Un = a + (n − 1) × b di dalam perulangan."),
  bullet("Bilangan prima dapat dicek secara efisien dengan mencari pembagi hanya sampai akar kuadrat bilangan."),
  bullet("Ketiga program berhasil dijalankan dan menghasilkan output yang sesuai dengan ketentuan soal."),
  spasi(),

  h1("I. Link Rekaman Video"),
  p("Link video: [tempel link video di sini]"),
  p("Video berisi perkenalan identitas mahasiswa, langkah-langkah praktik, hasil dan analisa praktik, serta kata penutup."),
  spasi(),

  h1("J. Penutup"),
  p("Demikian laporan praktikum ini saya susun. Melalui praktikum ini saya belajar cara mengubah data sederhana seperti NIM menjadi masukan program, serta menerapkan perulangan dan logika matematika dalam TypeScript. Saya menyadari laporan ini masih memiliki kekurangan, sehingga saya mengharapkan kritik dan saran dari Bapak/Ibu dosen. Terima kasih."),
];

const doc = new Document({
  creator: NAMA,
  title: `Laporan Praktikum TypeScript - ${NIM}`,
  styles: {
    default: { document: { run: { font: FONT, size: 24 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: FONT }, paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: FONT }, paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 1 } },
    ],
  },
  numbering: { config: numberingConfigs },
  sections: [
    {
      properties: { page: { margin: { top: 1701, bottom: 1701, left: 2268, right: 1701 } } },
      children: [...sampul, ...pendahuluan, ...soal1, ...soal2, ...soal3, ...penutup],
    },
  ],
});

// ---------- Naskah voice note ----------
const naskah = `# Naskah Voice Note / Video Praktikum

> Bacakan dengan santai, tidak perlu terburu-buru. Teks dalam [kurung siku] adalah petunjuk tampilan layar, tidak perlu dibaca.
> Perkiraan durasi: 5–7 menit.

---

## 1. Perkenalan Identitas

Assalamualaikum warahmatullahi wabarakatuh, selamat pagi/siang Bapak/Ibu dosen.

Perkenalkan, nama saya **${NAMA}**, NIM **${NIM}**, dari program studi **${PRODI}**, Universitas Terbuka.

Pada video ini saya akan menjelaskan hasil praktikum mata kuliah ${MATA_KULIAH}, yaitu membuat tiga program TypeScript yang memakai NIM saya sebagai data masukan: pola segitiga, deret aritmatika, dan bilangan prima.

---

## 2. Langkah-langkah Praktik

[Tampilkan VS Code dan terminal]

Pertama, saya membuat folder proyek baru, lalu menjalankan perintah **npm init -y** untuk membuat file package.json.

Kedua, saya memasang TypeScript dan tsx dengan perintah **npm install -D typescript tsx**. tsx ini berguna supaya file TypeScript bisa langsung dijalankan tanpa harus dikompilasi manual.

[Tampilkan file src/config.ts]

Ketiga, saya membuat file **config.ts** yang berisi NIM saya. Jadi ketiga program mengambil NIM dari satu tempat yang sama. Kalau NIM-nya diganti, semua hasil ikut berubah.

Setelah itu saya menulis tiga file program: soal1, soal2, dan soal3. Sebelum dijalankan, saya cek dulu dengan **npx tsc --noEmit** untuk memastikan tidak ada kesalahan tipe data.

---

## 3. Hasil dan Analisa

### Soal 1 – Pola Segitiga

[Tampilkan src/soal1.ts]

Untuk soal pertama, tinggi segitiga diambil dari digit terakhir NIM. NIM saya ${NIM}, digit terakhirnya **${tinggi}**, jadi tingginya ${tinggi}.

Di kode ini saya pakai dua perulangan for. Perulangan luar menentukan baris, dari 1 sampai ${tinggi}. Perulangan dalam mengisi angka dari 1 sampai nomor barisnya. Jadi baris pertama isinya 1, baris kedua 1 2, dan seterusnya.

[Jalankan: npx tsx src/soal1.ts]

Hasilnya seperti ini. Terbentuk segitiga ${tinggi} baris, dan baris terakhir berisi angka 1 sampai ${tinggi}. Hasil ini sudah sesuai dengan pola di soal.

### Soal 2 – Deret Aritmatika

[Tampilkan src/soal2.ts]

Untuk soal kedua, angka awal diambil dari 2 digit terakhir NIM, yaitu **${awal}**. Bedanya diambil dari digit ke-3 dari belakang, yaitu ${digitKe3}, lalu ditambah 1 sesuai contoh soal, jadi bedanya **${beda}**.

Saya memakai rumus deret aritmatika: **U n sama dengan a ditambah n kurang satu, dikali b**. Rumus ini dijalankan di dalam perulangan dari suku ke-1 sampai suku ke-10.

Penambahan 1 pada beda juga berguna supaya deret tidak diam di angka yang sama kalau digitnya nol.

[Jalankan: npx tsx src/soal2.ts]

Hasilnya: **${deret.join(", ")}**. Selisih setiap angka tetap ${beda}, jadi deretnya sudah benar.

### Soal 3 – Bilangan Prima

[Tampilkan src/soal3.ts]

Untuk soal ketiga, batas akhirnya 2 digit terakhir NIM ditambah 10. Jadi ${Number(NIM.slice(-2))} ditambah 10 hasilnya **${batas}**.

Saya membuat fungsi **isPrima**. Bilangan di bawah 2 langsung dianggap bukan prima. Untuk bilangan lainnya, program mengecek apakah bilangan itu habis dibagi angka 2 sampai akar kuadratnya. Kalau ada yang habis membagi, berarti bukan prima.

Kenapa cukup sampai akar kuadrat? Karena kalau ada pembagi yang lebih besar dari akar, pasangannya pasti lebih kecil dan sudah dicek lebih dulu. Jadi programnya lebih cepat.

[Jalankan: npx tsx src/soal3.ts]

Hasilnya ada **${prima.length} bilangan prima**, yaitu: **${prima.join(", ")}**.

---

## 4. Kata Penutup

Jadi dari praktikum ini, saya belajar cara mengambil digit NIM dengan method string seperti charAt dan slice, lalu memakainya dalam perulangan dan logika matematika di TypeScript. Ketiga program sudah berjalan dan hasilnya sesuai dengan ketentuan soal.

Sekian penjelasan dari saya. Mohon maaf apabila ada kekurangan, dan saya mengharapkan masukan dari Bapak/Ibu dosen.

Terima kasih. Wassalamualaikum warahmatullahi wabarakatuh.
`;

fs.mkdirSync(OUT_DIR, { recursive: true });
const docxPath = path.join(OUT_DIR, `Laporan_Praktikum_${NIM}.docx`);
const naskahPath = path.join(OUT_DIR, `Naskah_Voice_Note_${NIM}.md`);

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(docxPath, buf);
  fs.writeFileSync(naskahPath, naskah);
  console.log(`Laporan dibuat : ${path.relative(ROOT, docxPath)}`);
  console.log(`Naskah dibuat  : ${path.relative(ROOT, naskahPath)}`);
});
