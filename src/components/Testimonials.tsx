'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "คุณพีรพัฒน์",
    text: "ชอบมากครับ แอปหารถง่ายมาก สแกนจ่ายเงินปุ๊บ รถปลดล็อกปั๊บ ทันใจสุดๆ ไม่ต้องเสียเวลารอนานเหมือนบริการอื่น",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "คุณนัท",
    text: "เป็นวิธีเดินทางที่สะดวกและประหยัดเวลามากค่ะ จักรยานขี่ง่าย ระบบหลังบ้านไวมาก คืนรถก็ง่าย",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-dark"
          >
            ผู้ใช้พูดถึงเราว่าอย่างไร
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={review.img} 
                alt={review.name} 
                className="w-24 h-24 rounded-full flex-shrink-0 shadow-xl object-cover ring-4 ring-white"
              />
              <div className="space-y-4 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg italic leading-relaxed">
                  "{review.text}"
                </p>
                <p className="text-xl font-bold text-dark">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
