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
      const sections = ["home", "about", "skills", "experience", "education", "contact"]
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
      color: "bg-gray-900",
    },
    {
      name: "Libraries & Frameworks",
      icon: Palette,
      description: "React (Hooks, Context API), Next.js, Tailwind CSS, SCSS/SASS",
      color: "bg-gray-800",
    },
    {
      name: "Tools & Platforms",
      icon: Settings,
      description: "Git, GitHub, React Testing Library, Node.js, Vite, Vitest",
      color: "bg-gray-700",
    },
    {
      name: "No-Code Skills",
      icon: Globe,
      description: "WordPress, Webflow, Markdown, LaTeX",
      color: "bg-gray-600",
    },
    {
      name: "Data & Packages",
      icon: Database,
      description: "SQL, MS Excel, MS Word, MS PowerPoint, Power BI, Supabase",
      color: "bg-gray-500",
    },
    {
      name: "Core Competencies",
      icon: Target,
      description: "Project Management, Teamwork, Creativity, Result-Oriented",
      color: "bg-gray-900",
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
      title: "IT Marketing Team Member",
      company: "Valdymas Intelligence",
      period: "August 2024 - Present",
      location: "Ilorin, Kwara State, Nigeria",
      type: "Full-time",
      color: "bg-black",
      responsibilities: [
        "Collaborated with the IT marketing team to promote digital products and services through various online platforms",
        "Utilized Google tools, Trello, and social media management platforms to plan, execute, and track marketing campaigns",
        "Participated in brainstorming sessions to create content strategies, digital outreach, and customer engagement plans",
        "Conducted market research to understand customer behavior and recommend marketing approaches that aligned with business goals",
        "Contributed to website and landing page design ideas to improve brand visibility and user experience",
      ],
    },
    {
      title: "Virtual Assistant - Internship",
      company: "Fountain Capital Ltd",
      period: "March 2023",
      location: "Birmingham, United Kingdom",
      type: "Internship",
      color: "bg-gray-900",
      responsibilities: [
        "Gained hands-on experience in a fast-paced financial environment, learning key administrative and technical skills relevant to virtual assistant roles",
        "Successfully managed scheduling, correspondence, and data entry tasks, demonstrating proficiency in essential VA tools and techniques",
        "Provided reliable administrative support, contributing to the smooth daily operations of Fountain Capital Ltd",
      ],
    },
    {
      title: "Supervisor & Store Accountant",
      company: "Rimi Skincare & Beauty Store",
      period: "February 2022",
      location: "Ilorin, Kwara State, Nigeria",
      type: "Full-time",
      color: "bg-gray-800",
      responsibilities: [
        "Supervised daily store operations and ensured smooth coordination between team members",
        "Managed customer service delivery, assisted clients with product selection, and explained skincare usage instructions",
        "Handled all store accounting tasks including expense tracking, sales recording, and cash flow reconciliation",
        "Created daily financial summaries and ensured compliance with internal financial practices",
        "Trained new staff members on store policies, product knowledge, and customer interaction techniques",
      ],
    },
    {
      title: "Customer Service & Sales Representative",
      company: "Exclusive Wears Boutique",
      period: "February 2018",
      location: "Ilorin, Kwara State, Nigeria",
      type: "Full-time",
      color: "bg-gray-700",
      responsibilities: [
        "Delivered outstanding front-line customer service in a fast-paced fashion retail environment, offering personalized style advice and assistance",
        "Managed inventory, restocking shelves, and ensured products were well-displayed to attract customers",
        "Handled customer queries, complaints, and feedback both in-store and over the phone with professionalism and empathy",
        "Processed sales transactions, maintained accurate cash records, and handled daily account reconciliation",
        "Built strong customer relationships through follow-up and consistent engagement, leading to repeat purchases and word-of-mouth referrals",
      ],
    },
    {
      title: "Administrative Secretary",
      company: "Polythene & Plastic Manufacturing Factory",
      period: "March 2017",
      location: "Sango Ota, Ogun State, Nigeria",
      type: "Full-time",
      color: "bg-gray-600",
      responsibilities: [
        "Managed day-to-day administrative tasks including filing, scheduling, and organizing production records",
        "Coordinated communication between departments and responded to inquiries from clients and suppliers",
        "Maintained production logs and ensured all documentation was up to date and easily accessible",
        "Provided support for internal reporting and assisted management with basic bookkeeping and office coordination",
      ],
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-black"
          >
            Deborah Opeyemi
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              <span className="text-black">Deborah</span>
              <br />
              <span className="text-gray-600">Opeyemi</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-poppins text-base md:text-lg mb-8 text-gray-600 max-w-2xl mx-auto lg:mx-0 tracking-wider leading-relaxed"
            >
              <span className="text-black font-medium">Customer Service Representative</span> |
              <span className="text-gray-700"> IT Marketing Specialist </span> |
              <span className="text-gray-700"> Virtual Assistant </span> |
              <span className="text-gray-700"> Administrative Professional </span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white border-2 border-black">
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white bg-transparent"
              >
                <Link href="#about">Learn More</Link>
              </Button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute inset-0 bg-black rounded-3xl blur-2xl opacity-10 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl border border-gray-200">
                <Image
                  src="https://res.cloudinary.com/dcjaq0ecb/image/upload/v1753207695/1_sr04az.jpg"
                  alt="Deborah Opeyemi - Professional Portrait"
                  width={350}
                  height={420}
                  className="w-full h-auto rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
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
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About <span className="text-gray-600">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Friendly and hardworking Customer Service Representative with over 4 years of experience helping customers
              in busy and fast-paced environments. Skilled at handling many questions and complaints with patience,
              care, and professionalism.
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
                  Good at solving problems quickly and making sure customers are satisfied from the first contact. Great
                  at speaking and listening to people, with strong communication and people skills.
                </p>
                <p className="text-gray-600 mb-4">
                  Can use customer service tools like CRM systems and ticketing platforms. Able to manage time well,
                  stay organized, and pay attention to details while working through phone, email, live chat, or social
                  media.
                </p>
                <p className="text-gray-600 mb-6">
                  Known for being calm under pressure, building good relationships with all types of customers, and
                  turning bad situations into good ones. Always ready to learn and grow while working well with team
                  members and supporting company goals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300">
                    4+ Years Experience
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300">
                    Customer Service Expert
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300">
                    Problem Solver
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300">
                    Team Player
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
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Skills & <span className="text-gray-600">Competencies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive skill set spanning customer service, technical development, and digital marketing
            </p>
          </motion.div>

          {/* Key Skills & Competencies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Key Skills & Competencies</h3>
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
          <div className="mb-16">
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

          {/* Technical Skills */}
          <div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Work <span className="text-gray-600">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey across various industries and roles
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

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Education & <span className="text-gray-600">Learning</span>
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
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Let's Work <span className="text-gray-600">Together</span>
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
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
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
                    <Button className="bg-black hover:bg-gray-800 text-white">
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
            <h3 className="text-3xl font-bold mb-4 text-white">Deborah Opeyemi</h3>
            <p className="text-gray-300 mb-6">
              Customer Service Representative | IT Marketing Specialist | Virtual Assistant
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-white/10"
                onClick={() => window.open("https://www.linkedin.com/in/Ishola-Deborah/", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-white/10"
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
