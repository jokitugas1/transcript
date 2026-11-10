# Naskah Video – Tugas Praktik 3 STSI4209 (± 7 menit)

> Teks biasa = yang diucapkan. Teks dalam **[kurung tebal]** = yang ditampilkan di layar.
> Sebelum rekam: jalankan aplikasi lewat **Live Server** (klik kanan `index.html` → *Open with Live Server*), buka VS Code di sebelahnya, kamera wajah menyala.

---

## 1. Pembukaan (± 0:30)

**[Wajah terlihat di kamera, aplikasi terbuka di tab Stok]**

Assalamualaikum warahmatullahi wabarakatuh. Perkenalkan, nama saya **[Nama]**, NIM **[NIM]**, dari program studi **[Prodi]**. Di video ini saya akan menjelaskan Tugas Praktik 3 mata kuliah **Pemrograman Berbasis Web, STSI4209**.

Tugasnya adalah merapikan aplikasi SITTA dari Tugas 2 menjadi **Vue Component dan Template**. Aplikasinya punya tiga halaman: Stok Bahan Ajar, Tracking DO, dan Pemesanan.

---

## 2. Struktur Proyek (± 1:15)

**[Buka panel folder di VS Code]**

Pertama, struktur foldernya. Saya mengikuti struktur dari soal:

- `index.html` adalah halaman utama. Di sinilah Vue di-*mount* ke `#app`.
- Folder `data` berisi `dataBahanAjar.json`, yaitu data dummy-nya.
- Folder `js/services` berisi `api.js`. Hanya file ini yang mengambil data JSON memakai `fetch`.
- Folder `js/components` berisi enam komponen, misalnya `stock-table.js`, `do-tracking.js`, `order-form.js`, `status-badge.js`, dan `app-modal.js`.
- Folder `templates` berisi HTML untuk masing-masing komponen.

**[Buka `js/components/stock-table.js`, tunjuk baris `Vue.component('ba-stock-table'` dan `template: '#tpl-stock'`]**

Setiap komponen didaftarkan dengan `Vue.component`. Contohnya `ba-stock-table`, yang memakai template ber-id `tpl-stock`. Nama file memakai gaya *kebab-case*, dan id template selalu diawali `tpl-` supaya mudah dicari.

**[Buka `index.html`, tunjuk bagian `section v-show="tab === 'stok'"`]**

Untuk pindah halaman, saya cukup memakai variabel `tab` di root, dengan `v-show`. Data dikirim ke komponen lewat *props*, misalnya `:items="state.stok"`. Kalau komponen ingin mengubah data, ia mengirim *event* ke root, misalnya `@save` atau `@delete`. Jadi semua data tetap dipegang di satu tempat.

---

## 3. Halaman Stok Bahan Ajar (± 2:15)

**[Kembali ke browser, tab Stok]**

Ini halaman stok. Tabelnya dibuat dengan `v-for`, dan nomor barisnya memakai *index* yang dimulai dari nol, ditambah satu. Harga diformat dengan filter `rupiah`, jadi tampil "Rp 65.000". Stok dan safety memakai filter `buah`, jadi tampil "28 buah".

**[Arahkan mouse ke badge Status]**

Kolom status memakai komponen `status-badge` dengan `v-if`, `v-else-if`, dan `v-else`. Kosong berwarna merah, Menipis oranye, dan Aman hijau. Saat mouse diarahkan ke status, muncul tooltip catatan yang ditampilkan dengan `v-html`.

**[Pilih UT-Daerah "Jakarta", lalu muncul pilihan Kategori]**

Untuk filter, pilihan kategori baru muncul setelah UT-Daerah dipilih. Inilah *dependent option*. Filternya memakai rantai *computed property*. Karena computed di-*cache*, hanya bagian yang berubah yang dihitung ulang.

**[Centang "Perlu re-order saja", klik judul kolom Harga untuk sort, lalu klik Reset]**

Centang "re-order" menampilkan stok yang di bawah safety atau yang kosong. Di sini ada **watcher**: saat centang aktif, tabel otomatis diurutkan dari stok paling sedikit. Ada juga watcher lain: saat UT-Daerah diganti, kategori di-reset. Sort bisa berdasarkan judul, stok, atau harga. Tombol Reset mengembalikan semua filter.

**[Klik "Tambah Bahan Ajar", tekan Enter dalam keadaan kosong]**

Untuk menambah data, formnya muncul sebagai pop-up. Kalau saya langsung tekan Enter, validasinya muncul, misalnya format kode dan harga minimal.

**[Isi form dengan benar, tekan Enter]**

Setelah diisi benar dan Enter ditekan, data langsung masuk ke tabel. Edit juga memakai form yang sama.

**[Klik Hapus pada satu baris]**

Untuk menghapus, muncul pop-up konfirmasi dulu. Saya bisa pilih Ya atau Batal, atau pakai Enter dan Esc.

---

## 4. Halaman Pemesanan (± 1:30)

**[Pindah ke tab Pemesanan]**

Sekarang halaman pemesanan, atau input DO baru. Nomor DO dibuat otomatis oleh *computed property*: "DO", tahun berjalan, lalu nomor urut, misalnya DO2026-001.

**[Isi NIM dengan huruf, lalu angka]**

NIM memakai watcher sehingga hanya bisa diisi angka, maksimal 9 digit.

**[Pilih ekspedisi, lalu pilih paket]**

Ekspedisi bisa dipilih antara JNE Regular atau Express. Setelah paket dipilih di `<select>`, detail isi paketnya muncul di bawahnya. Total harga juga terisi otomatis lewat watcher dan tampil dalam format Rupiah. Tanggal kirim diambil dari `Date`, dan ditampilkan seperti "10 November 2026".

**[Tekan Enter untuk simpan]**

Saat Enter ditekan, DO tersimpan dan aplikasi langsung pindah ke halaman Tracking.

---

## 5. Halaman Tracking DO (± 1:00)

**[Halaman Tracking dengan DO baru terpilih]**

Di halaman Tracking, DO yang baru dibuat langsung terpilih. Detailnya ditampilkan dengan `v-for` pada *object*, yaitu index berbasis nama, seperti NIM, Nama, dan Paket.

**[Ketik keterangan progress, tekan Enter]**

Saya bisa menambah progress perjalanan. Waktunya diambil otomatis dari `Date`, dan keterangannya dari input saya.

**[Pilih mode NIM, ketik 123456789, tekan Enter, lalu tekan Esc]**

Pencarian bisa berdasarkan Nomor DO atau NIM. Tekan Enter untuk mencari, dan tekan Esc untuk mereset pencarian.

---

## 6. Penutup (± 0:30)

**[Wajah terlihat di kamera]**

Jadi kesimpulannya, aplikasi ini sudah memakai Vue Component dan Template, data binding dengan `v-bind` dan `v-model`, conditional, `v-for`, computed dan methods, beberapa watcher, filter untuk format teks, serta validasi form dengan Enter dan Esc.

Sekian penjelasan dari saya. Terima kasih. Wassalamualaikum warahmatullahi wabarakatuh.
