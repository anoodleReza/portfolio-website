import React from 'react';
import { BookOpen, Code2, Coffee } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=800&h=600"
              alt="Developer workspace"
              className="rounded-xl shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6">
              Passionate about creating innovative tech solutions, I blend a background in AI, software development, and data analytics to build impactful digital experiences. With a keen eye for detail and a collaborative spirit, I thrive in transforming complex challenges into user-focused applications.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Technical Expertise</h3>
                  <p className="text-gray-600">
                    Focused in learning React, Node.js, and modern web technologies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Continuous Learning</h3>
                  <p className="text-gray-600">
                    Always staying updated with the latest tech trends and learning new technologies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Coffee className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Problem Solver</h3>
                  <p className="text-gray-600">
                    Love tackling challenging problems and finding elegant solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}