// app/about-me/page.tsx
import React from 'react';
import { FaCode, FaGraduationCap, FaMusic, FaLightbulb, FaGlobe } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

function AboutMe() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-10">
          <h1 className="text-5xl md:text-7xl font-permanent_marker mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Fullstack Developer passionate about crafting elegant solutions through clean code and modern technologies
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Introduction */}
          <div className="space-y-8">
            <div className="bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm border border-zinc-700">
              <div className="flex items-center gap-3 mb-4">
                <GiBrain className="text-2xl text-purple-400" />
                <h2 className="text-2xl font-bold">My Philosophy</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Methodical developer with extensive experience in PERN stack & modern web technologies. 
                I focus on writing clean, maintainable code and building collaborative solutions while 
                continuously expanding my technical toolkit through self-directed learning.
              </p>
            </div>

            <div className="bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm border border-zinc-700">
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-2xl text-blue-400" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg">DCI – Digital Career Institute, Berlin</h3>
                  <p className="text-gray-400">Fullstack Web Development (Ongoing)</p>
                  <p className="text-gray-300 mt-2">
                    Intensive PERN stack training with modern frontend development using React, TypeScript, 
                    and agile methodologies.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Faculdade Moraes Junior, Brazil</h3>
                  <p className="text-gray-400">Economics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Interests */}
          <div className="space-y-8">
            <div className="bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm border border-zinc-700">
              <div className="flex items-center gap-3 mb-6">
                <FaCode className="text-2xl text-pink-400" />
                <h2 className="text-2xl font-bold">Technical Expertise</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-blue-300">Frontend</h3>
                  <ul className="space-y-1 text-gray-300">
                    <li>• React / Next.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• React Native</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-green-300">Backend</h3>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Node.js / Express</li>
                    <li>• PostgreSQL</li>
                    <li>• MongoDB</li>
                    <li>• REST APIs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm border border-zinc-700">
              <div className="flex items-center gap-3 mb-4">
                <FaMusic className="text-2xl text-yellow-400" />
                <h2 className="text-2xl font-bold">Beyond Coding</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Passionate musician with experience in live performances, songwriting, and recording. 
                I also enjoy video editing, cooking, and spending quality time with family.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <FaGlobe className="text-lg text-gray-400" />
                <span className="text-gray-300">Portuguese (Native), English (C2), Spanish (C1), German (B2)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Preview */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <MdWork className="text-2xl text-cyan-400" />
            <h2 className="text-3xl font-bold">Recent Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Coffeemates",
                desc: "Social platform for coffee enthusiasts",
                tech: "React, TypeScript, WebSockets",
              },
              {
                title: "Portfolio Website",
                desc: "Responsive portfolio with automation",
                tech: "Next.js, TypeScript, MongoDB",
              },
              {
                title: "Yoga Instructor Platform",
                desc: "Agile team project with Figma designs",
                tech: "React, Node.js, TypeScript",
              },
            ].map((project, idx) => (
              <div key={idx} className="bg-zinc-800/30 p-6 rounded-xl border border-zinc-700 hover:border-purple-500 transition-all">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3">{project.desc}</p>
                <p className="text-sm text-cyan-300">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-2xl border border-purple-700">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Interested in collaborating or just want to chat about tech? I'm always open to discussing new opportunities.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;