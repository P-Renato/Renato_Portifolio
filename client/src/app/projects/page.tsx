// 'use client';

// import { ReactNode, useState } from 'react';
// import clsx from 'clsx'; 
// import styles from './projects.module.css';
// import Link from 'next/link';
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import { SiTypescript } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa";
// import { SiNextdotjs } from "react-icons/si";
// import { SiTailwindcss } from "react-icons/si";
// import { SiExpress } from "react-icons/si";

// interface IconWrapperProps {
//   children: ReactNode;
//   className?: string;
// }

// function IconWrapper({ children, className = '' }: IconWrapperProps) {
//   return (
//     <span className={className}>
//       {children}
//     </span>
//   );
// }

// function Page() {
//   const [openPanel, setOpenPanel] = useState<number | null>(null);
//   const [activePanel, setActivePanel] = useState<number | null>(null);

//   const handleClick = (panelNumber: number) => {
//     console.log('Clicked panel:', panelNumber, 'Currently open:', openPanel);
//     setOpenPanel(openPanel === panelNumber ? null : panelNumber);
//   };
//   console.log('Current open panel:', openPanel);

//   const handleTransitionEnd = (e: React.TransitionEvent, panelNumber: number) => {
//     console.log('Transition ended:', e.propertyName);
//     if (['flex', 'flex-grow', 'flex-basis'].some(p => e.propertyName.includes(p))) {
//       setActivePanel(openPanel === panelNumber ? panelNumber : null);
//     }
//   };

//   return (
//     <section className=' flex justify-center items-center  bg-zinc-950 '>
//       <nav className=' flex flex-wrap w-screen h-screen  *:border-8 *:border-zinc-950 m-12  overflow-hidden'>
//         <div 
//           className={clsx(
//             styles.panel, 
//             styles.panel1,
//             openPanel === 1 && styles.open,
//             activePanel === 1 && styles.openActive
//           )}
//           onClick={() => handleClick(1)}
//           onTransitionEnd={(e) => handleTransitionEnd(e, 1)}
//         >
//           <div>
//             <p className='text-orange-700 text-3xl wcd  bg-white p-3  '>A memory game made for children with audio and text in several languages. 
//               Perfect for multi cultural families where children play whilst learning.
//               It was built with only Vanilla JavaScript.  
//             </p>
//           </div>
//           <div className=''>
//             <p className='text-violet-700 text-3xl bg-white p-3 '>Click</p> 
//           </div>
//           <div>
//             <div className='text-sky-700 text-3xl bg-white p-3 '>
//               <span className='flex flex-row'>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-orange-500 text-4xl">
//                     <FaHtml5 />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">HTML</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-blue-500 text-4xl">
//                     <FaCss3Alt />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">CSS</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-yellow-400 text-4xl">
//                     <IoLogoJavascript />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">JavaScript</p>
//                 </div>
                            
//               </span>
//               <span>
//                 <Link href="https://memory-for-kids.onrender.com"  target='_blank'>Check game page</Link>
//                 <Link href="https://github.com/P-Renato/Memory_for_kids"  target='_blank'>Check GitHub page</Link>
//               </span>
//             </div>
//           </div>

//         </div>
//         <div 
//           className={clsx(
//             styles.panel,
//             styles.panel2, 
//             openPanel === 2 && styles.open,
//             activePanel === 2 && styles.openActive
//             )}
//           onClick={() => handleClick(2)}
//           onTransitionEnd={(e) => handleTransitionEnd(e, 2)}
//         >
//           <div>
//             <p className='text-orange-700 text-3xl '>
//               This was a group project, to practice API routes, 
//               with an admin being able to update blog and event sections, 
//               with a contact form, where admin, can see it, in admin page.
//               We practice React, using Express/NodeJs for backend. 
//             </p>
//           </div>
//           <div>
//             <p className='text-violet-700 text-3xl bg-white p-3 '>anywhere</p>
//           </div>
//           <div>
//             <div className='text-sky-700 text-3xl '>
//               <span className='flex flex-row'>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-orange-500 text-4xl">
//                     <FaHtml5 />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">HTML</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-blue-500 text-4xl">
//                     <FaCss3Alt />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">CSS</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-yellow-400 text-4xl">
//                     <IoLogoJavascript />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">JavaScript</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-blue-600 text-4xl">
//                     <SiTypescript />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">TypeScript</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-cyan-400 text-4xl">
//                     <FaReact />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">React</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-black text-4xl">
//                     <SiNextdotjs />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">Next.js</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-cyan-500 text-4xl">
//                     <SiTailwindcss />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">Tailwind</p>
//                 </div>            
//               </span>


