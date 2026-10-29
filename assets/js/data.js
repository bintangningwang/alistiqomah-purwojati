/* =============================================================
   DATA KONTEN — galeri, video, dan berita.
   Tambah / ubah item cukup di sini.
   ============================================================= */

/* ---------- PROGRAM PENDIDIKAN ---------- */
window.PROGRAM = [
  {
    id: "ta", nama: "TA", lengkap: "Taman Anak", jenjang: "Usia dini (4–6 tahun)", icon: "i-people",
    ringkas: "Pengenalan adab, doa harian, huruf hijaiyah, dan hafalan surat pendek lewat suasana bermain yang islami.",
    materi: ["Adab & akhlak sehari-hari", "Doa dan dzikir harian", "Pengenalan huruf hijaiyah", "Hafalan surat-surat pendek", "Calistung dasar", "Kegiatan motorik & kreativitas"]
  },
  {
    id: "mi", nama: "MI", lengkap: "Madrasah Ibtidaiyah", jenjang: "Setingkat SD", icon: "i-book",
    ringkas: "Pondasi membaca Al-Qur'an dengan benar, hafalan juz 'amma, dasar bahasa Arab, serta pelajaran umum tingkat dasar.",
    materi: ["Tahsin & tahfidz Al-Qur'an", "Aqidah & akhlak", "Fiqih ibadah dasar", "Bahasa Arab dasar", "Hadits pilihan", "Pelajaran umum tingkat dasar"]
  },
  {
    id: "mutawasithoh", nama: "Mutawasithoh", lengkap: "Mutawasithoh", jenjang: "Setingkat SMP", icon: "i-building",
    ringkas: "Pendalaman ilmu syar'i dan bahasa Arab, pembiasaan hidup di asrama, serta penguatan hafalan Al-Qur'an.",
    materi: ["Tahfidz Al-Qur'an", "Nahwu & sharaf", "Aqidah", "Fiqih", "Hadits & musthalah", "Sirah nabawiyah", "Pelajaran umum"]
  },
  {
    id: "tsanawiyah", nama: "Tsanawiyah", lengkap: "Tsanawiyah", jenjang: "Setingkat SMA", icon: "i-award",
    ringkas: "Kajian kitab yang lebih mendalam, latihan dakwah dan kepemimpinan, sebagai bekal melanjutkan studi atau berkhidmah di masyarakat.",
    materi: ["Tahfidz & tafsir", "Kajian kitab aqidah & fiqih", "Ushul fiqih dasar", "Bahasa Arab lanjutan", "Latihan khitobah & dakwah", "Pelajaran umum"]
  }
];

/* ---------- GALERI ----------
   src  : alamat foto, mis. "img/galeri/masjid.jpg". Kosongkan "" untuk placeholder.
   cat  : salah satu id di KATEGORI_GALERI                               */
window.KATEGORI_GALERI = [
  { id: "fasilitas",  label: "Fasilitas & Gedung" },
  { id: "ibadah",     label: "Masjid & Ibadah" },
  { id: "kegiatan",   label: "Kegiatan Santri" },
  { id: "pendidikan", label: "Pendidikan" }
];

window.GALERI = [
  { title: "Masjid Jamilah",            cat: "ibadah",     src: "", icon: "i-mosque"   },
  { title: "Asrama Santri",             cat: "fasilitas",  src: "", icon: "i-building" },
  { title: "Kajian Kitab",              cat: "kegiatan",   src: "", icon: "i-book"     },
  { title: "Kelas Madrasah Ibtidaiyah", cat: "pendidikan", src: "", icon: "i-people"   },
  { title: "Shalat Berjamaah",          cat: "ibadah",     src: "", icon: "i-mosque"   },
  { title: "Halaqah Tahfidz Al-Qur'an", cat: "kegiatan",   src: "", icon: "i-book"     },
  { title: "Taman Anak (TA)",           cat: "pendidikan", src: "", icon: "i-people"   },
  { title: "Olahraga Santri",           cat: "kegiatan",   src: "", icon: "i-ball"     },
  { title: "Haflah & Wisuda Santri",    cat: "kegiatan",   src: "", icon: "i-award"    }
];

/* ---------- VIDEO ----------
   url : link video YouTube. Kosongkan "" untuk mengarah ke channel.            */
window.VIDEO = [
  { title: "Profil Ma'had Al-Istiqomah Purwojati", note: "Video profil pondok", url: "" },
  { title: "Kajian Rutin di Masjid Jamilah",        note: "Rekaman kajian",      url: "" },
  { title: "Haflah Akhirussanah",                    note: "Dokumentasi acara",   url: "" }
];

/* ---------- BERITA ----------
   id      : kode unik tanpa spasi (dipakai di alamat berita.html?id=...)
   tanggal : format TTTT-BB-HH
   contoh  : true = berita contoh (muncul label "Contoh"). Hapus / ganti dengan berita asli.
   isi     : paragraf-paragraf berita                                          */
window.BERITA = [
  {
    id: "psb-dibuka", contoh: true, tanggal: "2026-10-20", kategori: "Pengumuman", icon: "i-pen",
    judul: "Penerimaan Santri Baru Tahun Ajaran 2027/2028 Dibuka",
    ringkas: "Pendaftaran santri baru untuk jenjang TA, MI, Mutawasithoh, dan Tsanawiyah telah dibuka.",
    isi: [
      "Pondok Pesantren Al-Istiqomah Purwojati membuka pendaftaran santri baru untuk tahun ajaran 2027/2028 pada jenjang TA, MI, Mutawasithoh, dan Tsanawiyah.",
      "Informasi syarat, alur, dan jadwal pendaftaran dapat dilihat di halaman PSB. Calon wali santri juga dapat menghubungi panitia melalui WhatsApp untuk bertanya langsung."
    ]
  },
  {
    id: "kajian-rutin", contoh: true, tanggal: "2026-10-12", kategori: "Kegiatan", icon: "i-book",
    judul: "Kajian Rutin Pekanan di Masjid Jamilah",
    ringkas: "Kajian rutin terbuka untuk santri, wali santri, dan masyarakat sekitar Purwojati.",
    isi: [
      "Kajian rutin pekanan kembali diadakan di Masjid Jamilah. Kajian ini terbuka untuk santri, wali santri, dan masyarakat umum.",
      "Jamaah putri disediakan tempat terpisah. Jadwal kajian berikutnya akan diumumkan melalui Instagram resmi pondok."
    ]
  },
  {
    id: "setoran-hafalan", contoh: true, tanggal: "2026-09-28", kategori: "Santri", icon: "i-award",
    judul: "Ujian Setoran Hafalan Al-Qur'an Santri",
    ringkas: "Santri mengikuti ujian setoran hafalan sebagai evaluasi program tahfidz semester ini.",
    isi: [
      "Santri dari berbagai jenjang mengikuti ujian setoran hafalan Al-Qur'an sebagai bagian dari evaluasi program tahfidz.",
      "Ujian disimak langsung oleh para asatidzah. Hasilnya menjadi bahan pembinaan hafalan santri pada semester berikutnya."
    ]
  }
];
