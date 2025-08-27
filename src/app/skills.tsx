/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  EyeIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { useMediaQuery } from "@react-hook/media-query";

interface Skill {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  highlights: string[];
}

const SKILLS: Skill[] = [
  {
    icon: ServerIcon,
    title: "Backend Architecture",
    description:
      "Designing scalable microservices and backend systems with clean API layers and secure communication.",
    highlights: ["Spring Boot", "FastAPI", "RabbitMQ"],
  },
  {
    icon: EyeIcon,
    title: "API Development",
    description:
      "Building RESTful and WebSocket APIs with OAuth2 security. Reduced latency by 35% through optimized database queries and connection pooling.",
    highlights: ["REST", "WebSocket"],
  },
  {
    icon: ShieldCheckIcon,
    title: "DevOps & Security",
    description:
      "Implementing CI/CD pipelines with 99.9% uptime. Secured systems with JWT validation and rate limiting, blocking 100% of injection attempts.",
    highlights: ["AWS", "Docker", "GitHub Actions"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  }),
  hover: {
    y: -8,
    transition: { type: "spring" as const
      , stiffness: 400, damping: 15 },
  },
};

const iconVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 200 },
  },
  hover: { rotate: 15, scale: 1.1 },
};

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized backend development with measurable results
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, i) => (
            <motion.article
              key={skill.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover={
                !isMobile && !prefersReducedMotion ? "hover" : undefined
              }
              viewport={{ once: true, margin: "-50px" }}
              variants={!prefersReducedMotion ? cardVariants : undefined}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <motion.div
                variants={!prefersReducedMotion ? iconVariants : undefined}
                className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6"
              >
                <skill.icon className="h-6 w-6 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {skill.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {skill.highlights.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
