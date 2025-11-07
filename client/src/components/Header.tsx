import React from 'react';
import Link from 'next/link';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXing } from "react-icons/fa";


function Header() {
  return (
    <header className='flex flex-row w-full h-[5rem] bg-zinc-950 items-center *:p-3 '>
        <nav className='flex flex-row justify-between w-full items-centerbvbh'>
            <h1 className="font-permanent_marker text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">Portfolio</h1>

            <ul className='flex flex-row *:m-2'>
                <li><Link href="/" className="font-mono">Home</Link></li>
                <li><Link href="/tech-stack" className="font-mono">Skills</Link></li>
                {/* <li><Link href="/projects" className="font-mono">Projects</Link></li> */}
                <li><Link href="/contact" className="font-mono">Contact</Link></li>
            </ul>
            <nav>
                <ul className='flex flex-row *:m-2 text-white'>
                    <li>
                        <Link href="https://www.linkedin.com/in/renato-de-bakker-400543360/" target='_blank'><CiLinkedin /></Link>
                    </li>
                    <li>
                        <Link href="https://github.com/P-Renato" target='_blank'><FaGithub /></Link>
                    </li>
                    <li>
                        <Link href="https://www.xing.com/profile/Renato_deBakker/web_profiles" target='_blank'><FaXing /></Link>
                    </li>
                </ul>
            </nav>
        </nav>
    </header>
  )
}

export default Header
