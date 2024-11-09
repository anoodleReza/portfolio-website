import React from 'react';
import { ArrowRight, Code, Palette, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Computer Science Student
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I design impactful applications and AI-driven solutions that blend functionality with innovation. Passionate about enhancing user experiences and problem-solving through technology.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI and Machine Learning</h3>
            <p className="text-gray-600">Strong foundation in deep learning and real-time AI integration.</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Versatile Development Skills</h3>
            <p className="text-gray-600">Proficient in full-stack and game development, with hands-on experience across diverse technologies.</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Terminal className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaborative Problem-Solver</h3>
            <p className="text-gray-600">Known for effective teamwork and structured thinking, excelling in fast-paced, collaborative environments.</p>
          </div>
        </div>
      </div>
    </section>
  );
}