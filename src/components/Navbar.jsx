import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Helper component untuk path di dalam SVG
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    stroke="hsl(165, 100%, 13%)" // Warna #004030
    strokeLinecap="round"
    {...props}
  />
);

// Komponen Tombol Menu yang bisa beranimasi
const MenuToggle = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    className="focus:outline-none cursor-pointer"
    aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
  >
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <Path
        variants={{
          closed: { d: "M 4 6 L 20 6" },
          open: { d: "M 6 18 L 18 6" }
        }}
        transition={{ duration: 0.4 }}
      />
      <Path
        d="M 4 12 L 20 12"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.2 }}
      />
      <Path
        variants={{
          closed: { d: "M 4 18 L 20 18" },
          open: { d: "M 6 6 L 18 18" }
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.svg>
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang kami', href: '#about' },
    { name: 'Program', href: '#program' },
    { name: 'Blog', href: '#blog' },
    { name: 'Kontak', href: '#kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Perbaikan untuk mencegah layout shift (jiggle) saat menu terbuka
  useEffect(() => {
    if (isOpen) {
      // Hitung lebar scrollbar sebelum disembunyikan
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Terapkan padding untuk mengkompensasi lebar scrollbar
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      // Baru sembunyikan overflow
      document.body.style.overflow = 'hidden';
    }

    // Fungsi cleanup untuk mengembalikan style seperti semula
    return () => {
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Varian untuk item di Navbar Desktop
  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  // --- PERUBAHAN DI BLOK INI ---
  // Varian untuk kontainer Menu Mobile (animasi slide dari kanan ke kiri)
  const menuVariants = {
    hidden: {
      opacity: 0,
      x: '100vw' // Mulai sepenuhnya di luar layar kanan
    },
    visible: {
      opacity: 1,
      x: 0, // Berhenti di posisi tengah/awal
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      x: '100vw', // Keluar sepenuhnya ke kanan
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 40 
      },
    },
  };
  // --- AKHIR PERUBAHAN ---

  // Varian untuk setiap link di dalam Menu Mobile
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <>
      {/* Navbar Utama */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isOpen
            ? 'bg-transparent shadow-none'
            : scrolled
            ? 'backdrop-blur-md bg-[#f4f0e4]/70 shadow-md'
            : 'bg-[#F4F0E4]'
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-10 lg:px-14 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="./logo.png" alt="Logo rumah belajar Ibnu Abbas" className="w-20 h-auto" />
          </div>

          {/* Navigasi Desktop */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-[#004030] hover:text-[#273b36] text-md font-medium relative group"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                {link.name}
                <span className="absolute left-0 -bottom-2 h-[3px] bg-gradient-to-r from-[#004030] to-[#6db192] w-0 group-hover:w-full rounded-full transition-all duration-300 origin-left"></span>
              </motion.a>
            ))}
          </div>

          {/* Tombol Login Desktop */}
          <motion.button
            className="hidden md:block bg-[#004030] hover:bg-[#2d4732] text-white px-8 py-3 rounded-md font-semibold shadow-sm transition-colors duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>

          {/* Tombol Menu Mobile */}
          <div className="md:hidden">
            <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#F4F0E4] z-[49] flex flex-col items-center justify-center md:hidden px-6"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Navigasi di dalam Menu Mobile */}
            <nav className="flex flex-col items-center space-y-6 text-center">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-[#3a5a40] text-3xl font-semibold hover:text-[#2d4732] transition-colors"
                  variants={linkVariants}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.button
                type="button"
                className="bg-[#004030] hover:bg-[#2d4732] text-white px-10 py-4 rounded-md font-semibold shadow-md text-2xl mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={linkVariants}
                onClick={() => setIsOpen(false)}
              >
                Login
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;