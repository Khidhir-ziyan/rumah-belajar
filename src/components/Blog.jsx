import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA BLOG ---
// Kelola semua konten blog di sini agar mudah diubah.
const blogData = [
  // Salin dan ganti objek dengan id: 3 di dalam array blogData Anda

{
  id: 1,
  title: 'Beranda',
  image: '/foto5.jpg', // Ganti dengan path gambar Anda
  excerpt: 'Kami dengan beranda yang sama.',
  author: 'Ustadz Zainal Abidin - Hafidzahullah',
  fullContent: [
    'Teladan adalah metode pendidikan terbaik, karena kebaikan yang dicontohkan menjadi nyata dan dapat ditiru. Namun, teladan saja tidak cukup. Dalam banyak kasus, anak-anak dari keluarga “baik-baik” tetap bisa menjadi nakal. Ada empat pertanyaan penting yang perlu direnungkan:',
    '',
    'Apakah perintah kita dituruti?',
    'Banyak orangtua mengira anaknya patuh, padahal sebenarnya mereka menyerah pada keinginan anak. Anak perlu dilatih untuk taat, bukan hanya diberi teladan. Tanpa pembiasaan, keteladanan menjadi tak efektif.',
    '',
    'Apakah marah kita ditakuti?',
    'Anak-anak seharusnya takut membuat orangtua marah, bukan hanya takut saat dimarahi. Sayangnya, banyak anak tak peduli bahkan ketika orangtua menangis. Lebih parah lagi jika orangtua diam terhadap kemungkaran dalam rumah. Ini bisa termasuk sifat dayuts, yang diharamkan surga.',
    '',
    'Apakah bicara kita dipahami?',
    'Komunikasi dengan anak harus berkembang menjadi dialog, bukan sekadar perintah. Banyak orangtua gagal menyampaikan pesan karena tidak tahu cara berbicara yang sesuai dengan usia dan pemahaman anak.',
    '',
    'Apakah nasihat kita didengar?',
    'Anak-anak membutuhkan nasihat saat sedih, bingung, atau salah. Namun, mereka sering lebih percaya pada teman, buku, atau televisi ketimbang pada orangtua. Nasihat hanya akan didengar jika hubungan emosional dan komunikasi sudah terbangun sejak kecil.',
    '',
    'Kesimpulan:',
    'Teladan memang penting, tapi jika perintah diabaikan, marah tidak ditakuti, komunikasi gagal, dan nasihat tak didengar, maka teladan hanya akan menjadi tontonan tanpa makna.'
  ]
},
  // Ganti objek dengan id: 2 di dalam blogData Anda

{
  id: 2,
  title: 'Rumah Kami',
  image: '/foto3.jpg',
  excerpt: 'Kisah tentang kebersamaan dan ukhuwah yang terjalin, menjadikan lembaga ini lebih dari sekadar sekolah.',
  author: 'Ustadz Zainal Abidin - Hafidzahullah',
  fullContent: [ // <-- Diubah menjadi array
    'Dengan Pemahaman dan Metode Ahlus-Sunnah wal Jama’ah, Rumah Belajar Ibnu Abbas mendidik anak untuk:',
    '1. Menghargai Ilmu.',
    '2. Menyadari dan mengembangkan Keterampilan, Penghayatan, dan Penalaran sesuai dengan perkembangan usianya.',
    '3. Mampu mengamalkan Hukum dan Perintah ALLAH Subhaanahu wa ta’alaa sebagai jalan untuk mengimani Ketentuan dan Kehendak-Nya.',
    '4. Mengenal dan mengamalkan prinsip-prinsip menentukan prioritas nilai dan tindakan.',
    '5. Belajar di dalam situasi apapun.',
    '6. Kreatif dan produktif.',
    '7. Mengenal dan ramah terhadap lingkungan.',
    '', // <-- Item kosong untuk membuat spasi antar paragraf
    'Rumah belajar Ibnu Abbas mendidik orangtua untuk:',
    '1. Mampu menjadi guru bagi anak-anaknya sendiri.',
    '2. Terlibat penuh di dalam persoalan pendidikan.',
    '', // <-- Item kosong untuk spasi
    'Rumah Belajar Ibnu Abbas mendidik masyarakat untuk:',
    '1. Menghancurkan sekat yang memisahkan antara sekolah dengan rumah.',
    '2. Menyadari dan menghargai lingkungannya sebagai media belajar.',
    '', // <-- Item kosong untuk spasi
    'Dari Rumah Belajar inilah kita ciptakan Lingkungan Belajar untuk membangun Masyarakat Belajar.'
  ]
},

  {
  id: 3,
  title: 'Jendela Pendidikan',
  image: '/foto2.jpg', // Ganti dengan path gambar Anda
  excerpt: 'Mengupas tuntas kurikulum terpadu kami yang menggabungkan ilmu syar\'i dan pengetahuan umum.',
  author: 'Ustadz Zainal Abidin - Hafidzahullah',
  fullContent: [
    'Pendidikan bertujuan untuk menjadikan obyeknya mampu berperan dan berprilaku sesuai dengan cita-cita termulia dan harapan-harapan terbaik yang dimilikinya. Dan karena manusia -juga jin- diciptakan tidak lain untuk beribadah -dengan segala bentuk penghambaannya- kepada ALLAH, yang untuk itu pula ALLAH tanamkan fitrah pada setiap manusia kecenderungan kepada kebenaran, maka pendidikan seharusnya menjadikan manusia betul-betul tahu : siapa yang harus diibadahi olehnya dan bagaimana cara beribadahnya.',
    'Pendidikan -resmi tidak resmi- pasti menyangkut unsur: Asas, Tujuan, Materi, Metode, Sarana, dan Pelakunya. Maka, ke arah -menjadikan manusia betul-betul tahu : siapa yang harus diibadahi olehnya dan bagaimana cara beribadahnya- itulah keenam unsur pendidikan di atas satu persatu -sebelum secara terpadu- diukur dan dinilai, apakah ia mendekatkan manusia kepadanya atau justru sebaliknya.',
    'Jendela Pendidikan rumah belajar Ibnu Abbas merupakan media yang dengannya berbagai unsur dan masalah pendidikan dibicarakan. Jendela ini sengaja dibuka untuk -melaluinya- mengarahkan yang di dalam melihat ke luar, sekaligus mempersilahkan yang di luar jendela melongok ke dalam.'
  ]
},
  {
  id: 4,
  title: 'Jendela Anak',
  image: '/foto6.jpg', // Ganti dengan path gambar Anda
  excerpt: 'Tips dan trik mendidik anak sesuai dengan tuntunan Islam di era digital.',
  author: 'Ustadz Zainal Abidin - Hafidzahullah',
  fullContent: [
    'Anak -menurut pengertian bahasa maupun istilah- adalah keturunan, seorang yang masih kecil, atau bagian kecil dari kesatuan yang lebih besar. Karenanya, kata anak tidak hadir sendiri kecuali bersamaan dengannya terkait -dinyatakan atau tidak- dengan kata induk atau orangtua. Artinya, “kehadirannya” telah didahului, dan ia tak bisa lepas dari yang mendahuluinya itu, selamanya.',
    'Setiap diri kita adalah anak, anak manusia atau keturunan seseorang. Dari pengertian ini saja cukuplah bagi kita untuk menyadari bahwa kehadiran dan perilaku kita, yang tidak lain diciptakan untuk beribadah -dengan segala bentuk penghambaannya- kepada ALLAH semata, senantiasa terkait dengan induk, orangtua, atau kesatuan yang lebih besar. Di dalam rangka inilah ALLAH Subhaanahu wa ta’alaa mengamanahi hamba-Nya untuk mendidik anak-anak mereka dan memberi wasiat kepada mereka untuk berbakti kepada orangtuanya.',
    'Di dalam perjalanan hidupnya, seorang anak akan senantiasa berhadapan dengan perkara-perkara yang menyangkut urusan:',
    '1. Berbakti kepada Orangtua.',
    '2. Bergaul dengan sesama mereka, baik yang sebaya maupun yang lebih tua atau lebih muda darinya.',
    '3. Mengatasi permasalah yang dihadapi sepanjang masa asuhannya.',
    '',
    'Jendela Anak rumah belajar Ibnu Abbas merupakan media yang dengannya berbagai masalah anak dibicarakan. Jendela ini sengaja dibuka untuk -melaluinya- mengingatkan anak tentang kewajibannya sebagai hamba-ALLAH, sekaligus mempersilahkan mereka yang di luar jendela melongok ke dalam. melihat -lebih tepatnya mengintip- apa yang ada di dalam kamar mereka dan apa saja yang mereka kerjakan di sana.'
  ]
},
  {
    id: 5,
    title: 'Jendela Risalah',
    image: '/foto1.jpg', // Ganti dengan path gambar Anda
    excerpt: 'Tadabbur ayat-ayat Al-Qur\'an dan hadits pilihan yang relevan dengan kehidupan sehari-hari.',
    author: 'Ustadz Zainal Abidin - Hafidzahullah',
    fullContent: ['Jendela Risalah.']
  },
  {
  id: 6,
  title: 'Jendela Orang Tua',
  image: '/foto2.jpg', // Ganti dengan path gambar Anda
  excerpt: 'Panduan bagi orang tua untuk bersinergi dengan lembaga dalam mendidik putra-putri tercinta.',
  author: 'Ustadz Zainal Abidin - Hafidzahullah',
  fullContent: [
    'Wahai para orangtua, Allah memerintahkan seluruh manusia untuk mengesakan-Nya, bersyukur kepada-Nya, dan menjaga amanah yang diberikan, termasuk anak-anak. Anak merupakan titipan Allah yang kelak akan dimintai pertanggungjawaban. Orangtua wajib menjaga fitrah anak agar tetap lurus di atas tauhid, serta mendidik mereka agar menjadi hamba Allah yang bersyukur dan taat.',
    'Islam menekankan pentingnya peran orangtua sebagai pemimpin dalam keluarga yang bertanggung jawab atas anak-anaknya, sebagaimana sabda Nabi bahwa setiap anak lahir dalam keadaan fitrah, namun orangtuanyalah yang menentukan arah keimanannya.',
    '“Jendela Orangtua Rumah Belajar Ibnu Abbas” hadir sebagai sarana pengingat dan edukasi bagi orangtua agar tidak lalai terhadap tanggung jawab mendidik anak sesuai tuntunan agama.'
  ]
},
];