//               <span>
//                 <Link href="https://yoga-instructer-1-group-project-1.onrender.com"  target='_blank'>Check game page</Link>
//                 <Link href="https://github.com/P-Renato/yoga-instructer-1_group-project-1"  target='_blank'>Check GitHub page</Link>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div 
//           className={clsx(
//             styles.panel,
//             styles.panel3, 
//             openPanel === 3 && styles.open,
//             activePanel === 3 && styles.openActive
//             )}
//           onClick={() => handleClick(3)}
//           onTransitionEnd={(e) => handleTransitionEnd(e, 3)}
//         >
//           <div>
//              <p className='text-orange-700 text-3xl '>
//               This is a social media page for coffee lovers, 
//               where you can log in, post, find your favorite Cafes and also other coffee lovers.
//               You can also have a live chat with your coffeemates, and edit your profile
//               My final project wth 4 members on the group.
//               Epress/Bun for backend, 
//              </p>
//           </div>
//           <div>
//             <p className='text-violet-700 text-3xl bg-white p-3'>to see</p>
//           </div>
//           <div>
//             <div className='text-sky-700 text-3xl '>
//               <span className='flex flex-row'>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-orange-500 text-4xl">
//                     <FaHtml5 />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">HTML</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-blue-500 text-4xl">
//                     <FaCss3Alt />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">CSS</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-yellow-400 text-4xl">
//                     <IoLogoJavascript />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">JavaScript</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-blue-600 text-4xl">
//                     <SiTypescript />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">TypeScript</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-cyan-400 text-4xl">
//                     <FaReact />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">React</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-black text-4xl">
//                     <SiNextdotjs />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">Next.js</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-cyan-500 text-4xl">
//                     <SiTailwindcss />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">Tailwind</p>
//                 </div>            
//               </span>


//               <span>
//                 <Link href="https://coffeemates-client.onrender.com"  target='_blank'>Check game page</Link>
//                 <Link href="https://github.com/P-Renato/Coffeemates-Final_Project"  target='_blank'>Check GitHub page</Link>
//               </span>
//             </div>
//           </div>

//         </div>
//         <div 
//           className={clsx(
//             styles.panel,
//             styles.panel4, 
//             openPanel === 4 && styles.open,
//             activePanel === 4 && styles.openActive
//             )}
//           onClick={() => handleClick(4)}
//           onTransitionEnd={(e) => handleTransitionEnd(e, 4)}
//         >
//           <div>
//             <p className='text-orange-700 text-xl bg-white p-3  '>
//               This is an online shop page, that I created at the end of my course's first trimester, 
//               where I was understand more about DOM, and dynamically generating elements within the pages, 
//               using the DOM to manipulate the elements, like adding to basket, and controlling some vairables 
//               like quantitaty and delivary date, and it is only with vanilla JavaScript.
//             </p>
//           </div>
//           <div>
//             <p className='text-violet-700 text-3xl bg-white p-3'>more</p>
//           </div>
//           <div>
//             <div className='text-sky-700 text-3xl  bg-white p-3 '>
//               <span className='flex flex-row'>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-orange-500 text-4xl">
//                     <FaHtml5 />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">HTML</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-blue-500 text-4xl">
//                     <FaCss3Alt />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">CSS</p>
//                 </div>
//                 <div className='flex flex-col justify-center items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
//                   <IconWrapper className="text-yellow-400 text-4xl">
//                     <IoLogoJavascript />
//                   </IconWrapper>
//                   <p className="text-sm mt-2 font-medium">JavaScript</p>
//                 </div>
                            
//               </span>
//               <span>
//                 <Link href="https://online-shop-to-deploy.onrender.com"  target='_blank'>Check out page</Link>
//                 <Link href="https://github.com/P-Renato/online_shop_to_deploy"  target='_blank'>Check GitHub page</Link>
//               </span>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </section>
//   );
// }

// export default Page;


'use client';

import {  useState } from 'react';
import clsx from 'clsx'; 
import styles from './projects.module.css';
import Link from 'next/link';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

