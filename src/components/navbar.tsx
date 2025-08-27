"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


const NAV_MENU = [
  { name: "Home", icon: HomeIcon, href: "#home" },
  { name: "Skills", icon: WrenchScrewdriverIcon, href: "#skills" },
  { name: "Experience", icon: AcademicCapIcon, href: "#experience" },
  { name: "Project", icon: BriefcaseIcon, href: "#project" },
];

const navbarVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 25,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 20,
    },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  },
};

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function NavItem({ children, href = "#", onClick }: NavItemProps) {
  return (
    <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-hover">
      <motion.div
        whileHover={{ backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "12px" }}
        className="p-2 -m-2"
      >
        <a
          href={href}
          onClick={onClick}
          className="flex items-center gap-2 font-medium text-gray-900"
        >
          {children}
        </a>
      </motion.div>
    </motion.li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 right-0 top-4 z-50 mx-auto max-w-7xl px-4"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(12px)",
          boxShadow: scrolled ? "0 10px 40px rgba(0, 0, 0, 0.15)" : "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-white/20"
      >
        <MTNavbar className="bg-transparent border-0 px-6 py-3 w-full shadow-none">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <motion.div variants={logoVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Typography
                  color="blue-gray"
                  className="font-sora text-xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
                >
                  {"<SujaySharvesh />"}
                </Typography>
              </motion.div>
            </motion.div>

            {/* Desktop Menu */}
            <motion.ul className="font-sora ml-10 hidden items-center gap-8 lg:flex" variants={navbarVariants}>
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <motion.div key={name} variants={menuItemVariants}>
                  <NavItem href={href}>
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Icon className="h-4 w-4 text-gray-600" />
                    </motion.div>
                    <motion.span
                      className="text-gray-700 hover:text-black transition-colors duration-200"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {name}
                    </motion.span>
                  </NavItem>
                </motion.div>
              ))}
            </motion.ul>

            {/* Desktop Connect Button */}
            <motion.div className="hidden items-center gap-3 lg:flex" variants={navbarVariants}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://www.linkedin.com/in/sujay-sharvesh-47737b2b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gray-900 hover:bg-white text-white hover:text-black font-medium px-6 py-2.5 rounded-xl">
                    Connect
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Icon */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-auto inline-block lg:hidden">
              <IconButton variant="text" color="gray" onClick={() => setOpen((cur) => !cur)}>
                <AnimatePresence mode="wait">
                  {open ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <XMarkIcon strokeWidth={2} className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Bars3Icon strokeWidth={2} className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </IconButton>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="overflow-hidden"
              >
                <div className="container mx-auto mt-4 border-t border-gray-200/50 px-2 pt-6">
                  <ul className="flex flex-col gap-2">
                    {NAV_MENU.map(({ name, icon: Icon, href }) => (
                      <motion.div key={name} variants={mobileItemVariants}>
                        <NavItem href={href} onClick={() => setOpen(false)}>
                          <Icon className="h-5 w-5 text-gray-600" />
                          <span className="text-gray-700">{name}</span>
                        </NavItem>
                      </motion.div>
                    ))}
                  </ul>

                  {/* Mobile Connect Button */}
                  <motion.div className="mt-6 mb-4 flex items-center gap-3" variants={mobileItemVariants}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a
                        href="https://www.linkedin.com/in/sujay-sharvesh-47737b2b1/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-gray-900 text-white font-medium px-6 py-2.5 rounded-xl">
                          Connect
                        </Button>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </MTNavbar>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
