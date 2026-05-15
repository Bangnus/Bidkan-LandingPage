'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="bg-primary py-24 overflow-hidden relative">
      {/* Decorative SVG */}
      <svg className="absolute bottom-0 left-0 w-full text-white/10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="currentColor" fillOpacity="1" d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,181.3C840,171,960,181,1080,186.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          พร้อมเริ่มต้นการเดินทาง <br className="hidden md:block" /> ยุคใหม่หรือยัง?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto"
        >
          ดาวน์โหลดแอป Bidkan วันนี้ และสนุกกับอิสระในการเดินทางเมืองที่คล่องตัวที่สุด
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="pt-8"
        >
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="bg-white text-primary px-12 py-5 rounded-full font-bold text-xl transition-all shadow-2xl inline-block"
          >
            ดาวน์โหลดแอป Bidkan
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
