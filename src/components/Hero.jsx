import { ArrowDownToDot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id='hero'
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-[#f4f0e4]"
      style={{
        backgroundImage: `url('/foto1.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70  z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 mt-32"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-lg md:text-xl font-medium mb-2">
          Selamat Datang di website Resmi
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Rumah Belajar Ibnu Abbas
        </h1>
        <p className="text-sm md:text-lg font-light text-gray-200 max-w-xl mx-auto">
          Rumah pendidikan karakter bermanhaj Salafus Sholih dengan pemahaman Salaf al-Ummah
        </p>

        {/* Scroll Icon */}
        <div className="mt-10 flex justify-center">
          <a href="#about">
            <div className="w-12 h-15 bg-[#004030] hover:bg-[#2d4732] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
              <ArrowDownToDot className="animate-bounce" />
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
