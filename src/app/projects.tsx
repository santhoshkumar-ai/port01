/* eslint-disable react/no-unescaped-entities */
"use client";

import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

type ProjectProps = {
  title: string;
  tech: string;
  desc: string;
  github: string;
  live: string | null;
};

const PROJECTS = [
  {
    title: "DocFlow",
    tech: "Java, Spring Boot, WebSocket, Redis Pub/Sub, RabbitMQ, OAuth2, Docker, EC2",
    desc: "Currenlty working on a microservices-based real-time collaborative document editor using Yjs and Tiptap. Features WebSocket-based communication for simultaneous multi-user editing and Redis Pub/Sub to manage live document sessions across distributed services. Backend services are containerized with Docker, routed via Nginx and Spring Cloud Gateway, and deployed on AWS EC2.",
   
    github: "https://github.com/sujaysharvesh/CollaborationService",
    live: null
  },
  {
    title: "VibeStream",
    tech: "Java, Spring Boot, WebClient, PostgreSQL, Redis, OAuth2, Docker, S3, EC2",
    desc: "A microservices-based music streaming platform that lets users create and manage their own playlists on the cloud. Secured with OAuth 2.0 and JWT-based authentication, using PostgreSQL for structured metadata and AWS S3 for audio files. Features Redis as distributed token store for OAuth 2.0 with containerized deployment on AWS EC2.",
    
    github: "https://github.com/sujaysharvesh/MusicService",
    live: "https://music-client-ten.vercel.app/"
  },
  {
    title: "PharmaTrack",
    tech: "Java, Spring Boot, PostgreSQL, AWS S3, SVM",
    desc: "A high-performance drug file management system with integrated SVM model (Python/scikit-learn) to auto-classify drug types from uploaded files. Features AES-256 encryption for sensitive files before storing in AWS S3, while storing metadata in PostgreSQL. The trained SVM model classifies drugs with high accuracy, significantly reducing manual labeling efforts.",
    github: "",
    live: null
  }
];

<motion.div
  className="flex flex-col gap-8 max-w-11xl mx-auto"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  }}
>
  {PROJECTS.map((props, idx) => (
    <motion.div
      key={idx}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ProjectCard {...props} />
    </motion.div>
  ))}
</motion.div>


function ProjectCard({ title, tech, desc, github, live }: ProjectProps){
  return (
    
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 w-full max-w-9xl h-auto">
  {/* Image Section */}

  {/* Content Section */}
  <div className="p-10 flex flex-col justify-between">
    <h3 className="text-3xl font-bold text-black mb-3">{title}</h3>

    <div className="flex flex-wrap gap-2 mb-4">
      {tech.split(', ').map((item, techIndex) => (
        <span
          key={techIndex}
          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-clip font-medium"
        >
          {item}
        </span>
      ))}
    </div>

    <p className="text-gray-600 leading-relaxed mb-4 text-wrap text-base">{desc}</p>

    <div className="flex gap-3 flex-wrap">
      {live && (
        <a 
          href={live}
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
        >
          <EyeIcon className="h-4 w-4" />
          Live Demo
        </a>
      )}
      <a 
        href={github}
        className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-black hover:text-black transition-colors text-sm font-medium"
      >
        <CodeBracketIcon className="h-4 w-4" />
        GitHub
      </a>
    </div>
  </div>
</div>

  );
}

export function Projects() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center py-20 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            My Projects
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Here are some of the projects I've built, showcasing my expertise in backend development, 
            microservices architecture, and modern web technologies. Each project demonstrates different 
            aspects of scalable system design and implementation.
          </p>
        </div>
        
        <div className="flex flex-col gap-8 max-w-11xl mx-auto">
          {PROJECTS.map((props, idx) => (
            <ProjectCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;