import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";

import Image from "next/image";
import Link from "next/link";
export default function Prodcut() {
  const [brand, setBrand] = useState(null);
  const [label, setLabel] = useState(null);
  const [check1, setCheck1] = useState("brand");
  const [check, setCheck] = useState(brand || null);
  const [checkImg, setCheckImg] = useState(true);

  const data = [
    {
      name: "Lamborghini Aventador 2023",
      details:
        "Lamborghini Aventador 2023 เป็นซูเปอร์คาร์สมรรถนะสูงที่ใครๆ ก็ต้องเหลียวมอง มันมีเครื่องยนต์ V12 730 แรงม้า ขับเคลื่อนสี่ล้อ และทำเวลา 0-60 ไมล์ต่อชั่วโมงได้อย่างน่าประทับใจในเวลาเพียง 2.8 วินาที ภายในได้รับการอัพเกรดด้วยสิ่งอำนวยความสะดวกที่หรูหราทันสมัย เช่น พวงมาลัยหุ้มหนัง แผงหน้าปัดดิจิตอลเต็มรูปแบบ และเทคโนโลยีช่วยเหลือผู้ขับขี่ขั้นสูง ด้วยการออกแบบที่มีสไตล์และวิศวกรรมที่ล้ำสมัย Lamborghini Aventador 2023 จึงมั่นใจได้ว่าจะเป็นหนึ่งในรถยนต์ที่เป็นที่ต้องการมากที่สุดในตลาด",
      price: "46,500,000",
      label: "รถมือ 2",
      color: "Red",
      km: "10,000",
      brand: "Lamborghini",
      imageMain:
        "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGFtYm9yZ2hpbmklMjBBdmVudGFkb3J8ZW58MHx8MHx8fDA%3D",
      image: [
        {
          img: "https://images.unsplash.com/photo-1618846446712-a4eda2adc05f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFtYm9yZ2hpbmklMjBBdmVudGFkb3J8ZW58MHx8MHx8fDA%3D",
        },
        {
          img: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGFtYm9yZ2hpbmklMjBBdmVudGFkb3J8ZW58MHx8MHx8fDA%3D",
        },
      ],
      featured: true,
      type: {
        door: "4 ประตู",
        CarClass: "sports car",
        energy: "น้ำมัน",
      },
    },
    {
      name: "Honda HR-V 2024",
      details:
        "Honda HR-V (ฮอนด้า เอชอาร์-วี 2024) รถยนต์ Crossover SUV ขนาดเล็ก ทรงคูเป้ ตัวถัง 5 ประตู 5 ที่นั่ง บอดี้ภายนอกโดดเด่นด้วยดีไซน์สปอร์ตพรีเมียม ภายในตกแต่งอย่างทันสมัย ครบครันด้วยฟีเจอร์อำนวยความสะดวกต่าง ๆ และเทคโนโลยีความปลอดภัยอัจฉริยะ Honda SENSING พร้อมขับเคลื่อนด้วยระบบฟูลไฮบริด e:HEV อัตราสิ้นเปลืองเฉลี่ย 25.6 กิโลเมตร/ลิตร",
      price: "1,179,000",
      label: "รถมือ 1",
      color: "Red",
      km: "10,000",
      brand: "Honda",
      imageMain:
        "https://images.unsplash.com/photo-1609904403133-c858367c09af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhvbmRhfGVufDB8fDB8fHww",
      image: [
        {
          img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SG9uZGF8ZW58MHx8MHx8fDA%3D",
        },
        {
          img: "https://images.unsplash.com/photo-1609904403133-c858367c09af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhvbmRhfGVufDB8fDB8fHww",
        },
      ],
      featured: true,
      type: {
        door: "4 ประตู",
        CarClass: "รถเก๋ง",
        energy: "น้ำมัน",
      },
    },
    {
      name: "Nissan KICKS e-POWER 2024",
      details:
        "สนุกเร้าใจไปกับรถยนต์อเนกประสงค์ Nissan KICKS e-POWER (นิสสัน คิกส์ อี-พาวเวอร์) รถยนต์ไฮบริดอเนกประสงค์ขนาดเล็ก 5 ประตู 5 ที่นั่ง ขับเคลื่อนด้วยไฟฟ้าล้วน โดดเด่นภายใต้ลุคใหม่สุดสปอร์ต เท่ หรู สไตล์พรีเมียมทูโทน ตอบสนองทุกความเร็วที่ต้องการด้วยเทคโนโลยี e-POWER ขับเคลื่อนด้วยพลังงานไฟฟ้าล้วน โดยติดตั้งเครื่องยนต์เบนซินเพื่อสร้างกระแสไฟในตัว ทำให้ประหยัดน้ำมันมากกว่าไฮบริดทั่วไป โดยมีอัตราสิ้นเปลืองเฉลี่ย 23.8 กิโลเมตร/ลิตร",
      price: "979,900",
      label: "รถมือ 1",
      color: "Blue",
      km: "10,000",
      brand: "Nissan",
      imageMain:
        "https://images.unsplash.com/photo-1611953070713-6e5fb4b97b66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Tmlzc2FufGVufDB8fDB8fHww",
      image: [
        {
          img: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pc3NhbnxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          img: "https://images.unsplash.com/photo-1611953070713-6e5fb4b97b66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Tmlzc2FufGVufDB8fDB8fHww",
        },
      ],
      featured: true,
      type: {
        door: "4 ประตู",
        CarClass: "รถเก๋ง",
        energy: "น้ำมัน",
      },
    },
    {
      name: "BMW 2 Series 2024",
      details:
        "BMW 2 Series (บีเอ็มดับเบิลยู 2 ซีรีส์ 2024) ยนตรกรรมคูเป้ดีไซน์สปอร์ตดุดันที่ผสานความโฉบเฉี่ยวในคลาสคอมแพ็ก เพียบพร้อมด้วยเทคโนโลยีความปลอดภัยอันล้ำสมัย ระบบความบันเทิง และออปชันที่จะช่วยอำนวยความสะดวกระหว่างการเดินทางแบบจัดเต็ม ขับเคลื่อนด้วยสมรรถนะทรงพลัง ตอบโจทย์การผจญภัยทุกเส้นทาง มาพร้อมราคาเริ่มต้นที่ 1.99 ล้านบาท ",
      price: "1,999,000",
      label: "รถมือ 2",
      color: "Blue",
      km: "10,000",
      brand: "BMW",
      imageMain:
        "https://images.unsplash.com/photo-1603189617530-6d32306f57c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEJNV3xlbnwwfHwwfHx8MA%3D%3D",
      image: [
        {
          img: "https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qk1XfGVufDB8fDB8fHww",
        },
        {
          img: "https://images.unsplash.com/photo-1603189617530-6d32306f57c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEJNV3xlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
      featured: true,
      type: {
        door: "4 ประตู",
        CarClass: "รถเก๋ง",
        energy: "น้ำมัน",
      },
    },
    {
      name: "Mercedes-AMG EQE 53 4MATIC+",
      details:
        "รถยนต์ Mercedes-AMG EQE Saloon เป็นก้าวแรกสู่ Business-CarClass พลังงานไฟฟ้าจาก Mercedes-AMG โดยมีแรงบันดาลใจจาก Affalterbach รถยนต์สปอร์ตรุ่นนี้ถูกสร้างขึ้นจากแม่แบบที่มีความไดนามิกของรถยนต์ EQ จาก Mercedes-AMG เป็นการผสมผสานดีไซน์ Saloon และ Sport Coupé ค้นพบข้อสรุปการออกแบบภายนอกที่เน้นความสปอร์ตของรถยนต์ไฟฟ้ารุ่น Mercedes-AMG EQE 53 4MATIC+ ได้แล้ววันนี้",
      price: "5,950,000.00",
      label: "รถมือ 2",
      color: "White",
      km: "10,000",
      brand: "Mercedes-Benz",
      imageMain:
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVyY2VkZXMlMjBBTUd8ZW58MHx8MHx8fDA%3D",
      image: [
        {
          img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVyY2VkZXMlMjBBTUd8ZW58MHx8MHx8fDA%3D",
        },
        {
          img: "https://images.unsplash.com/photo-1617814065893-00757125efab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVyY2VkZXMlMjBBTUd8ZW58MHx8MHx8fDA%3D",
        },
      ],
      featured: true,
      type: {
        door: "2 ประตู",
        CarClass: "รถเก๋ง",
        energy: "น้ำมัน",
      },
    },
    {
      name: "Lamborghini Aventador 2023",
      details:
        "Lamborghini Aventador 2023 เป็นซูเปอร์คาร์สมรรถนะสูงที่ใครๆ ก็ต้องเหลียวมอง มันมีเครื่องยนต์ V12 730 แรงม้า ขับเคลื่อนสี่ล้อ และทำเวลา 0-60 ไมล์ต่อชั่วโมงได้อย่างน่าประทับใจในเวลาเพียง 2.8 วินาที ภายในได้รับการอัพเกรดด้วยสิ่งอำนวยความสะดวกที่หรูหราทันสมัย เช่น พวงมาลัยหุ้มหนัง แผงหน้าปัดดิจิตอลเต็มรูปแบบ และเทคโนโลยีช่วยเหลือผู้ขับขี่ขั้นสูง ด้วยการออกแบบที่มีสไตล์และวิศวกรรมที่ล้ำสมัย Lamborghini Aventador 2023 จึงมั่นใจได้ว่าจะเป็นหนึ่งในรถยนต์ที่เป็นที่ต้องการมากที่สุดในตลาด",
      price: "46,500,000",
      label: "รถมือ 2",
      color: "Red",
      km: "10,000",
      brand: "Lamborghini",
      imageMain:
        "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGFtYm9yZ2hpbmklMjBBdmVudGFkb3J8ZW58MHx8MHx8fDA%3D",
      image: [
        {
          img: "https://images.unsplash.com/photo-1618846446712-a4eda2adc05f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFtYm9yZ2hpbmklMjBBdmVudGFkb3J8ZW58MHx8MHx8fDA%3D",
        },
        {
          img: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGFtYm9yZ2hpbmklMjBBdmVudGFkb3J8ZW58MHx8MHx8fDA%3D",
        },
      ],
      featured: true,
      type: {
        door: "2 ประตู",
        CarClass: "sports car",
        energy: "น้ำมัน",
      },
    },
    {
      name: "Honda HR-V 2024",
      details:
        "Honda HR-V (ฮอนด้า เอชอาร์-วี 2024) รถยนต์ Crossover SUV ขนาดเล็ก ทรงคูเป้ ตัวถัง 5 ประตู 5 ที่นั่ง บอดี้ภายนอกโดดเด่นด้วยดีไซน์สปอร์ตพรีเมียม ภายในตกแต่งอย่างทันสมัย ครบครันด้วยฟีเจอร์อำนวยความสะดวกต่าง ๆ และเทคโนโลยีความปลอดภัยอัจฉริยะ Honda SENSING พร้อมขับเคลื่อนด้วยระบบฟูลไฮบริด e:HEV อัตราสิ้นเปลืองเฉลี่ย 25.6 กิโลเมตร/ลิตร",
      price: "1,179,000",
      label: "รถมือ 1",
      color: "Red",
      km: "10,000",
      brand: "Honda",
      imageMain:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SG9uZGF8ZW58MHx8MHx8fDA%3D",
      image: [
        {
          img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SG9uZGF8ZW58MHx8MHx8fDA%3D",
        },
        {
          img: "https://images.unsplash.com/photo-1609904403133-c858367c09af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhvbmRhfGVufDB8fDB8fHww",
        },
      ],
      featured: true,
      type: {
        door: "4 ประตู",
        CarClass: "รถเก๋ง",
        energy: "น้ำมัน",
      },
    },
    {
      name: "Nissan KICKS e-POWER 2024",
      details:
        "สนุกเร้าใจไปกับรถยนต์อเนกประสงค์ Nissan KICKS e-POWER (นิสสัน คิกส์ อี-พาวเวอร์) รถยนต์ไฮบริดอเนกประสงค์ขนาดเล็ก 5 ประตู 5 ที่นั่ง ขับเคลื่อนด้วยไฟฟ้าล้วน โดดเด่นภายใต้ลุคใหม่สุดสปอร์ต เท่ หรู สไตล์พรีเมียมทูโทน ตอบสนองทุกความเร็วที่ต้องการด้วยเทคโนโลยี e-POWER ขับเคลื่อนด้วยพลังงานไฟฟ้าล้วน โดยติดตั้งเครื่องยนต์เบนซินเพื่อสร้างกระแสไฟในตัว ทำให้ประหยัดน้ำมันมากกว่าไฮบริดทั่วไป โดยมีอัตราสิ้นเปลืองเฉลี่ย 23.8 กิโลเมตร/ลิตร",
      price: "979,900",
      label: "รถมือ 1",
      color: "Blue",
      km: "10,000",
      brand: "Nissan",
      imageMain:
        "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pc3NhbnxlbnwwfHwwfHx8MA%3D%3D",
      image: [
        {
          img: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pc3NhbnxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          img: "https://images.unsplash.com/photo-1611953070713-6e5fb4b97b66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Tmlzc2FufGVufDB8fDB8fHww",
        },
      ],
      featured: true,
      type: {
        door: "4 ประตู",
        CarClass: "รถเก๋ง",
        energy: "น้ำมัน",
      },
    },
    {
      name: "BMW 2 Series 2024",
      details:
        "BMW 2 Series (บีเอ็มดับเบิลยู 2 ซีรีส์ 2024) ยนตรกรรมคูเป้ดีไซน์สปอร์ตดุดันที่ผสานความโฉบเฉี่ยวในคลาสคอมแพ็ก เพียบพร้อมด้วยเทคโนโลยีความปลอดภัยอันล้ำสมัย ระบบความบันเทิง และออปชันที่จะช่วยอำนวยความสะดวกระหว่างการเดินทางแบบจัดเต็ม ขับเคลื่อนด้วยสมรรถนะทรงพลัง ตอบโจทย์การผจญภัยทุกเส้นทาง มาพร้อมราคาเริ่มต้นที่ 1.99 ล้านบาท ",
      price: "1,999,000",
      label: "รถมือ 2",
      color: "Blue",
      km: "10,000",
      brand: "BMW",
      imageMain:
        "https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qk1XfGVufDB8fDB8fHww",
      image: [
        {
          img: "https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qk1XfGVufDB8fDB8fHww",
        },
        {
          img: "https://images.unsplash.com/photo-1603189617530-6d32306f57c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEJNV3xlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
      featured: false,
      type: {
        door: "4 ประตู",
        CarClass: "รถเก๋ง",
        energy: "น้ำมัน",
      },
    },
    {
      name: "Mercedes-AMG EQE 53 4MATIC+",
      details:
        "รถยนต์ Mercedes-AMG EQE Saloon เป็นก้าวแรกสู่ Business-CarClass พลังงานไฟฟ้าจาก Mercedes-AMG โดยมีแรงบันดาลใจจาก Affalterbach รถยนต์สปอร์ตรุ่นนี้ถูกสร้างขึ้นจากแม่แบบที่มีความไดนามิกของรถยนต์ EQ จาก Mercedes-AMG เป็นการผสมผสานดีไซน์ Saloon และ Sport Coupé ค้นพบข้อสรุปการออกแบบภายนอกที่เน้นความสปอร์ตของรถยนต์ไฟฟ้ารุ่น Mercedes-AMG EQE 53 4MATIC+ ได้แล้ววันนี้",
      price: "5,950,000.00",
      label: "รถมือ 2",
      color: "White",
      km: "10,000",
      brand: "Mercedes-Benz",
      imageMain:
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVyY2VkZXMlMjBBTUd8ZW58MHx8MHx8fDA%3D",
      image: [
        {
          img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVyY2VkZXMlMjBBTUd8ZW58MHx8MHx8fDA%3D",
        },
        {
          img: "https://images.unsplash.com/photo-1617814065893-00757125efab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVyY2VkZXMlMjBBTUd8ZW58MHx8MHx8fDA%3D",
        },
      ],
      featured: false,
      type: {
        door: "2 ประตู",
        CarClass: "รถเก๋ง",
        energy: "น้ำมัน",
      },
    },
    {
      name: "BMW 2 Series 2024",
      details:
        "BMW 2 Series (บีเอ็มดับเบิลยู 2 ซีรีส์ 2024) ยนตรกรรมคูเป้ดีไซน์สปอร์ตดุดันที่ผสานความโฉบเฉี่ยวในคลาสคอมแพ็ก เพียบพร้อมด้วยเทคโนโลยีความปลอดภัยอันล้ำสมัย ระบบความบันเทิง และออปชันที่จะช่วยอำนวยความสะดวกระหว่างการเดินทางแบบจัดเต็ม ขับเคลื่อนด้วยสมรรถนะทรงพลัง ตอบโจทย์การผจญภัยทุกเส้นทาง มาพร้อมราคาเริ่มต้นที่ 1.99 ล้านบาท ",
      price: "1,999,000",
      label: "รถมือ 2",
      color: "Blue",
      km: "10,000",
      brand: "BMW",
      imageMain:
        "https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qk1XfGVufDB8fDB8fHww",
      image: [
        {
          img: "https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qk1XfGVufDB8fDB8fHww",
        },
        {
          img: "https://images.unsplash.com/photo-1603189617530-6d32306f57c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEJNV3xlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
      featured: true,
      type: {
        door: "4 ประตู",
        CarClass: "รถเก๋ง",
        energy: "น้ำมัน",
      },
    },
    {
      name: "Mercedes-AMG EQE 53 4MATIC+",
      details:
        "รถยนต์ Mercedes-AMG EQE Saloon เป็นก้าวแรกสู่ Business-CarClass พลังงานไฟฟ้าจาก Mercedes-AMG โดยมีแรงบันดาลใจจาก Affalterbach รถยนต์สปอร์ตรุ่นนี้ถูกสร้างขึ้นจากแม่แบบที่มีความไดนามิกของรถยนต์ EQ จาก Mercedes-AMG เป็นการผสมผสานดีไซน์ Saloon และ Sport Coupé ค้นพบข้อสรุปการออกแบบภายนอกที่เน้นความสปอร์ตของรถยนต์ไฟฟ้ารุ่น Mercedes-AMG EQE 53 4MATIC+ ได้แล้ววันนี้",
      price: "5,950,000.00",
      label: "รถมือ 2",
      color: "White",
      km: "10,000",
      brand: "Mercedes-Benz",
      imageMain:
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVyY2VkZXMlMjBBTUd8ZW58MHx8MHx8fDA%3D",
      image: [
        {
          img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVyY2VkZXMlMjBBTUd8ZW58MHx8MHx8fDA%3D",
        },
        {
          img: "https://images.unsplash.com/photo-1617814065893-00757125efab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVyY2VkZXMlMjBBTUd8ZW58MHx8MHx8fDA%3D",
        },
      ],
      featured: true,
      type: {
        door: "2 ประตู",
        CarClass: "รถเก๋ง",
        energy: "น้ำมัน",
      },
    },
  ];

  const getBrand = () => {
    let uniqueEnergy = new Set();

    data.forEach((car) => {
      uniqueEnergy.add(car.brand);
    });

    return uniqueEnergy;
  };

  useEffect(() => {
    const updatedUniqueEnergy = getBrand();
    setBrand(Array.from(updatedUniqueEnergy));
  }, []);

  const getLabel = () => {
    let uniqueEnergy = new Set();

    data.forEach((car) => {
      uniqueEnergy.add(car.type.CarClass);
      uniqueEnergy.add(car.type.door);
      uniqueEnergy.add(car.type.energy);
    });

    return uniqueEnergy;
  };

  useEffect(() => {
    const updatedUniqueEnergy = getLabel();
    setLabel(Array.from(updatedUniqueEnergy));
  }, []);

  useEffect(() => {
    if (check1 === "brand") {
      setCheckImg(false);
      setCheck(brand);
    } else {
      setCheckImg(true);
      setCheck(label);
    }
  }, [check1]);

  return (
    <Layout>
      <div>
        <div className=" my-10">
          <div className="w-72">
            <Select
              label="เลือกหัวข้อ"
              color="red"
              onChange={(value) => setCheck1(value)}
              value={check1}
              className=" !text-black"
            >
              <Option value={"brand"}>เลือกรถจาก Brand</Option>
              <Option value={"label"}>เลือกรถจาก ประเภท</Option>
            </Select>
          </div>
        </div>

        <Tabs value={"Lamborghini"} orientation="vertical">
          <TabsHeader
            className=" !flex !flex-col    bg-black "
            indicatorProps={{
              className: "bg-[#e11d48] shadow-xl  ",
            }}
          >
            {check && check.length > 0
              ? check.map((brand, index) => (
                  <Tab key={index} value={brand}>
                    <div className="p-2  w-full  mr-10 my-2 !text-white">
                      {brand}
                    </div>
                  </Tab>
                ))
              : brand &&
                brand.length > 0 &&
                brand.map((brand1, index) => (
                  <Tab
                    key={index}
                    className="p-2 my-2 !text-white"
                    value={brand1}
                  >
                    {brand1}
                  </Tab>
                ))}
          </TabsHeader>
          <TabsBody className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map(
              (
                {
                  brand,
                  image,
                  name,
                  id,
                  label,
                  type: { door, energy, CarClass },
                },
                index
              ) => (
                <TabPanel
                  className="grid grid-cols-1 gap-4"
                  key={index}
                  value={checkImg ? door : brand}
                >
                  <div className="group block relative">
                    <Image
                      width={1000}
                      height={100}
                      src={image[0].img}
                      alt=""
                      className="aspect-square w-full rounded object-cover group-hover:opacity-0"
                    />
                    <Image
                      width={1000}
                      height={100}
                      src={image[1].img}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-opacity-80 bg-white group-hover:opacity-100">
                      <div>
                        <p className="text-center text-lg my-10">{name}</p>
                        <Button color="red">
                          <Link
                            href={`/product/${id}`}
                            className="text-white text-sm"
                          >
                            เพิ่มเติมเกี่ยวกับตัวรถ
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              )
            )}
          </TabsBody>
        </Tabs>
      </div>
    </Layout>
  );
}
