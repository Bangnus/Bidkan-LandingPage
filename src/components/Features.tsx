'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Zap, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Real-time Location",
    description: "ค้นหาจักรยานใกล้ตัวได้ทันทีผ่านแอป ข้อมูลพิกัดแม่นยำ ลื่นไหล (Powered by MQTT) ไม่ต้องเสียเวลารอนาน"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Seamless Unlocking",
    description: "สแกน QR Code จ่ายเงินผ่าน PromptPay เงินเข้าปุ๊บ รถปลดล็อกปั๊บ (Webhook อัจฉริยะ) ไม่ต้องรอแอดมินยืนยัน"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "High Performance API",
    description: "ระบบหลังบ้านเสถียร รวดเร็ว รองรับผู้ใช้งานจำนวนมาก (Built with Go Fiber) ตอบสนองไวทุกการใช้งาน"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-dark"
          >
            Bidkan มีอะไรดี?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            เราไม่ใช่แค่บริการเช่าจักรยาน แต่คือระบบเคลื่อนที่อัจฉริยะที่ออกแบบมาเพื่อคุณ
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
