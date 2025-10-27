

'use client'

import React from 'react';
import { ReactNode } from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { VscCode } from "react-icons/vsc";
import { DiPostgresql } from "react-icons/di";
import { SiGimp } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiBun } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiNginx } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import ViteImage from "@/assets/vite.svg";
import FigmaImage from '@/assets/figma_logo_icon_147289.png'
import DaVinciImage from '@/assets/Davinci_Resolve-logo.png'
import Image from 'next/image';

interface IconWrapperProps {
  children: ReactNode;
  className?: string;
}

function IconWrapper({ children, className = '' }: IconWrapperProps) {
  return (
    <span className={className}>
      {children}
    </span>
  );
}

function TechIcons() {
  return (
    <div className=" bg-zinc-950 mx-auto p-6">
      <h1 className="font-permanent_marker text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient text-center mb-8">
        My Tech Stack
      </h1>
      
      {/* Top Row - 2 sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Front-End */}
        <section className='bg-zinc-950 rounded-lg shadow-lg p-6 border border-gray-200'>
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Front-End</h3>
          <section className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-orange-500 text-4xl">
                <FaHtml5 />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">HTML</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-blue-500 text-4xl">
                <FaCss3Alt />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">CSS</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-yellow-400 text-4xl">
                <IoLogoJavascript />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">JavaScript</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-blue-600 text-4xl">
                <SiTypescript />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">TypeScript</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-cyan-400 text-4xl">
                <FaReact />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">React</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-black text-4xl">
                <SiNextdotjs />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">Next.js</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className='text-pink-400 text-4xl'>
                <FaSass />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">SASS</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <Image src="https://staging.svgrepo.com/show/373574/ejs.svg" alt='ejs-logo' width={40} height={40}/>
              <p className="text-sm mt-2 font-medium">EJS</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-cyan-500 text-4xl">
                <SiTailwindcss />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">Tailwind</p>
            </div>
          </section>
        </section>

        {/* Back-End */}
        <section className='bg-zinc-950 rounded-lg shadow-lg p-6 border border-gray-200'>
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Back-End</h3>
          <section className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-green-600 text-4xl">
                <FaNodeJs />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">Node.js</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-gray-700 text-4xl">
                <SiExpress />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">Express</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-[#777BB4] text-4xl">
                <SiPhp />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">PHP</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-[#FF2D20] text-4xl">
                <SiLaravel />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">Laravel</p>
            </div>
          </section>
        </section>
      </div>

      {/* Bottom Row - 2 sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Technologies & Tools */}
        <section className='bg-zinc-950 rounded-lg shadow-lg p-6 border border-gray-200'>
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Technologies & Tools</h3>
          <section className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-gray-800 text-4xl">
                <FaGithub />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">GitHub</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-red-500 text-4xl">
                <SiNpm />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">NPM</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-orange-500 text-4xl">
                <FaGitAlt />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">Git</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <Image src={ViteImage} alt='vite-logo' width={30} height={30}/>
              <p className="text-sm mt-2 font-medium">Vite</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-blue-500 text-4xl">
                <VscCode />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">VS Code</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <Image src={FigmaImage} alt='Figma-logo' width={30} height={30}/>
              <p className="text-sm mt-2 font-medium">Figma</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-blue-700 text-4xl">
                <DiPostgresql />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">PostgreSQL</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-gray-700 text-4xl">
                <SiGimp />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">Gimp</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <Image src={DaVinciImage} alt='DaVinci-logo' width={30} height={30} />
              <p className="text-sm mt-2 font-medium">DaVinci Resolve</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-black text-4xl">
                <SiBun />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">Bun</p>
            </div>
          </section>
        </section>

        {/* DevOps & Testing */}
        <section className='bg-zinc-950 rounded-lg shadow-lg p-6 border border-gray-200'>
          <h3 className="text-2xl font-bold text-white mb-4 text-center">DevOps & Testing</h3>
          <section className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-blue-500 text-4xl">
                <SiDocker />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">Docker</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-green-500 text-4xl">
                <SiNginx />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">nginx</p>
            </div>
            <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <IconWrapper className="text-gray-700 text-4xl">
                <SiCypress />
              </IconWrapper>
              <p className="text-sm mt-2 font-medium">Cypress</p>
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}

export default TechIcons