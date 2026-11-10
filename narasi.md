# Naskah Narasi Video – Tugas Praktik 3 Struktur Data

Perkiraan durasi: ±12–13 menit (bicara santai).
Teks dalam **[kurung tebal]** adalah petunjuk tampilan layar, tidak perlu dibaca.
Angka **58** = 2 digit akhir NIM contoh. Ganti dengan 2 digit akhir NIM kamu.

---

## 1. Pembukaan (±1 menit)

**[Kamera wajah + layar judul / Readme bagian atas]**

> Assalamualaikum warahmatullahi wabarakatuh, selamat pagi/siang/malam Bapak/Ibu tutor.
>
> Perkenalkan, nama saya ........, NIM ........, dari Program Studi Sistem Informasi, Universitas Terbuka.
>
> Pada video ini saya akan menjelaskan Tugas Praktik 3 mata kuliah Struktur Data. Tugasnya ada dua: membuat program pencarian angka pada graf dengan algoritma **Depth-First Search** atau DFS, dan dengan algoritma **Breadth-First Search** atau BFS, menggunakan bahasa Java.
>
> Di video ini saya akan menjelaskan graf yang saya buat, kode programnya, lalu menjalankan program dan menjelaskan proses pencariannya langkah demi langkah.

---

## 2. Penjelasan graf (±2 menit)

**[Tampilkan gambar graf di Readme atau di komentar paling atas Tugas3.java]**

> Pertama, ini graf yang saya gunakan. Grafnya tidak berarah dan terdiri dari 8 node, yaitu a1 sampai a8.
>
> Setiap node punya nilai, yang saya tulis di dalam kurung. a1 bernilai 12, a2 bernilai 7, a3 bernilai 25, a4 bernilai 9, a5 bernilai 33, a6 bernilai 58, a7 bernilai 41, dan a8 bernilai 16.
>
> Angka di garis adalah nilai hubungan atau bobot antar node. Sesuai ketentuan soal, saya memasukkan 2 digit terakhir NIM saya, yaitu **58**, ke dalam graf. Angka 58 saya pakai sebagai nilai node a6, dan sebagai bobot hubungan a1 ke a2 serta a3 ke a6.
>
> Hubungannya begini: a1 terhubung ke a2 dan a3. a2 terhubung ke a4 dan a5. a3 terhubung ke a6 dan a7. Lalu a5 dan a6 sama-sama terhubung ke a8. Karena ada hubungan lewat a8 ini, graf saya punya **siklus** atau putaran, jadi program harus mencatat node mana yang sudah dikunjungi supaya tidak berputar terus.
>
> Angka yang akan dicari adalah **n = 58**, dan pencarian selalu dimulai dari node a1.

---

## 3. Penjelasan kode: membangun graf (±2 menit)

**[Buka Tugas3.java, scroll ke konstanta NIM dan class Edge]**

> Sekarang masuk ke kodenya. Di bagian atas ada konstanta `NIM`. Program mengambil 2 digit terakhirnya dengan `substring`, lalu mengubahnya menjadi angka dengan `Integer.parseInt`.
>
> Lalu ada class `Edge`, yang mewakili satu hubungan. Isinya node tujuan dan bobotnya.

**[Scroll ke nilaiNode, adj, tambahNode, tambahSisi]**

> Graf saya simpan dalam bentuk **adjacency list**. Ada dua `Map`:
> - `nilaiNode` menyimpan nilai setiap node, misalnya a1 bernilai 12.
> - `adj` menyimpan daftar tetangga setiap node beserta bobotnya.
>
> Method `tambahNode` menambahkan node baru beserta nilainya. Method `tambahSisi` menambahkan hubungan. Karena grafnya tidak berarah, hubungan ditambahkan dua kali, dari a ke b dan dari b ke a.

**[Scroll ke method main]**

