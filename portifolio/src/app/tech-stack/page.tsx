import React from 'react';
import { ReactNode } from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { DiPostgresql } from "react-icons/di";
import { SiGimp } from "react-icons/si";
import ViteImage from "@/assets/vite.svg";
import FigmaImage from '@/assets/figma_logo_icon_147289.png'
import DaVinciImage from '@/assets/Davinci_Resolve-logo.png'
import Image from 'next/image';
import { FaSass } from "react-icons/fa";



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
    <div>
        <h1 className="font-permanent_marker text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient text-center m-5">My Tech Stack</h1>
        <section>
          <h3>Front-End</h3>
          <section className='border w-3xl h-[12rem]'>
            <nav className='flex flex-row flex-wrap gap-2 *:m-auto *:p-2 *:text-center  *:border items-center h-full'>
              <div  className='flex flex-col justify-center items-center rounded'>
                <IconWrapper  className="text-orange-500 text-3xl text-center">
                  <FaHtml5 />
                </IconWrapper>
                <p>HTML</p>
              </div>
              <div  className='flex flex-col justify-center items-center rounded'>
                <IconWrapper className="text-blue-500 text-3xl  text-center" >
                  <FaCss3Alt />
                </IconWrapper>
                <p>CSS</p>
              </div>
              <div className='flex flex-col justify-center items-center rounded '>
                <IconWrapper className="text-yellow-400 text-3xl text-center ">
                  <IoLogoJavascript />
                </IconWrapper>
                <p>JavaScript</p>
              </div>
              <div  className='flex flex-col justify-center items-center rounded'>
                <IconWrapper className="text-blue-600 text-3xl">
                  <SiTypescript  />
                </IconWrapper>
                <p>TypeScript</p>
              </div>
              <div  className='flex flex-col justify-center items-center rounded'>
                <IconWrapper className="text-cyan-400 text-3xl">
                  <FaReact />
                </IconWrapper>
                <p>React</p>
              </div>
              <div  className='flex flex-col justify-center items-center rounded'>
                <IconWrapper className="text-black text-3xl">
                  <RiNextjsFill />
                </IconWrapper>
                <p>Next.js</p>
              </div>
              <div  className='flex flex-col justify-center items-center rounded'>
                <IconWrapper className='text-pink-400 text-4xl'>
                  <FaSass />
                </IconWrapper>
                <p>SASS</p>
              </div>
              <div  className='flex flex-col justify-center items-center rounded'>
                <Image src="https://staging.svgrepo.com/show/373574/ejs.svg" alt='ejs-logo' width={40} height={40}/>
                <p>EJS</p>
              </div>
              <div  className='flex flex-col justify-center items-center rounded'>
                <IconWrapper  className="text-cyan-500 text-3xl">
                  <RiTailwindCssFill />
                </IconWrapper>
                <p>Tailwind</p>
              </div>
            </nav>
          </section>
        </section>

        <section>
          <h3>Back-End</h3>
          <section className='border w-3xl h-[12rem]'>
            <nav   className='flex flex-row flex-wrap gap-2 *:m-auto *:p-2 *:text-center  *:border items-center h-full'>
              <div  className='flex flex-col justify-center items-center rounded'>
                <IconWrapper  className="text-green-600 text-3xl">
                  <FaNodeJs />
                </IconWrapper>
                <p>Node.js</p>
              </div>
              <div  className='flex flex-col justify-center items-center rounded'>
                <IconWrapper className="text-gray-700 text-3xl">
                  <SiExpress />
                </IconWrapper>
                <p>Express</p>
              </div>
            </nav>
          </section>
        </section>

        <section>
          <h3>Technologies & Tools</h3>
          <nav  className='border w-3xl h-[12rem] flex flex-row flex-wrap gap-2 *:m-auto *:p-2 *:text-center  *:border'>
            <div  className='flex flex-col justify-center items-center rounded'>
              <IconWrapper className="text-gray-800 text-3xl">
                <FaGithub />
              </IconWrapper>
              <p>GitHub</p>
            </div>
            <div  className='flex flex-col justify-center items-center rounded'>
              <IconWrapper className="text-red-500 text-3xl">
                <SiNpm />
              </IconWrapper>
              <p>NPM</p>
            </div>
            <div  className='flex flex-col justify-center items-center rounded'>
              <IconWrapper className="text-orange-500 text-3xl">
                <FaGitAlt />
              </IconWrapper>
              <p>Git</p>
            </div>
            <div  className='flex flex-col justify-center items-center rounded'>
              <Image src={ViteImage} alt='vite-logo' width={30} height={30}/>
              <p>Vite</p>
            </div>
            <div  className='flex flex-col justify-center items-center rounded'>
              <IconWrapper className="text-blue-500 text-3xl">
                <VscVscode />
              </IconWrapper>
              <p>VS Code</p>
            </div>
            <div  className='flex flex-col justify-center items-center rounded'>
              <IconWrapper className="text-orange-500 text-3xl">
                <Image src={FigmaImage} alt='Fima-logo' width={30} height={30}/>
              </IconWrapper>
              <p>Figma</p>
            </div>
            <div  className='flex flex-col justify-center items-center rounded'>
              <IconWrapper className="text-blue-700 text-3xl">
                <DiPostgresql />
              </IconWrapper>
              <p>Postgresql</p>
            </div>
            <div  className='flex flex-col justify-center items-center rounded'>
              <IconWrapper className="text-gray-700 text-3xl">
                <SiGimp />
              </IconWrapper>
              <p>Gimp</p>
            </div>
            <div  className='flex flex-col justify-center items-center rounded'>
             <Image src={DaVinciImage} alt='DaVinvi-logo' width={30} height={30} />
              <p>DaVinci Resolve</p>
            </div>
          </nav>
        </section>
    </div>
  )
}

export default TechIcons