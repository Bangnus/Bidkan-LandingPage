import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bidkan | เช่าจักรยานไฟฟ้า ง่ายๆ แค่ปลายนิ้ว",
  description: "Bidkan มอบอิสระในการเดินทางเมืองที่คล่องตัว สะดวก และเป็นมิตรต่อสิ่งแวดล้อม ปลดล็อก ค้นหา และไปถึงจุดหมายได้ไวขึ้น",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${kanit.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