> Di method `main`, saya membuat 8 node dan 8 hubungan sesuai gambar tadi. Node a6 dan dua bobot hubungan memakai variabel `duaDigitNim`. Angka yang dicari, `n`, juga diisi dengan 2 digit NIM. Setelah itu program menampilkan graf, lalu menjalankan `dfs` dan `bfs` dari node a1.

---

## 4. Penjelasan DFS (±3 menit)

**[Scroll ke method dfs]**

> Sekarang algoritma pertama, **Depth-First Search**. Prinsipnya, DFS menelusuri satu cabang sedalam mungkin dulu. Kalau sudah buntu, DFS mundur atau *backtrack* ke cabang lain.
>
> DFS memakai struktur data **stack**, yang sifatnya LIFO, *Last In First Out*: yang terakhir dimasukkan, itu yang pertama diambil. Di Java saya pakai `ArrayDeque` dengan method `push` untuk memasukkan dan `pop` untuk mengambil.
>
> Ada juga `visited` untuk mencatat node yang sudah dikunjungi, dan `parent` untuk mencatat kita datang dari node mana, supaya nanti jalurnya bisa ditampilkan.
>
> Cara kerjanya: a1 di-push ke stack. Selama stack belum kosong, ambil node paling atas, tandai sudah dikunjungi, lalu cek apakah nilainya sama dengan n. Kalau sama, pencarian selesai. Kalau tidak, semua tetangga yang belum dikunjungi di-push ke stack.
>
> Tetangganya saya push dalam **urutan terbalik**. Tujuannya supaya tetangga pertama berada paling atas stack dan diproses lebih dulu, jadi penelusuran berjalan dari kiri ke kanan seperti di gambar.

**[Jalankan: javac Tugas3.java lalu java Tugas3. Scroll ke bagian DFS di output]**

> Sekarang saya jalankan programnya. Ini output DFS-nya, saya jelaskan langkah demi langkah:
>
> - **Langkah 1:** a1 di-pop dan dicek. Nilainya 12, bukan 58. Tetangganya, a2 dan a3, di-push. Sekarang a2 ada di atas stack.
> - **Langkah 2:** a2 di-pop. Nilainya 7, bukan 58. Tetangganya, a4 dan a5, di-push. Stack sekarang berisi a4, a5, a3.
> - **Langkah 3:** a4 di-pop. Nilainya 9, bukan 58. a4 tidak punya tetangga baru, jadi ini buntu. DFS mundur, dan berikutnya yang diambil adalah a5.
> - **Langkah 4:** a5 di-pop. Nilainya 33, bukan 58. Tetangganya, a8, di-push.
> - **Langkah 5:** a8 di-pop. Nilainya 16, bukan 58. Tetangganya, a6, di-push.
> - **Langkah 6:** a6 di-pop. Nilainya 58, **sama dengan yang dicari**. Pencarian selesai.
>
> Jadi DFS menemukan angka 58 di node a6 setelah mengecek 6 node, dengan urutan a1, a2, a4, a5, a8, a6. Jalur yang ditempuh dari a1 adalah a1, a2, a5, a8, lalu a6.
>
> Terlihat DFS langsung masuk dalam ke cabang kiri dan baru sampai ke a6 lewat a8. Cabang a3 bahkan tidak sempat diperiksa.

---

## 5. Penjelasan BFS (±3 menit)

**[Scroll ke method bfs]**

> Algoritma kedua, **Breadth-First Search**. Berbeda dengan DFS, BFS menelusuri graf **per level**. Semua tetangga terdekat diperiksa dulu, baru turun ke level berikutnya.
>
> BFS memakai **queue** atau antrian, yang sifatnya FIFO, *First In First Out*: yang pertama masuk, itu yang pertama keluar. Di Java saya pakai `LinkedList` sebagai `Queue`, dengan `add` untuk memasukkan ke belakang dan `poll` untuk mengambil dari depan.
>
> Di BFS, node langsung ditandai sudah dikunjungi saat **dimasukkan** ke queue, bukan saat diambil. Ini supaya node yang sama tidak masuk antrian dua kali. Saya juga mencatat `level` setiap node, yaitu jaraknya dari a1.
>
> Cara kerjanya: a1 dimasukkan ke queue. Selama queue belum kosong, ambil node paling depan dan cek nilainya. Kalau sama dengan n, selesai. Kalau tidak, semua tetangga yang belum dikunjungi dimasukkan ke belakang queue.

