import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const visionMissionData = {
  vision: "Menjadi lembaga pendidikan Islam terdepan yang menghasilkan generasi qur'ani, cerdas, berakhlak mulia, dan bermanfaat bagi umat.",
  mission: [
    "Menyelenggarakan pendidikan yang berbasis Al-Qur'an dan As-Sunnah dengan pemahaman salafus shalih.",
    "Mengembangkan potensi kecerdasan intelektual, emosional, dan spiritual peserta didik secara seimbang.",
    "Membentuk karakter islami yang kuat melalui pembiasaan adab dan akhlak mulia dalam kehidupan sehari-hari.",
    "Membekali peserta didik dengan keterampilan hidup dan wawasan global untuk menghadapi tantangan zaman."
  ]
};

const About = () => {
  return (
    // 1. SECTION UTAMA: Wadah untuk background image
    <section
      id="about"
      className="relative py-20 bg-cover bg-center" // Class untuk background
      style={{ backgroundImage: "url('/foto2.jpg')" }} // Path gambar Anda
    >
      {/* 2. OVERLAY: Menutupi seluruh section, di bawah konten */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#f4f0e4] to-[#f4f0e4]/70 via-[#f4f0e4]"></div>

      {/* 3. WADAH KONTEN: Posisinya di atas overlay dan mengatur layout tengah */}
      <div className="relative container mx-auto px-6 md:px-10 lg:px-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* 4. KOLOM KIRI (sudah bersih dari background) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Box konten di dalam kolom kiri untuk readability */}
            <div className=" p-8 rounded-lg">
              <h2 className="text-5xl md:text-6xl font-bold text-[#004030] mb-6">
                Tentang kami
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-800">
                Rumah Belajar Ibnu Abbas adalah lembaga pendidikan yang berdedikasi untuk mencetak generasi penerus yang tidak hanya unggul dalam bidang akademis, tetapi juga memiliki pondasi aqidah yang kokoh dan akhlak yang mulia, sesuai dengan tuntunan Al-Qur'an dan Sunnah.
              </p>
            </div>
          </motion.div>

          {/* KOLOM KANAN: Visi dan Misi */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Box Visi */}
            <div className="bg-[#004030] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#f4f0e4] mb-3">
                Visi
              </h3>
              <p className="text-[#f4f0e4] leading-relaxed">
                {visionMissionData.vision}
              </p>
            </div>

            {/* Box Misi */}
            <div className="bg-[#004030] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#f4f0e4] mb-3">
                Misi
              </h3>
              <div className="space-y-3 text-[#f4f0e4] leading-relaxed">
                {visionMissionData.mission.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