function Page() {
  const [openPanel, setOpenPanel] = useState<number | null>(null);
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const handleClick = (panelNumber: number) => {
    setOpenPanel(openPanel === panelNumber ? null : panelNumber);
  };

  const handleTransitionEnd = (e: React.TransitionEvent, panelNumber: number) => {
    if (e.propertyName.includes('flex')) {
      setActivePanel(openPanel === panelNumber ? panelNumber : null);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Memory Game",
      description: "Multilingual educational game for children with audio/text support. Built with vanilla JavaScript to strengthen DOM manipulation skills.",
      actionText: "Click",
      tech: [
        { icon: <FaHtml5 />, label: "HTML5", color: "text-orange-500" },
        { icon: <FaCss3Alt />, label: "CSS3", color: "text-blue-500" },
        { icon: <IoLogoJavascript />, label: "JavaScript", color: "text-yellow-400" }
      ],
      links: {
        live: "https://memory-for-kids.onrender.com",
        github: "https://github.com/P-Renato/Memory_for_kids"
      }
    },
    {
      id: 2,
      title: "Yoga Platform",
      description: "Collaborative group project with admin dashboard and API routes. Features content management and contact form handling.",
      actionText: "anywhere",
      tech: [
        { icon: <FaReact />, label: "React", color: "text-cyan-400" },
        { icon: <SiTypescript />, label: "TypeScript", color: "text-blue-600" },
        { icon: <SiNextdotjs />, label: "Next.js", color: "text-black" },
        { icon: <SiTailwindcss />, label: "Tailwind", color: "text-cyan-500" },
        { icon: <SiExpress />, label: "Express", color: "text-gray-700" }
      ],
      links: {
        live: "https://yoga-instructer-1-group-project-1.onrender.com",
        github: "https://github.com/P-Renato/yoga-instructer-1_group-project-1"
      }
    },
    {
      id: 3,
      title: "Coffeemates",
      description: "Social platform for coffee lovers with real-time chat and cafe discovery. Final project built with 4 team members.",
      actionText: "to see",
      tech: [
        { icon: <FaReact />, label: "React", color: "text-cyan-400" },
        { icon: <SiTypescript />, label: "TypeScript", color: "text-blue-600" },
        { icon: <SiNextdotjs />, label: "Next.js", color: "text-black" },
        { icon: <DiMongodb />, label: "MongoDB", color: "text-green-600" },
        { icon: <FaNodeJs />, label: "Node.js", color: "text-green-500" }
      ],
      links: {
        live: "https://coffeemates-client.onrender.com",
        github: "https://github.com/P-Renato/Coffeemates-Final_Project"
      }
    },
    {
      id: 4,
      title: "Online Shop",
      description: "E-commerce prototype focusing on DOM manipulation. Features dynamic cart and form validation with vanilla JavaScript.",
      actionText: "more",
      tech: [
        { icon: <FaHtml5 />, label: "HTML5", color: "text-orange-500" },
        { icon: <FaCss3Alt />, label: "CSS3", color: "text-blue-500" },
        { icon: <IoLogoJavascript />, label: "JavaScript", color: "text-yellow-400" }
      ],
      links: {
        live: "https://online-shop-to-deploy.onrender.com",
        github: "https://github.com/P-Renato/online_shop_to_deploy"
      }
    }
  ];

  return (
    <section className='min-h-screen bg-zinc-950 p-4 md:p-8'>
      {/* Header */}
      <div className='text-center mb-8 md:mb-12'>
        <h1 className='font-permanent_marker text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient text-center mb-8'>
          My Projects
        </h1>
        {/* <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
          Click on any project to expand and explore
        </p> */}
      </div>

      {/* Main Container */}
      <div className='flex flex-col md:flex-row w-full h-[80vh] max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-zinc-800'>
        {projects.map((project) => (
          <div
            key={project.id}
            className={clsx(
              styles.panel,
              styles[`panel${project.id}`],
              openPanel === project.id && styles.open,
              activePanel === project.id && styles.openActive
            )}
            onClick={() => handleClick(project.id)}
            onTransitionEnd={(e) => handleTransitionEnd(e, project.id)}
          >
            {/* Top Section - Description */}
            <div className='w-full px-6'>
              <div className='bg-black/70 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/10'>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-2'>{project.title}</h3>
                <p className='text-gray-200 text-sm md:text-base leading-relaxed'>
                  {project.description}
                </p>
              </div>
            </div>

            {/* Middle Section - Action Text */}
            <div className='w-full'>
              <span className='inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg md:text-xl shadow-lg'>
                {project.actionText}
              </span>
            </div>

            {/* Bottom Section - Tech & Links */}
            <div className='w-full px-6'>
              <div className='bg-black/70 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/10'>
                {/* Tech Stack */}
                <div className='flex flex-wrap justify-center gap-3 mb-4'>
                  {project.tech.map((tech, idx) => (
                    <div key={idx} className='flex flex-col items-center'>
                      <div className={`${tech.color} text-2xl md:text-3xl mb-1`}>
                        {tech.icon}
                      </div>
                      <span className='text-white text-xs font-medium'>{tech.label}</span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                  <Link
                    href={project.links.live}
                    target='_blank'
                    className='flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity text-sm md:text-base'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </Link>
                  <Link
                    href={project.links.github}
                    target='_blank'
                    className='flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white font-medium hover:bg-gray-700 transition-colors text-sm md:text-base'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Page;