**[Scroll ke bagian BFS di output]**

> Ini output BFS-nya:
>
> - **Langkah 1, level 0:** a1 diambil. Nilainya 12, bukan 58. Tetangganya, a2 dan a3, masuk antrian.
> - **Langkah 2, level 1:** a2 diambil. Nilainya 7, bukan 58. a4 dan a5 masuk ke belakang antrian. Queue sekarang a3, a4, a5.
> - **Langkah 3, level 1:** a3 diambil. Nilainya 25, bukan 58. a6 dan a7 masuk antrian. Queue sekarang a4, a5, a6, a7.
> - **Langkah 4, level 2:** a4 diambil. Nilainya 9, bukan 58. Tidak ada tetangga baru.
> - **Langkah 5, level 2:** a5 diambil. Nilainya 33, bukan 58. a8 masuk antrian.
> - **Langkah 6, level 2:** a6 diambil. Nilainya 58, **sama dengan yang dicari**. Pencarian selesai.
>
> BFS juga menemukan angka 58 di node a6 setelah 6 langkah, tapi urutannya berbeda: a1, a2, a3, a4, a5, a6. Jalurnya juga lebih pendek, yaitu a1, a3, a6, hanya 2 langkah dari a1.

---

## 6. Perbandingan DFS dan BFS (±1,5 menit)

**[Tampilkan tabel perbandingan di Readme]**

> Dari hasil tadi, perbedaan DFS dan BFS terlihat jelas.
>
> - **Struktur data:** DFS memakai stack, BFS memakai queue.
> - **Cara menelusuri:** DFS masuk sedalam mungkin lalu mundur. BFS melebar per level.
> - **Urutan kunjungan:** DFS mengunjungi a1, a2, a4, a5, a8, a6. BFS mengunjungi a1, a2, a3, a4, a5, a6.
> - **Jalur ke node tujuan:** DFS menemukan jalur sepanjang 4 sisi, sedangkan BFS menemukan jalur terpendek, yaitu 2 sisi.
>
> BFS selalu menemukan jalur dengan jumlah sisi paling sedikit, jadi cocok untuk mencari rute terpendek. DFS lebih hemat memori dan cocok untuk menelusuri graf yang dalam atau mencari semua kemungkinan jalur.
>
> Untuk kompleksitas waktu, keduanya sama, yaitu O(V + E), di mana V adalah jumlah node dan E adalah jumlah sisi, karena setiap node dan sisi paling banyak diperiksa satu kali.

---

## 7. Penutup (±30 detik)

**[Kamera wajah]**

> Kesimpulannya, saya sudah membuat program Java untuk mencari angka pada graf 8 node dengan algoritma DFS dan BFS. Kedua algoritma berhasil menemukan angka 58 di node a6, tapi dengan urutan penelusuran dan jalur yang berbeda.
>
> Sekian penjelasan dari saya. Mohon maaf jika ada kekurangan. Terima kasih atas perhatiannya.
>
> Wassalamualaikum warahmatullahi wabarakatuh.

---

## Tips rekaman

- Pastikan wajah terlihat (pakai webcam overlay di pojok layar, misalnya dengan OBS).
- Perbesar font editor dan terminal supaya kode terbaca di video.
- Jalankan program sekali sebelum merekam untuk memastikan tidak ada error.
- Kalau 2 digit NIM kamu bukan 58, ganti semua angka 58 di naskah ini. Urutan langkahnya tetap sama, kecuali angka NIM kamu sama dengan nilai node lain (12, 7, 25, 9, 33, 41, 16).
