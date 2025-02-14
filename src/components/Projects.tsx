import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Job Application Tracker',
    description: 'A full-stack web application to track job applications and interviews and obtain meaningful statistics and insights.',
    image: 'https://private-user-images.githubusercontent.com/38813206/413329816-4fbdd012-2cc1-48b0-ad1e-a6aeb220f972.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzk1NDAxMDksIm5iZiI6MTczOTUzOTgwOSwicGF0aCI6Ii8zODgxMzIwNi80MTMzMjk4MTYtNGZiZGQwMTItMmNjMS00OGIwLWFkMWUtYTZhZWIyMjBmOTcyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjE0VDEzMzAwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk5YzRmNmZhN2FiNmYzY2IzMTAzOWVhYjViYTU0YmYzYTU5MTliMTc4ZmEyM2U2MjQwODhjY2ZjMmI2MDczZTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.5FSE6mNOZw6ekj1a-eVcEdqJSBzYNZdrkkmalYHq-_Y?auto=format&fit=crop&q=80&w=800&h=500',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/anoodleReza/application-tracker'
  },
  {
    title: 'Realtime AI Speech Emotion Recognition with Music Recommendation',
    description: 'A Realtime music recommendation system using real-time user emotions classified using deep learning methods.',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.simplypsychology.org%2Fprimary-and-secondary-emotions.html&psig=AOvVaw0DkI6O1nl0l25ZmZw-Jbnt&ust=1739626252346000&source=images&opi=89978449?auto=format&fit=crop&q=80&w=800&h=500',
    tech: ['Python', 'Deep Learning', 'Data Science'],
    liveUrl: '#',
    githubUrl: ''
  },
  {
    title: 'Realtime AI assistant',
    description: 'AI assistant using OpenAI and elevnlabs with a webapp dashboard.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965?auto=format&fit=crop&q=80&w=800&h=500',
    tech: ['OpenAI', 'Elevenlabs', 'Java', 'NextJS', 'LLM'],
    liveUrl: '#',
    githubUrl: 'https://github.com/anoodleReza/Nu-v2-Dashboard'
  },
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