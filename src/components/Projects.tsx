import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Food Delivery Platform',
    description: 'Greenery is an all-in-one application for customers, couriers, and merchants built using React Native and Firebase',
    image: 'https://plus.unsplash.com/premium_photo-1661526833843-248a2f8fe129?auto=format&fit=crop&q=80&w=800&h=500',
    tech: ['React Native', 'Node.js', 'Firebase', 'Google Maps'],
    liveUrl: '#',
    githubUrl: 'https://github.com/anoodleReza/Greenery'
  },
  {
    title: 'Waste Classification Model',
    description: 'A waste classification model built in python using CNNs',
    image: 'https://plus.unsplash.com/premium_photo-1661963024527-c855211ad31d?auto=format&fit=crop&q=80&w=800&h=500',
    tech: ['Python', 'CNN', 'Jupyter'],
    liveUrl: '#',
    githubUrl: 'https://github.com/anoodleReza/Waste-Classification-using-CNN'
  },
  {
    title: 'Simulation Game',
    description: 'An evolution simulation game built in unity for the IGSI gamejam',
    image: 'https://img.itch.zone/aW1nLzg0NDYwNTQucG5n/original/Zrjo8c.png?auto=format&fit=crop&q=80&w=800&h=500',
    tech: ['Unity', 'C#', 'Game jam'],
    liveUrl: 'https://chamiira.itch.io/cambrian-explosion',
    githubUrl: '#'
  },
  {
    title: 'Realtime AI assistant',
    description: 'AI assistant using OpenAI and elevnlabs with a webapp dashboard.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965?auto=format&fit=crop&q=80&w=800&h=500',
    tech: ['OpenAI', 'Elevenlabs', 'Java', 'NextJS', 'LLM'],
    liveUrl: '#',
    githubUrl: 'https://github.com/anoodleReza/Nu-v2-Dashboard'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}