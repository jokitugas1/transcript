Narasi Video Tugas 3 – Algoritma dan Pemrograman (± 5 menit)

Catatan: teks di dalam [kurung siku] adalah petunjuk layar, jangan dibaca.


1. Pembukaan (± 30 detik)

[Wajah terlihat jelas di kamera]

Assalamualaikum warahmatullahi wabarakatuh, selamat pagi/siang/malam Bapak/Ibu tutor.

Perkenalkan, nama saya Mustofa Adam, dengan NIM 055358772, dari Program Studi Sistem Informasi, Universitas Terbuka.

Pada video ini saya akan menjelaskan Tugas 3 mata kuliah Algoritma dan Pemrograman, kode MSIM4203. Saya akan menjelaskan soalnya, kode programnya, lalu menjalankan program dan menjelaskan hasilnya.


2. Penjelasan soal (± 30 detik)

Tugasnya adalah membuat program sederhana menggunakan operator, IF, dan array untuk menghitung penghasilan karyawan.

Ada tiga golongan karyawan. Golongan A gajinya 5 juta, golongan B 6,5 juta, dan golongan C 9,5 juta. Gaji ini disimpan di array gaji. Golongan A mengambil gaji di index 0, B di index 1, dan C di index 2.

Persen lembur juga disimpan di array, isinya 30, 32, 34, 36, dan 38. Lembur 1 jam mendapat 30 persen dari gaji pokok, 2 jam 32 persen, dan seterusnya, sampai lembur 5 jam atau lebih mendapat 38 persen.

Input programnya golongan dan jam lembur. Outputnya jumlah penghasilan, yaitu gaji pokok ditambah gaji lembur.


3. Penjelasan kode (± 2 menit)

[Buka Operator.java dari baris 1]

Di baris 1, saya mengimpor Scanner untuk membaca input dari keyboard.

Di baris 9 ada array gaji, isinya 5 juta, 6,5 juta, dan 9,5 juta. Saya pakai tipe long karena angkanya besar. Di baris 12 ada array persenLembur, isinya 30, 32, 34, 36, dan 38. Index array di Java dimulai dari 0.

[Scroll ke baris 19]

Kemudian program meminta input golongan. Inputnya saya rapikan dengan trim untuk membuang spasi, dan toUpperCase supaya huruf kecil juga diterima.

Di baris 25 sampai 35 ada IF yang pertama. Kalau golongan A, indexGaji bernilai 0. Kalau B, bernilai 1. Kalau C, bernilai 2. Kalau selain itu, program menampilkan pesan golongan tidak valid lalu berhenti.

[Scroll ke baris 38]

Setelah itu program meminta jam lembur. Saya tambahkan dua pengecekan. Pertama, hasNextInt untuk memastikan inputnya bilangan bulat. Di sini saya memakai operator logika not, yaitu tanda seru. Kedua, jam lembur tidak boleh negatif.

[Scroll ke baris 57]

Di baris 57 sampai 63 ada IF yang kedua, untuk menentukan index array lembur. Kalau lembur 5 jam atau lebih, index-nya 4, yaitu 38 persen. Kalau lembur 1 sampai 4 jam, index-nya jam lembur dikurangi 1. Jadi 1 jam menjadi index 0, 2 jam index 1, dan seterusnya. Kalau tidak lembur, index-nya minus 1 sebagai tanda tidak lembur.

[Scroll ke baris 66]

Di baris 66, gaji pokok diambil dari array, yaitu gaji kurung siku indexGaji. Lalu gaji lembur dihitung dengan rumus gaji pokok dikali persenLembur kurung siku indexLembur, dibagi 100. Sesuai bunyi soal, persentase ini dihitung satu kali dari gaji pokok, tidak dikalikan lagi dengan jumlah jam. Terakhir, jumlah penghasilan adalah gaji pokok ditambah gaji lembur.

Bagian akhir program menampilkan rincian penghasilan, termasuk index array yang dipakai, supaya terlihat bahwa datanya diambil dari array.


4. Demo program (± 1 menit 30 detik)

[Buka terminal, ketik: javac Operator.java, lalu java Operator]

Sekarang saya jalankan programnya.

[Input: B, lalu 3]

Percobaan pertama, golongan B dengan lembur 3 jam. Golongan B mengambil gaji di index 1, yaitu 6,5 juta. Lembur 3 jam mengambil persen di index 2, yaitu 34 persen. Gaji lemburnya 2.210.000, jadi jumlah penghasilannya 8.710.000.

[Jalankan lagi, input: C, lalu 7]

Percobaan kedua, golongan C dengan lembur 7 jam. Karena lebih dari 5 jam, index lemburnya 4, yaitu 38 persen. Gaji pokoknya 9,5 juta, gaji lemburnya 3.610.000, jadi jumlahnya 13.110.000.

[Jalankan lagi, input: A, lalu 0]

Percobaan ketiga, golongan A tanpa lembur. Karena tidak lembur, penghasilannya hanya gaji pokok, yaitu 5 juta.

[Jalankan lagi, input: D]

Terakhir, saya coba golongan yang tidak ada, yaitu D. Program menampilkan pesan golongan tidak valid lalu berhenti.


5. Penutup (± 20 detik)

Jadi, program ini memakai array untuk menyimpan gaji dan persen lembur, IF untuk menentukan index array yang diambil, dan operator untuk menghitung jumlah penghasilan. Semua hasilnya sudah sesuai dengan ketentuan soal.

Sekian penjelasan dari saya. Terima kasih Bapak/Ibu tutor. Wassalamualaikum warahmatullahi wabarakatuh.
