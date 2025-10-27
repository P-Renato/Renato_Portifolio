'use client';

import { useEffect, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import RenatoImage from "@/assets/Renato_image.png";

export default function HeroSection() {
  const [time, setTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const birthDate = new Date(1985, 6, 5); 
    
    const updateCounter = () => {
      const now = new Date();
      let years = now.getFullYear() - birthDate.getFullYear();
      let months = now.getMonth() - birthDate.getMonth();
      let days = now.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setTime({
        years,
        months,
        days,
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  interface HeartIconProps {
  className?: string;
}

 function HeartIcon({ className = '' }: HeartIconProps) {
  return (
    <span className={className}>
      <FaHeart />
    </span>
  );
}

  return (
    <main className='w-full h-screen'>
        <section className='flex h-[70%] w-full justify-around items-center px-8 '>
            <nav className='flex flex-col'>
                <p className="font-mono text-lg mb-2">Hello,</p>
                <p className="font-mono text-xl mb-2">
                    My name is <span className="font-permanent_marker text-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">Renato de Bakker</span>
                </p>
                <p className="font-mono text-lg mb-4 italic flex">and I am a Fullstack Web Developer</p>
                
            </nav>
        
            <div>
                <Image src={RenatoImage} alt="My-Image" width={200} height={200} />
            </div>
        </section>
        <aside className="p-6 bg-gradient-to-br from-gray-900 to-blue-900 rounded-lg shadow-2xl w-[40%] m-auto">
            <p className="font-mono text-lg mb-4">
                My <span><HeartIcon   className="inline-block text-red-400 animate-pulse" /></span> is beating for 
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className="time-box">
                    <span className="num">{formatNumber(time.years)}</span>
                    <span className="label">Years</span>
                </div>
                <div className="time-box">
                    <span className="num">{formatNumber(time.months)}</span>
                    <span className="label">Months</span>
                </div>
                <div className="time-box">
                    <span className="num">{formatNumber(time.days)}</span>
                    <span className="label">Days</span>
                </div>
                <div className="time-box">
                    <span className="num">{formatNumber(time.hours)}</span>
                    <span className="label">Hours</span>
                </div>
                <div className="time-box">
                    <span className="num">{formatNumber(time.minutes)}</span>
                    <span className="label">Minutes</span>
                </div>
                <div className="time-box">
                    <span className="num">{formatNumber(time.seconds)}</span>
                    <span className="label">Seconds</span>
                </div>
            </div>
        </aside>
        
    </main>
  );
}