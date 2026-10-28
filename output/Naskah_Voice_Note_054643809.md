# Naskah Voice Note / Video Praktikum

> Bacakan dengan santai, tidak perlu terburu-buru. Teks dalam [kurung siku] adalah petunjuk tampilan layar, tidak perlu dibaca.
> Perkiraan durasi: 5–7 menit.

---

## 1. Perkenalan Identitas

Assalamualaikum warahmatullahi wabarakatuh, selamat pagi/siang Bapak/Ibu dosen.

Perkenalkan, nama saya **Diananda Ajeng F.P**, NIM **054643809**, dari program studi **Sistem Informasi**, Universitas Terbuka.

Pada video ini saya akan menjelaskan hasil praktikum mata kuliah Pemrograman berbasis perangkat bergerak, yaitu membuat tiga program TypeScript yang memakai NIM saya sebagai data masukan: pola segitiga, deret aritmatika, dan bilangan prima.

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

Untuk soal pertama, tinggi segitiga diambil dari digit terakhir NIM. NIM saya 054643809, digit terakhirnya **9**, jadi tingginya 9.

Di kode ini saya pakai dua perulangan for. Perulangan luar menentukan baris, dari 1 sampai 9. Perulangan dalam mengisi angka dari 1 sampai nomor barisnya. Jadi baris pertama isinya 1, baris kedua 1 2, dan seterusnya.

[Jalankan: npx tsx src/soal1.ts]

Hasilnya seperti ini. Terbentuk segitiga 9 baris, dan baris terakhir berisi angka 1 sampai 9. Hasil ini sudah sesuai dengan pola di soal.

### Soal 2 – Deret Aritmatika

[Tampilkan src/soal2.ts]

Untuk soal kedua, angka awal diambil dari 2 digit terakhir NIM, yaitu **9**. Bedanya diambil dari digit ke-3 dari belakang, yaitu 8, lalu ditambah 1 sesuai contoh soal, jadi bedanya **9**.

Saya memakai rumus deret aritmatika: **U n sama dengan a ditambah n kurang satu, dikali b**. Rumus ini dijalankan di dalam perulangan dari suku ke-1 sampai suku ke-10.

Penambahan 1 pada beda juga berguna supaya deret tidak diam di angka yang sama kalau digitnya nol.

[Jalankan: npx tsx src/soal2.ts]

Hasilnya: **9, 18, 27, 36, 45, 54, 63, 72, 81, 90**. Selisih setiap angka tetap 9, jadi deretnya sudah benar.

### Soal 3 – Bilangan Prima

[Tampilkan src/soal3.ts]

Untuk soal ketiga, batas akhirnya 2 digit terakhir NIM ditambah 10. Jadi 9 ditambah 10 hasilnya **19**.

Saya membuat fungsi **isPrima**. Bilangan di bawah 2 langsung dianggap bukan prima. Untuk bilangan lainnya, program mengecek apakah bilangan itu habis dibagi angka 2 sampai akar kuadratnya. Kalau ada yang habis membagi, berarti bukan prima.

Kenapa cukup sampai akar kuadrat? Karena kalau ada pembagi yang lebih besar dari akar, pasangannya pasti lebih kecil dan sudah dicek lebih dulu. Jadi programnya lebih cepat.

[Jalankan: npx tsx src/soal3.ts]

Hasilnya ada **8 bilangan prima**, yaitu: **2, 3, 5, 7, 11, 13, 17, 19**.

---

## 4. Kata Penutup

Jadi dari praktikum ini, saya belajar cara mengambil digit NIM dengan method string seperti charAt dan slice, lalu memakainya dalam perulangan dan logika matematika di TypeScript. Ketiga program sudah berjalan dan hasilnya sesuai dengan ketentuan soal.

Sekian penjelasan dari saya. Mohon maaf apabila ada kekurangan, dan saya mengharapkan masukan dari Bapak/Ibu dosen.

Terima kasih. Wassalamualaikum warahmatullahi wabarakatuh.
