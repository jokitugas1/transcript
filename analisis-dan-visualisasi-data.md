# Naskah Narasi Video – Tugas 3 Analisis dan Visualisasi Data (MSIM4310)

Perkiraan durasi: 6–8 menit. Teks dalam [kurung siku] adalah petunjuk tindakan di layar, tidak perlu dibacakan.

---

## 1. Pembukaan (±30 detik)
[Wajah terlihat jelas di kamera]

"Assalamualaikum warahmatullahi wabarakatuh, selamat pagi/siang/malam Bapak/Ibu tutor.
Perkenalkan, nama saya Muhamad Hafizh Aliyuddin, NIM ………, dari Program Studi Sistem Informasi.
Pada video ini saya akan mempresentasikan Tugas Tutorial 3 mata kuliah Analisis dan Visualisasi Data, kode MSIM4310."

## 2. Penjelasan singkat tugas (±45 detik)
[Tampilkan soal di PDF laporan]

"Tugas ini meminta kita membuat aplikasi visualisasi data interaktif menggunakan Shiny di bahasa R.
Di aplikasi tersebut, pengguna harus bisa memilih dua hal: pertama, variabel yang ingin divisualisasikan, dan kedua, jenis tampilannya, yaitu scatter plot interaktif, line plot interaktif, bar plot interaktif, dan tabel data.

Dataset yang digunakan adalah data cuaca harian dari file Excel, berisi 366 hari pengamatan dengan 22 variabel. Ada variabel angka seperti suhu minimum, suhu maksimum, curah hujan, dan kelembapan, serta variabel kategori seperti arah angin dan apakah besok hujan atau tidak."

## 3. Penjelasan kode program (±1,5–2 menit)
[Buka app.R di RStudio, scroll pelan-pelan sesuai bagian yang dijelaskan]

"Programnya saya tulis dalam satu file bernama app.R, yang terbagi menjadi lima bagian.

Bagian pertama, memuat library: shiny untuk membuat aplikasi web, readxl untuk membaca Excel, dplyr untuk mengolah data, ggplot2 untuk membuat grafik, plotly agar grafiknya interaktif, dan DT untuk tabel interaktif.

Bagian kedua, membaca dan membersihkan data. Saat dibaca, beberapa kolom angka ternyata terbaca sebagai teks karena ada sel bertuliskan 'NA'. Jadi saya ubah 'NA' menjadi data kosong, kolom angka saya ubah ke numerik, dan kolom kategori saya ubah ke faktor. Saya juga menambahkan kolom Hari, nomor 1 sampai 366, karena dataset ini tidak punya kolom tanggal. Kolom ini nanti dipakai di line plot.

Bagian ketiga adalah UI atau tampilan. Di panel kiri ada pilihan jenis tampilan menggunakan radioButtons, dan di bawahnya ada pilihan variabel. Saya memakai conditionalPanel supaya pilihan variabel berubah otomatis sesuai jenis plot yang dipilih. Di panel kanan ada grafik atau tabel, ditambah ringkasan statistik.

Bagian keempat adalah server, yaitu logika aplikasinya. Ada fungsi plot_scatter, plot_line, dan plot_bar yang membuat grafik dengan ggplot2, lalu diubah menjadi interaktif dengan ggplotly. Tabel dibuat dengan fungsi datatable. Semuanya reaktif, artinya setiap kali pengguna mengganti pilihan, tampilan langsung diperbarui.

Bagian kelima, aplikasi dijalankan dengan perintah shinyApp."

## 4. Demonstrasi aplikasi (±3 menit)
[Klik tombol Run App. Tunggu aplikasi terbuka di browser.]

**Scatter plot**
[Pilih Scatter plot. X = MinTemp, Y = MaxTemp, warna = RainTomorrow. Arahkan kursor ke salah satu titik. Coba zoom dengan menarik kotak di area grafik, lalu double-click untuk kembali.]

"Ini tampilan scatter plot. Saya pilih suhu minimum di sumbu X dan suhu maksimum di sumbu Y, lalu warna titik berdasarkan apakah besok hujan. Kalau kursor diarahkan ke titik, muncul keterangan nilainya dan hari ke berapa. Grafiknya juga bisa di-zoom.
Terlihat titik-titiknya membentuk pola naik, dan garis trennya juga naik. Di ringkasan bawah, korelasinya 0,752, artinya hubungan positif yang kuat: kalau suhu minimum tinggi, suhu maksimum juga cenderung tinggi."

[Ganti variabel Y menjadi variabel lain, misalnya Humidity3pm, untuk menunjukkan variabel bisa dipilih bebas.]

"Variabelnya bisa diganti sesuai keinginan, dan grafiknya langsung berubah."

**Line plot**
[Pilih Line plot. Pilih MinTemp dan MaxTemp. Geser slider rentang hari. Klik salah satu nama variabel di legenda untuk menyembunyikannya.]

"Berikutnya line plot. Di sini kita bisa memilih lebih dari satu variabel sekaligus, dan memilih rentang hari dengan slider. Terlihat suhu tinggi di awal periode, turun di sekitar hari ke-150 sampai ke-300, lalu naik lagi di akhir. Ini menunjukkan pola perubahan musim. Kalau nama variabel di legenda diklik, garisnya bisa disembunyikan."

**Bar plot**
[Pilih Bar plot. Variabel kategori = WindGustDir, mode Jumlah hari. Lalu ganti ke Rata-rata, variabel numerik = Rainfall.]

"Ketiga, bar plot. Saya pilih arah angin. Arah angin yang paling sering adalah barat laut atau NW, sebanyak 73 hari.
Bar plot ini juga bisa menampilkan rata-rata variabel angka. Kalau saya pilih rata-rata curah hujan, rata-rata tertinggi ada saat angin dari arah SSE dan W."

**Tabel data**
[Pilih Tabel data. Tambah/hapus kolom. Ketik sesuatu di kotak Search. Klik judul kolom untuk mengurutkan. Pakai filter RainTomorrow = Yes.]

"Terakhir, tabel data. Kolom yang tampil bisa dipilih sendiri. Tabelnya bisa dicari, diurutkan dengan mengklik judul kolom, dan difilter. Misalnya saya filter RainTomorrow sama dengan Yes, maka hanya muncul hari-hari yang besoknya hujan."

## 5. Penjelasan hasil (±45 detik)
[Kembali ke tampilan scatter plot atau buka bagian Kesimpulan di laporan]

"Jadi, dari aplikasi ini bisa disimpulkan beberapa hal. Pertama, suhu minimum dan maksimum berhubungan positif kuat. Kedua, suhu berubah mengikuti pola musim selama setahun. Ketiga, arah angin yang paling sering adalah barat laut. Dan keempat, sebagian besar hari dalam dataset tidak diikuti hujan keesokan harinya, yaitu 300 hari tidak hujan dan 66 hari hujan.
Dengan aplikasi Shiny ini, data bisa dieksplorasi dengan mudah tanpa harus mengubah kode program."

## 6. Penutup (±15 detik)
[Wajah kembali terlihat jelas]

"Demikian presentasi Tugas Tutorial 3 dari saya. Mohon maaf apabila ada kekurangan. Terima kasih atas perhatiannya.
Wassalamualaikum warahmatullahi wabarakatuh."
