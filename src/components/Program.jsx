import React from 'react';
import { motion } from 'framer-motion';

// Data untuk kartu program, agar mudah diubah dan ditambah
const programData = [
  {
    title: 'Ibtidaiyyah',
    description: 'Program pendidikan tingkat dasar yang setara dengan Sekolah Dasar (SD), dengan fokus pada penanaman aqidah, akhlak, hafalan Al-Qur\'an, dan dasar-dasar ilmu syar\'i serta pengetahuan umum.',
  },
  {
    title: 'Mutawassithoh',
    description: 'Jenjang pendidikan menengah pertama yang setara dengan Sekolah Menengah Pertama (SMP). Kurikulum mengintegrasikan ilmu syar\'i yang lebih mendalam dengan ilmu pengetahuan modern untuk membentuk pribadi yang seimbang.',
  },
  {
    title: 'Tsanawiyyah',
    description: 'Tingkat pendidikan menengah atas yang setara dengan Sekolah Menengah Atas (SMA). Siswa dipersiapkan untuk melanjutkan ke jenjang perguruan tinggi dengan pemahaman agama yang kuat dan wawasan global.',
  },
];

// Varian animasi untuk grid kartu
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda animasi antar kartu
    },
  },
};

// Varian animasi untuk setiap kartu
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Program = () => {
  return (
    <section
      id="program"
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/foto3.jpg')" }} // GANTI dengan path gambar Anda
    >
      {/* Overlay gelap untuk kontras */}
      <div className="absolute inset-0 bg-[#004030]/70"></div>

      {/* Kontainer utama di atas overlay */}
      <div className="relative container mx-auto text-center px-6 md:px-10 lg:px-14">
        
        {/* Judul dan Deskripsi Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#f4f0e4] mb-4">
            Program
          </h2>
          <p className="max-w-3xl mx-auto text-[#f4f0e4] text-lg leading-relaxed mb-16">
            Kami menyediakan jenjang pendidikan yang berkesinambungan dan terstruktur untuk memastikan perkembangan akademis dan spiritual setiap santri secara optimal.
          </p>
        </motion.div>

        {/* Grid untuk Kartu Program */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {programData.map((program, index) => (
            <motion.div
              key={index}
              className="bg-[#f4f0e4] p-8 rounded-lg shadow-xl text-center flex flex-col"
              variants={cardVariants}
            >
              <h3 className="text-3xl font-semibold text-[#004030] mb-4">
                {program.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Program;