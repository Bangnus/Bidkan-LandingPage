'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "1",
    title: "ค้นหาและจอง",
    desc: "เปิดแอป ค้นหาจักรยาน Bidkan ที่ใกล้ที่สุดผ่านแผนที่ Real-time"
  },
  {
    num: "2",
    title: "สแกนและจ่าย",
    desc: "สแกน QR Code ที่รถ จ่ายเงินผ่าน PromptPay ระบบจะปลดล็อกทันที"
  },
  {
    num: "3",
    title: "เริ่มต้นการปั่น",
    desc: "สนุกกับการเดินทาง คืนรถในจุดจอดที่กำหนดและถ่ายรูปยืนยัน"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-dark"
          >
            3 ขั้นตอนง่ายๆ ในการปั่น
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            เปลี่ยนวันเดิมๆ ให้คล่องตัวขึ้นภายในไม่กี่นาที
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-1 bg-primary/10 -z-0" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-primary flex items-center justify-center text-4xl font-extrabold text-primary shadow-xl group-hover:bg-primary group-hover:text-white transition-colors duration-500 mb-8">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
