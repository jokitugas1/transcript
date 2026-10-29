# Naskah Video – Tugas Praktik 2 Struktur Data

> Durasi target ±10–12 menit (maks 15). Wajah terlihat.
> Tinggal dibaca sambil nunjuk ke kode / jalanin program.
> Yang ditulis **(layar: ...)** itu petunjuk apa yang ditampilkan, bukan dibaca.

---

## 1. PEMBUKAAN (±1 menit)
*(layar: wajah kamu)*

"Assalamualaikum / Halo, perkenalkan nama saya **Muhamad Hafizh Aliyuddin**, NIM **[isi NIM]**.

Pada video ini saya akan menjelaskan hasil Tugas Praktik 2 mata kuliah Struktur Data. Tugasnya ada dua, yaitu membuat program Java yang mengurutkan data dari **terbesar ke terkecil**: yang pertama menggunakan **Merge Sort**, dan yang kedua menggunakan **Counting Sort**. Semua saya tulis dalam satu file bernama `Tugas2.java`. Langsung saja kita mulai."

---

## 2. GAMBARAN UMUM PROGRAM (±1 menit)
*(layar: buka file Tugas2.java, scroll dari atas)*

"Ini file `Tugas2.java`. Di bagian `main`, saya siapkan dua kumpulan data.

Data pertama untuk Merge Sort isinya `38, 27, 43, 3, 9, 82, 10, 55`.
Data kedua untuk Counting Sort isinya `4, 2, 9, 7, 2, 5, 9, 1` — sengaja saya kasih angka kembar, yaitu dua angka 2 dan dua angka 9, supaya nanti kelihatan programnya tetap benar walau ada nilai yang sama.

Nanti setiap data akan diurutkan dari yang paling besar ke paling kecil."

---

## 3. MERGE SORT (±4 menit)
*(layar: scroll ke method mergeSort dan merge)*

"Sekarang kita bahas **Merge Sort**. Merge Sort itu memakai prinsip **Divide and Conquer**, artinya 'bagi lalu gabung'.

**Bagian membagi** ada di method `mergeSort` ini.
*(layar: tunjuk method mergeSort)*
Caranya: array dicari titik tengahnya, lalu dipanggil ulang untuk bagian kiri dan bagian kanan. Pemanggilan ini terjadi berulang-ulang sampai setiap bagian tinggal **satu elemen**. Kenapa satu elemen? Karena data yang cuma satu angka itu pasti sudah terurut.

Jadi misalnya data `[38, 27, 43, 3, ...]` dipecah terus jadi `[38]`, `[27]`, `[43]`, `[3]`, dan seterusnya satu-satu.

**Bagian menggabung** ada di method `merge` ini.
*(layar: tunjuk method merge, khususnya baris `if (L[i] >= R[j])`)*
Di sini dua bagian kecil digabung lagi jadi satu sambil diurutkan. Saya membandingkan elemen depan bagian kiri `L[i]` dengan elemen depan bagian kanan `R[j]`.

Nah ini kuncinya: karena saya mau urutan dari **besar ke kecil**, saya pakai tanda `L[i] >= R[j]`, artinya yang **lebih besar diambil duluan**. Kalau seandainya mau urutan kecil ke besar, tinggal diubah jadi tanda lebih kecil.

Begitu seterusnya sampai semua bagian tergabung kembali menjadi satu array yang sudah terurut menurun.

**Soal kinerjanya**, Merge Sort punya kompleksitas waktu **O(n log n)**. Kenapa? Karena proses membagi array sampai habis itu butuh sekitar **log n** tingkat, dan di setiap tingkat proses menggabungnya menyentuh semua **n** elemen. Jadi n dikali log n.

Kelebihannya, kecepatan Merge Sort **stabil di O(n log n)** untuk semua kondisi data, entah datanya sudah hampir urut atau acak total. Kekurangannya, dia butuh **memori tambahan** karena saat menggabung kita bikin array sementara. Menurut saya Merge Sort ini cocok untuk data yang jumlahnya besar."

---

## 4. COUNTING SORT (±4 menit)
*(layar: scroll ke method countingSort)*

"Berikutnya **Counting Sort**. Yang menarik, Counting Sort ini **tidak membandingkan angka satu per satu** seperti Merge Sort tadi. Dia bekerja dengan cara **menghitung** berapa kali setiap angka muncul.

*(layar: tunjuk baris cari max)*
**Langkah pertama**, saya cari nilai terbesar dari data, supaya tahu seberapa besar wadah hitungan yang perlu disiapkan.

*(layar: tunjuk array count dan loop `count[x]++`)*
**Langkah kedua**, saya buat array bernama `count` untuk mencatat frekuensi. Setiap angka pada data, kotak hitungannya ditambah satu. Jadi misalnya angka 9 muncul dua kali, maka `count` di posisi 9 bernilai 2. Angka 2 juga muncul dua kali.

*(layar: tunjuk loop `for (int nilai = max; nilai >= 0; nilai--)`)*
**Langkah ketiga**, saya susun hasilnya. Di sinilah kunci urutan besar ke kecil: saya baca kotak hitungan **mulai dari nilai paling besar turun ke nol**. Selama angka itu masih punya jumlah, saya masukkan ke array hasil, lalu jumlahnya saya kurangi satu. Karena saya mulainya dari angka terbesar, otomatis hasilnya tersusun dari besar ke kecil.

**Soal kinerjanya**, Counting Sort punya kompleksitas **O(n + k)**, di mana n jumlah data dan k rentang nilainya. Ini **sangat cepat**, bahkan bisa lebih cepat dari Merge Sort, karena tidak ada proses bandingkan antar elemen.

Tapi ada syaratnya: Counting Sort hanya efisien kalau datanya **bilangan bulat dan rentang nilainya tidak terlalu besar**. Kalau angkanya ada yang sampai jutaan, wadah hitungannya jadi kebesaran dan malah boros memori. Menurut saya Counting Sort cocok untuk data seperti nilai ujian atau umur yang rentangnya kecil."

---

## 5. MENJALANKAN PROGRAM (±1,5 menit)
*(layar: buka terminal)*

"Sekarang saya jalankan programnya. Pertama saya compile dengan perintah `javac Tugas2.java`, lalu saya jalankan dengan `java Tugas2`."

*(layar: ketik dan jalankan)*
```
javac Tugas2.java
java Tugas2
```

"Dan ini hasilnya.
*(layar: tunjuk output)*
Untuk Merge Sort, data awal `38, 27, 43, 3, 9, 82, 10, 55` berubah menjadi `82, 55, 43, 38, 27, 10, 9, 3` — benar, dari besar ke kecil.

Untuk Counting Sort, data awal `4, 2, 9, 7, 2, 5, 9, 1` menjadi `9, 9, 7, 5, 4, 2, 2, 1`. Angka kembarnya, dua angka 9 dan dua angka 2, juga ikut terurut dengan benar."

---

## 6. PENUTUP (±1 menit)
*(layar: wajah kamu)*

"Jadi kesimpulannya, kedua algoritma sama-sama berhasil mengurutkan data dari besar ke kecil, tapi caranya berbeda. **Merge Sort** bekerja dengan membagi lalu menggabung, kecepatannya **O(n log n)** dan cocok untuk data apa pun. **Counting Sort** bekerja dengan menghitung frekuensi, kecepatannya **O(n + k)** yang lebih cepat, tapi hanya cocok untuk bilangan bulat dengan rentang kecil.

Demikian penjelasan dari saya. Terima kasih. Wassalamualaikum / Sekian."
```
```
