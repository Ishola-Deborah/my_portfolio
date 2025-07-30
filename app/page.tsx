"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Code,
  Palette,
  ChevronDown,
  Menu,
  X,
  Phone,
  Database,
  Globe,
  Settings,
  BookOpen,
  Users,
  MessageSquare,
  Clock,
  Target,
  ExternalLink,
  Smartphone,
  Server,
  Layers,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("loading")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mpwlpdpr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setFormStatus("success")
        form.reset()
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      setFormStatus("error")
    }
  }

  const technicalSkills = [
    {
      name: "Programming Languages",
      icon: Code,
      description: "JavaScript (ES6+), TypeScript, HTML, CSS",
      color: "bg-black",
    },
    {
      name: "Libraries & Frameworks",
      icon: Palette,
      description: "React (Hooks, Context API), Next.js, Tailwind CSS, SCSS/SASS",
      color: "bg-gray-900",
    },
    {
      name: "Tools & Platforms",
      icon: Settings,
      description: "Git, GitHub, React Testing Library, Node.js, Vite, Vitest",
      color: "bg-gray-800",
    },
    {
      name: "No-Code Skills",
      icon: Globe,
      description: "WordPress, Webflow, Markdown, LaTeX",
      color: "bg-gray-700",
    },
    {
      name: "Data & Packages",
      icon: Database,
      description: "SQL, MS Excel, MS Word, MS PowerPoint, Power BI, Supabase",
      color: "bg-gray-600",
    },
    {
      name: "Core Competencies",
      icon: Target,
      description: "Project Management, Teamwork, Creativity, Result-Oriented",
      color: "bg-gray-500",
    },
  ]

  const keySkills = [
    {
      name: "Customer Relationship Management (CRM)",
      icon: Users,
      description:
        "Skilled in using platforms like Zendesk, Freshdesk, and Salesforce to manage tickets, track interactions, and ensure prompt resolution.",
      color: "bg-black",
    },
    {
      name: "Effective Communication & Active Listening",
      icon: MessageSquare,
      description:
        "Strong verbal and written communication skills that foster clarity, trust, and rapport with customers across diverse backgrounds.",
      color: "bg-gray-900",
    },
    {
      name: "Tech Savvy & Digital Fluency",
      icon: Settings,
      description:
        "Confident in navigating various digital platforms and tools to improve efficiency, streamline processes, and support remote collaboration.",
      color: "bg-gray-800",
    },
    {
      name: "Proficient in Google Workspace",
      icon: Globe,
      description:
        "Expertise in Google Docs, Sheets, Slides, Forms, Drive, and Gmail—supporting effective documentation, data tracking, and communication.",
      color: "bg-gray-700",
    },
    {
      name: "Trello & Task Management Tools",
      icon: Target,
      description:
        "Skilled in Trello, Asana, and other productivity apps for managing workflow, tracking progress, and staying organized.",
      color: "bg-gray-600",
    },
    {
      name: "Multitasking & Time Management",
      icon: Clock,
      description:
        "Adept at handling multiple customer inquiries, tasks, and platforms simultaneously without compromising service quality.",
      color: "bg-gray-500",
    },
  ]

  const additionalCompetencies = [
    "Omnichannel Support Proficiency - Experience delivering seamless support via phone, email, live chat, and social media",
    "Attention to Detail - Committed to accuracy in customer records, product information, and internal documentation",
    "Team Collaboration & Adaptability - Comfortable working in dynamic team environments and adapting to change with ease",
    "Continuous Learning & Professional Growth - Enthusiastic about learning new tools and techniques to stay current",
  ]

  const experience = [
    {
      title: "Frontend Engineer (Remote)",
      company: "Ocelot Innovation Academy",
      period: "July 2023 - Present",
      location: "Ilorin, Nigeria",
      type: "Full-time",
      color: "bg-black",
      responsibilities: [
        "Utilized modern web technologies to curate RESTful APIs for web applications",
        "Created databases and ensured proper authentication and authorization processes",
        "Developed responsive, user-friendly interfaces using React, Next.js, and modern CSS frameworks",
        "Collaborated with cross-functional teams to deliver scalable web solutions",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Valdymas Intelligence (VETLEP)",
      period: "August 2023 - November 2024",
      location: "Ilorin, Nigeria",
      type: "Full-time",
      color: "bg-gray-900",
      responsibilities: [
        "Collaborated with a talented team to develop a microfinance web app, ensuring seamless functionality and user experience",
        "Built using React and Next.js for a dynamic and responsive frontend architecture",
        "Designed smooth and consistent layouts with Shadcn for an intuitive user interface",
        "Managed extensive data efficiently with Supabase as the backend database solution",
        "Implemented and optimized numerous data tables to handle financial records and transactions securely",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Valdymas College Dashboard",
      period: "April 2024 - June 2024",
      location: "Valdymas, Ilorin",
      type: "Contract",
      color: "bg-gray-800",
      responsibilities: [
        "Designed and developed the Valdymas College Dashboard to streamline the management of A-level student information and academic records",
        "Implemented features for student registration, biodata management, payment tracking, subject combinations, and test result entries",
        "Utilized modern technologies like React, Next.js, and Tailwind CSS to ensure a responsive and user-friendly interface",
        "Built scalable components for efficient data handling and implemented secure storage solutions for sensitive student information",
        "Collaborated with a dedicated team of developers, adopting an agile approach to deliver the project on time and ensure continuous improvements",
      ],
    },
    {
      title: "Frontend Engineer (Remote)",
      company: "Carburant.io",
      period: "August 2020 - July 2023",
      location: "Warri, Nigeria",
      type: "Full-time",
      color: "bg-gray-700",
      responsibilities: [
        "Developed a billing and mobile app to simplify financial transactions and enhance user accessibility on mobile devices",
        "Integrated features for generating and tracking invoices, managing payments, and providing real-time transaction updates",
        "Built with React Native for seamless performance across iOS and Android platforms, ensuring a smooth user experience",
        "Implemented secure payment gateways and data encryption to protect user information and transactions",
        "Collaborated with designers and backend developers to deliver a cohesive app with a responsive, intuitive, and visually appealing interface",
      ],
    },
    {
      title: "Virtual Assistant - Internship",
      company: "Fountain Capital Ltd",
      period: "June 2023 - August 2023",
      location: "Birmingham, United Kingdom",
      type: "Internship",
      color: "bg-gray-600",
      responsibilities: [
        "Gained hands-on experience in a fast-paced financial environment, learning key administrative and technical skills relevant to virtual assistant roles",
        "Successfully managed scheduling, correspondence, and data entry tasks, demonstrating proficiency in essential VA tools and techniques",
        "Provided reliable administrative support, contributing to the smooth daily operations of Fountain Capital Ltd",
      ],
    },
  ]

  const projects = [
    {
      title: "VETLEP (Microfinance Web App)",
      description:
        "Built a secure platform for managing microloans, allowing users to apply, track, and repay loans seamlessly.",
      technologies: ["React", "Next.js", "Supabase", "Tailwind CSS"],
      features: [
        "Incorporated data analytics for personalized financial insights and better loan management",
        "Designed a user-friendly interface with multilingual support to ensure accessibility for diverse user groups",
        "Implemented secure authentication and authorization processes",
      ],
      type: "Web Application",
      color: "bg-black",
    },
    {
      title: "Billing Plus Mobile App",
      description:
        "Developed a crypto account and billing mobile app to manage digital assets and financial transactions with ease.",
      technologies: ["React Native", "Crypto APIs", "Secure Storage"],
      features: [
        "Integrated secure cryptocurrency storage, transfer, and real-time price tracking features for user convenience",
        "Built with React Native for smooth performance on both iOS and Android, ensuring accessibility and an intuitive user experience",
        "Implemented advanced security measures for crypto transactions",
      ],
      type: "Mobile Application",
      color: "bg-gray-900",
    },
    {
      title: "Chitra-cars",
      description:
        "Developed an intuitive platform for listing, searching, and selling cars with a seamless user experience.",
      technologies: ["React", "AI Integration", "Payment Gateways"],
      features: [
        "Integrated AI-driven tools to match sellers with buyers based on preferences, location, and budget",
        "Implemented secure payment gateways, verified listings, and a rating system for trust and transparency",
        "Created responsive design optimized for both desktop and mobile experiences",
      ],
      type: "E-commerce Platform",
      color: "bg-gray-800",
    },
    {
      title: "Student-first",
      description:
        "Created a comprehensive database with all A-level past questions and syllabi, easily searchable and accessible.",
      technologies: ["React", "Database Management", "Mobile App"],
      features: [
        "Designed a visually appealing and user-friendly interface optimized for both desktop and mobile experiences",
        "Developed a mobile app to complement the web app, providing offline access to resources and personalized study tools",
        "Implemented advanced search and filtering capabilities",
      ],
      type: "Educational Platform",
      color: "bg-gray-700",
    },
    {
      title: "Chronicles - Blog App",
      description:
        "Developed a clean, engaging design to showcase diverse Christian blog content with easy navigation.",
      technologies: ["React", "CMS", "User Engagement"],
      features: [
        "Implemented a robust content management system to allow seamless blog posting and updates",
        "Integrated features for user engagement, such as comments, sharing options, and email subscriptions",
        "Created responsive design with optimized performance",
      ],
      type: "Blog Platform",
      color: "bg-gray-600",
    },
    {
      title: "Kwara State NYSC Account Verification",
      description:
        "Created a secure platform for NYSC members in Kwara State to verify their accounts and personal information.",
      technologies: ["React", "Database Integration", "Real-time Validation"],
      features: [
        "Implemented real-time validation and integration with relevant databases to ensure accurate verification",
        "Designed a user-friendly interface for smooth navigation and minimal verification errors",
        "Built secure authentication and data protection measures",
      ],
      type: "Government Platform",
      color: "bg-gray-500",
    },
  ]

  const wordpressProjects = [
    {
      title: "Deep Green Power",
      description:
        "Deep Green Power is one of Africa's largest waste-to-power companies, committed to fueling a cleaner future by turning waste into power.",
      link: "#",
      color: "bg-black",
    },
    {
      title: "NunuFlix",
      description:
        "Nunuflix combines fitness with visual storytelling, creating high-quality photo and video content that showcases workouts, wellness routines, and personal fitness journeys.",
      link: "#",
      color: "bg-gray-900",
    },
    {
      title: "Valdymas Africa",
      description:
        "Valdymas Africa, an educational institution offering A-level coaching, ICT digital training, and study abroad programs, leveraging digital transformation to create positive impacts on society.",
      link: "#",
      color: "bg-gray-800",
    },
    {
      title: "ATK Fashion House",
      description:
        "Wedding dresses and other services. The company has received many positive reviews from customers for their exceptional craftsmanship and service.",
      link: "#",
      color: "bg-gray-700",
    },
  ]

  const education = [
    {
      institution: "National Open University",
      degree: "Bachelor of Science, Computer Science",
      period: "April 2024 - Present",
      status: "In Progress",
      color: "bg-black",
    },
    {
      institution: "AltSchool Africa",
      degree: "Diploma in Software Engineering",
      period: "January 2021 - February 2022",
      status: "Completed",
      color: "bg-gray-800",
    },
  ]

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = activeSection === href.replace("#", "")
    return (
      <Link
        href={href}
        className={`relative px-3 py-2 rounded-lg transition-all duration-300 flex items-center ${
          isActive ? "text-black bg-gray-100 font-semibold" : "text-gray-700 hover:text-black hover:bg-gray-50"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
        {isActive && (
          <motion.div
            layoutId="activeSection"
            className="absolute inset-0 bg-gray-200 rounded-lg -z-10"
            initial={false}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Enhanced Navigation Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <div className="relative">
              {/* Logo Container */}
              <div className="flex items-center space-x-4">
                {/* Enhanced Icon/Symbol */}
                <div className="relative">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center transform rotate-12 shadow-xl">
                    <span className="text-white font-bold text-xl transform -rotate-12">D</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gray-600 rounded-full opacity-90 animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gray-400 rounded-full opacity-70"></div>
                </div>

                {/* Enhanced Text Logo */}
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-black tracking-tight">Deborah</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-gray-700 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 tracking-[0.2em] uppercase -mt-1">Opeyemi</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200 px-4 py-4"
          >
            <div className="flex flex-col space-y-3">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-16 md:pt-0"
      >
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center mt-8 md:mt-0">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="relative mr-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-black rounded-3xl flex items-center justify-center transform rotate-12 shadow-2xl">
                    <span className="text-white font-bold text-4xl md:text-5xl transform -rotate-12">D</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-gray-600 rounded-full opacity-90 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-gray-400 rounded-full opacity-70 animate-bounce"></div>
                  <div className="absolute top-1/2 -right-4 w-3 h-3 bg-gray-500 rounded-full opacity-60"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <span className="text-black">Deborah</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 bg-black rounded-full animate-pulse"></div>
                    <div
                      className="w-4 h-4 bg-gray-700 rounded-full animate-pulse"
                      style={{ animationDelay: "0.3s" }}
                    ></div>
                    <div
                      className="w-4 h-4 bg-gray-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.6s" }}
                    ></div>
                  </div>
                </div>
                <div className="text-gray-700 text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.1em]">
                  OPEYEMI
                </div>
              </div>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-poppins text-base md:text-lg mb-8 text-gray-600 max-w-2xl mx-auto lg:mx-0 tracking-wider leading-relaxed"
            >
              <span className="text-black font-medium">Frontend Developer</span> |
              <span className="text-gray-700"> Customer Service Expert </span> |
              <span className="text-gray-700"> Virtual Assistant </span> |
              <span className="text-gray-700"> WordPress Specialist </span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white border-0 shadow-lg">
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white bg-transparent"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </motion.div>
          </div>

          {/* Enhanced Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-black rounded-3xl blur-3xl opacity-10 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-600 rounded-full opacity-70 animate-bounce"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-gray-500 rounded-full opacity-60 animate-pulse"></div>
              <div
                className="absolute -bottom-6 -left-2 w-10 h-10 bg-gray-400 rounded-full opacity-50 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>

              {/* Image container */}
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl border-2 border-gray-200">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/hero-image.jpg"
                    alt="Deborah Opeyemi - Professional Portrait"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover transition-all duration-500 hover:scale-105 grayscale hover:grayscale-0"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black">About</span> <span className="text-gray-600">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Skilled frontend developer in building responsive, user-friendly interfaces using modern web technologies
              like HTML, CSS, JavaScript, TypeScript, and frameworks such as React and Next.js.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6">Professional Summary</h3>
                <p className="text-gray-600 mb-4">
                  Experienced in creating seamless, visually appealing designs and ensuring optimal performance across
                  devices. A junior developer who loves creating websites and working with different teams.
                </p>
                <p className="text-gray-600 mb-4">
                  I'm good at solving problems and writing clean code that works well. I pick up new coding languages
                  quickly and enjoy explaining technical stuff in simple ways.
                </p>
                <p className="text-gray-600 mb-6">
                  Detail-oriented, always meet my deadlines, and can easily switch between different projects based on
                  what's needed. Combined with over 4 years of customer service experience, I bring both technical
                  expertise and exceptional communication skills.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300">
                    Frontend Developer
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300">
                    React & Next.js
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300">
                    Customer Service
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300">
                    Problem Solver
                  </Badge>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-black">Location</p>
                    <p className="text-gray-600">Lagos, Lagos State, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-black">Email</p>
                    <p className="text-gray-600">isholadeborahope@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-black">Phone</p>
                    <p className="text-gray-600">+234 816 565 5608</p>
                    <p className="text-gray-600">+234 701 954 7879</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black">Skills &</span> <span className="text-gray-600">Competencies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive skill set spanning frontend development, customer service, and digital solutions
            </p>
          </motion.div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 shadow-lg">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 ${skill.color} rounded-2xl flex items-center justify-center mb-4`}>
                        <skill.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-black mb-2">{skill.name}</h3>
                      <p className="text-gray-600">{skill.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Skills & Competencies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Customer Service & Soft Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keySkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 shadow-lg">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 ${skill.color} rounded-2xl flex items-center justify-center mb-4`}>
                        <skill.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-black mb-3">{skill.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Competencies */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Additional Competencies</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {additionalCompetencies.map((competency, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 text-sm leading-relaxed">{competency}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black">Work</span> <span className="text-gray-600">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey spanning frontend development, customer service, and digital solutions
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`h-2 ${exp.color}`}></div>
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div className="mb-4 lg:mb-0">
                          <h3 className="text-xl font-bold text-black">{exp.title}</h3>
                          <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                          <p className="text-gray-600 flex items-center gap-2 mt-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </p>
                        </div>
                        <div className="text-left lg:text-right">
                          <Badge className="bg-gray-100 text-gray-800 border border-gray-300 mb-2">{exp.type}</Badge>
                          <p className="text-sm text-gray-500">{exp.period}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-600 text-sm">{responsibility}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black">Featured</span> <span className="text-gray-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my development work across web applications, mobile apps, and digital platforms
            </p>
          </motion.div>

          {/* Development Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Development Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className={`h-2 ${project.color}`}></div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-gray-100 text-gray-800 border border-gray-300 text-xs">
                            {project.type}
                          </Badge>
                          {project.type === "Mobile Application" && <Smartphone className="h-5 w-5 text-gray-600" />}
                          {project.type === "Web Application" && <Globe className="h-5 w-5 text-gray-600" />}
                          {project.type === "E-commerce Platform" && <Server className="h-5 w-5 text-gray-600" />}
                          {project.type === "Educational Platform" && <BookOpen className="h-5 w-5 text-gray-600" />}
                          {project.type === "Blog Platform" && <Layers className="h-5 w-5 text-gray-600" />}
                          {project.type === "Government Platform" && <Settings className="h-5 w-5 text-gray-600" />}
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                        <div className="mb-4">
                          <p className="text-sm font-medium text-black mb-2">Technologies:</p>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, idx) => (
                              <Badge key={idx} className="bg-gray-50 text-gray-700 border border-gray-200 text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm font-medium text-black">Key Features:</p>
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-600 text-xs leading-relaxed">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* WordPress Projects */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8 text-center">WordPress Projects</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {wordpressProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className={`h-2 ${project.color}`}></div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-gray-100 text-gray-800 border border-gray-300 text-xs">WordPress</Badge>
                          <Globe className="h-5 w-5 text-gray-600" />
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Project
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black">Education &</span> <span className="text-gray-600">Learning</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous learning and professional development in technology and computer science
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`h-2 ${edu.color}`}></div>
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-4 md:mb-0">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-12 h-12 ${edu.color} rounded-full flex items-center justify-center`}>
                              <BookOpen className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-black">{edu.degree}</h3>
                              <p className="text-lg text-gray-700 font-medium">{edu.institution}</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-left md:text-right">
                          <Badge
                            className={`${edu.status === "In Progress" ? "bg-gray-100 text-gray-800" : "bg-gray-200 text-gray-900"} border border-gray-300 mb-2`}
                          >
                            {edu.status}
                          </Badge>
                          <p className="text-sm text-gray-500">{edu.period}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black">Let's Work</span> <span className="text-gray-600">Together</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Email</p>
                      <p className="text-gray-600">isholadeborahope@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Phone</p>
                      <p className="text-gray-600">+234 816 565 5608</p>
                      <p className="text-gray-600">+234 701 954 7879</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Location</p>
                      <p className="text-gray-600">Lagos, Lagos State, Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium text-black mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    <Button
                      className="bg-black hover:bg-gray-800 text-white"
                      onClick={() => window.open("https://github.com/Ishola-Deborah", "_blank")}
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button
                      className="bg-gray-800 hover:bg-gray-700 text-white"
                      onClick={() => window.open("https://www.linkedin.com/in/Ishola-Deborah/", "_blank")}
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button
                      className="bg-gray-700 hover:bg-gray-600 text-white"
                      onClick={() => window.open("https://x.com/OpeyemiDebb", "_blank")}
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl border border-gray-200">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="border-2 border-gray-300 focus:border-black focus:ring-black"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          className="border-2 border-gray-300 focus:border-black focus:ring-black"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="Project inquiry"
                        className="border-2 border-gray-300 focus:border-black focus:ring-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Tell me about your project..."
                        className="border-2 border-gray-300 focus:border-black focus:ring-black"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-black hover:bg-gray-800 text-white"
                      disabled={formStatus === "loading"}
                    >
                      {formStatus === "loading" ? "Sending..." : "Send Message"}
                    </Button>
                    {formStatus === "success" && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-600 text-center font-medium"
                      >
                        Message sent successfully! 🎉
                      </motion.p>
                    )}
                    {formStatus === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-600 text-center font-medium"
                      >
                        Failed to send message. Please try again.
                      </motion.p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative mr-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center transform rotate-12 shadow-xl">
                  <span className="text-black font-bold text-2xl transform -rotate-12">D</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-400 rounded-full opacity-90"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gray-600 rounded-full opacity-70"></div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="text-3xl font-bold text-white">Deborah</h3>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.3s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"
                      style={{ animationDelay: "0.6s" }}
                    ></div>
                  </div>
                </div>
                <span className="text-gray-300 text-sm tracking-[0.2em] uppercase">Opeyemi</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">Frontend Developer | Customer Service Expert | WordPress Specialist</p>
            <div className="flex justify-center gap-4 mb-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                onClick={() => window.open("https://github.com/Ishola-Deborah", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                onClick={() => window.open("https://www.linkedin.com/in/Ishola-Deborah/", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                onClick={() => window.open("https://x.com/OpeyemiDebb", "_blank")}
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Deborah Opeyemi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
