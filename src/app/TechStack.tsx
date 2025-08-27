"use client";

import { motion } from "framer-motion";
import { FaPython, FaJava, FaJs, FaReact, FaDocker, FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiFastapi, SiNextdotjs, SiPostgresql, SiMongodb, SiRedis, SiRabbitmq} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const TECH_STACK = [
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
  { name: "RESTful APIs", icon: <TbApi className="text-purple-500" /> },
  { name: "OAuth2", icon: <span className="text-orange-500">OAuth</span> },
  { name: "WebSocket", icon: <span className="text-blue-400">WS</span> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "RabbitMQ", icon: <SiRabbitmq className="text-orange-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "AWS (EC2, S3)", icon: <FaAws className="text-orange-400" /> },
  { name: "Render", icon: <span className="text-gray-700">R</span> },
  { name: "CI/CD", icon: <span className="text-green-600">CI/CD</span> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Redis", icon: <SiRedis className="text-red-500" /> },
  { name: "Redis Pub/Sub", icon: <SiRedis className="text-red-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
  { name: "GitHub Actions", icon: <FaGithub className="text-gray-600" /> },
];

export function TechStack() {
  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sora text-4xl font-bold mb-4 text-gray-900">
            Backend Tech Stack
          </h2>
          <p className="font-sora text-gray-600 text-lg max-w-3xl mx-auto">
          Technologies and tools I use to build robust, scalable backend systems
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
              }
            }
          }}
        >
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    type: "spring", 
                    stiffness: 100
                  }
                }
              }}
              whileHover={{
                y: -3,
                scale: 1.03,
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 }
              }}
              className="flex items-center bg-gray-50 font-sora px-5 py-3 rounded-lg text-gray-800 text-lg font-medium border border-gray-200 cursor-default hover:bg-white hover:border-gray-300 transition-all"
            >
              <span className="mr-2 text-xl">{tech.icon}</span>
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;