// --- VARIAN ANIMASI UNTUK MODAL ---
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  },
  exit: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    transition: { duration: 0.2, ease: 'easeOut' }
  }
};


const Blog = () => {
  // State untuk menyimpan artikel mana yang sedang dipilih/dibuka
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Efek untuk lock scroll di body saat modal terbuka
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedArticle]);

  return (
    <>
      <section id="blog" className="py-20 bg-[#f4f0e4]">
        <div className="container mx-auto">
          {/* Judul dan Deskripsi Section */}
          <div className="text-center mb-16 px-4">
            <h2 className="text-5xl md:text-6xl font-bold text-[#004030] mb-4">
              Blog
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Kumpulan tulisan, risalah, dan informasi bermanfaat seputar dunia pendidikan Islam dari kami untuk Anda.
            </p>
          </div>

          {/* Kontainer untuk Kartu yang Bisa Scroll Horizontal */}
          <div className="flex overflow-x-auto space-x-8 pb-8 px-4 md:px-8">
            {blogData.map((post) => (
              <div key={post.id} className="flex-none w-[320px] bg-[#f4f0e4] rounded-md shadow-md overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                <div className="p-6 flex flex-col justify-between min-h-[200px]">
                  <div>
                    <h3 className="text-xl font-semibold text-[#004030] mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
  {(() => {
    const words = post.excerpt.split(' ');
    if (words.length > 7) {
      return words.slice(0, 7).join(' ') + '...';
    }
    return post.excerpt;
  })()}
</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-500">
  Ditulis oleh{' '}
  {(() => {
    const words = post.author.split(' ');
    if (words.length > 2) {
      return (
        <>
          {words.slice(0, 2).join(' ')}
          <br />
          {words.slice(2).join(' ')}
        </>
      );
    }
    return post.author;
  })()}
</p>
                    <button
                      onClick={() => setSelectedArticle(post)}
                      className="bg-[#004030] text-[#f4f0e4] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#2d4732] transition-colors"
                    >
                      Baca
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- POPUP / MODAL ARTIKEL --- */}
      <AnimatePresence>
        {selectedArticle && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-[99]"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setSelectedArticle(null)}
            />

            {/* Konten Modal */}
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                className="bg-[#f4f0e4] rounded-lg shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-52 object-cover rounded-t-lg" />
                <div className="p-8 overflow-y-auto">
                  <h2 className="text-3xl font-bold text-[#004030] mb-4">{selectedArticle.title}</h2>
                  <p className="text-sm text-gray-500 mb-6">Ditulis oleh {selectedArticle.author}</p>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
  {selectedArticle.fullContent.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ))}
</div>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 bg-white/50 backdrop-blur-sm p-2 rounded-full text-[#004030] hover:bg-[#f4f0e4] transition cursor-pointer"
                  aria-label="Tutup artikel"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Blog;