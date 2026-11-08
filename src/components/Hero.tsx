'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <header className="bg-gray-50 pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden relative">
      {/* Background SVG Wave */}
      <svg className="absolute bottom-0 left-0 w-full text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="currentColor" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left space-y-6"
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-semibold text-sm tracking-wide">
              การเดินทางยุคใหม่ เริ่มต้นที่นี่
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-dark leading-[1.1]">
              เช่าจักรยานไฟฟ้า <br /> 
              <span className="text-primary relative inline-block">
                ง่ายๆ แค่ปลายนิ้ว
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-2 bg-primary/20 -z-10"
                />
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Bidkan มอบอิสระในการเดินทางเมืองที่คล่องตัว สะดวก และเป็นมิตรต่อสิ่งแวดล้อม 
              ปลดล็อก ค้นหา และไปถึงจุดหมายได้ไวขึ้น
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={process.env.NEXT_PUBLIC_CLIENT_APP_URL || "http://localhost:3000"}
                className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition shadow-lg flex items-center justify-center gap-2"
              >
                เริ่มปั่นวันนี้ <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10" />
            <img 
              src="https://image.made-in-china.com/202f0j00JuZcTmNgMdrD/Fu-Long-Electric-Vehicle-350W-14-Inch-Electric-Bicycle-500W-E-Bike-Bicycle.webp" 
              alt="Bidkan Electric Bike" 
              className="w-full max-w-md mx-auto rounded-[3rem] shadow-2xl transition duration-500 hover:rotate-0"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://picsum.photos/600/400?random=1';
              }}
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
