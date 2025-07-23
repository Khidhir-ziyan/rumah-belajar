import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  // Handler untuk form, sementara hanya mencegah reload halaman
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Fitur pengiriman pesan belum diaktifkan.');
  };

  return (
    <footer id="kontak" className="bg-[#004030] text-gray-200">
      <div className="container mx-auto px-6 md:px-10 lg:px-14 pt-16 pb-8">
        
        {/* Konten Utama Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          
          {/* Kolom Kiri: Info Alamat & Sosial Media */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" flex flex-col gap-4 justify-center"
          >
            <h3 className="text-3xl font-bold text-[#f4f0e4] mb-4">
              Rumah Belajar
              <br />
              Ibnu Abbas
            </h3>
            <p className="max-w-sm leading-relaxed text-[#f4f0e4]">
              Jalan Fatahillah no.XX rt 05 rw 09 Tanah Baru, Beji
              <br />
              Depok
            </p>
            <div className="flex space-x-4 mt-6">
  {/* Link WhatsApp */}
  <a 
    href="https://wa.me/6281234567890" 
    aria-label="WhatsApp" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white/80 hover:text-white transition-colors"
  >
    <FaWhatsapp size={24} />
  </a>

  {/* Link Instagram */}
  <a 
    href="https://instagram.com/rumahbelajar" 
    aria-label="Instagram" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white/80 hover:text-white transition-colors"
  >
    <FaInstagram size={24} />
  </a>

  {/* Link Lokasi Peta */}
  <a 
    href="https://maps.app.goo.gl/uRDC21XKSRLRnHbV9" 
    aria-label="Lokasi Peta" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white/80 hover:text-white transition-colors"
  >
    <FaMapMarkerAlt size={24} />
  </a>
</div>
          </motion.div>

          {/* Kolom Kanan: Form Kontak */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Masukkan email anda"
                required
                className="w-full p-4 rounded-md bg-[#2d4732]/50 text-[#f4f0e4] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6db192] transition-all"
              />
              <textarea
                placeholder="Tuliskan pesan anda"
                required
                rows="5"
                className="w-full p-4 rounded-md bg-[#2d4732]/50 text-[#f4f0e4] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6db192] transition-all"
              ></textarea>
              <button
                type="submit"
                className="bg-[#f4f0e4] text-[#004030] font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors w-full"
              >
                Kirim
              </button>
            </form>
          </motion.div>
        </div>

        {/* Garis Pemisah & Copyright */}
        <div className="border-t border-white/20 pt-8 mt-12 text-center">
          <p className="text-sm text-white/70">
            Copyright @2025 - Rumah Belajar Ibnu Abbas
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;