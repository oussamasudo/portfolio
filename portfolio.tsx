"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Cpu,
  Layers,
  Coffee,
  WholeWord,
  Factory,
  Book,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import ContactForm from "./app/contact-form"
export default function DeveloperPortfolio() {
  const [typedText, setTypedText] = useState("")
  const fullText = " Full Stack Developper"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Python",
    "Django",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Git",
    "GraphQL",
    "REST API",
    "Microservices",
    "TDD",
    "CI/CD",
  ]

  const projects = [
    {
      title: "I.M.M",
      description: "The Industrial Machine Maintenance System is an application that manages machine operations, maintenance requests, and work orders. It allows users to track machine performance, create maintenance tasks, and schedule work efficiently, ensuring timely resolutions and reducing downtime.",
image: "/OLP-pica.png"
, // Chemin vers votre image
      technologies: ["React", "next ", "MySql"], // Vos vraies technologies
      github: "https://github.com/oussamasudo/IMM", // Votre vrai lien GitHub
      live: "https://votre-projet1.com", // Votre vrai lien de démo
  icon: <Factory className="h-6 w-6" />

    },
    {
  title: "E-library",
  description: "E-library is a web-based learning platform designed to facilitate online education. It features interactive videos, quizzes, and a robust progress tracking system to enhance the learning experience. The app is ideal for students, educators, and lifelong learners looking to access educational content and track their growth effectively on any device.",
  image: "/OLP-pica.png",
  technologies: ["React", "Firebase", "Redux", "Next.js"],
  github: "https://github.com/votre-username/elearning-app",
  live: "https://votre-projet1.com", // Update with your actual demo link
  icon: <Book className="h-6 w-6" />, // Book icon still appropriate for educational context
},


    {
      title: "Application Mobile E-Learning",
      description: "App mobile pour l'apprentissage en ligne avec vidéos, quiz interactifs et suivi de progression.",
image: "/OLP-pica.png",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      github: "https://github.com/votre-username/elearning-app",
      live: "https://play.google.com/store/apps/details?id=com.votre.app",
      icon: <Smartphone className="h-6 w-6" />,
    },
    // Ajoutez autant de projets que vous voulez
  ]

  const experience = [
    {
      role: "Full Stack Developer",
      company: "TechCorp",
      period: "2022 - Présent",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      role: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      icon: <Code2 className="h-5 w-5" />,
    },
    {
      role: "Junior Developer",
      company: "WebAgency",
      period: "2018 - 2020",
      icon: <Terminal className="h-5 w-5" />,
    },
    {
      role: "Freelance Developer",
      company: "Indépendant",
      period: "2017 - 2018",
      icon: <Coffee className="h-5 w-5" />,
    },
  ]

  const codeSnippets = [
    "const developer = { name: 'OUSSAMA', passion: 'coding' };",
    "function createAwesomeApp() { return magic; }",
    "git commit -m 'Another day, another feature'",
    "npm install happiness --save-dev",
    "while(coding) { coffee++; }",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Code Background Effect */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary text-xs font-mono animate-code"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-primary/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold font-mono">{"<Dev/>"}</h1>
            </div>
            <div className="hidden md:flex space-x-6 font-mono">
              <Link
                href="#about"
                className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary"
              >
                about()
              </Link>
              <Link
                href="#skills"
                className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary"
              >
                skills[]
              </Link>
              <Link
                href="# Skills & Experience"
                className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary"
              >
                projects{}
              </Link>
              <Link
                href="#contact"
                className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary"
              >
                contact()
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="relative mb-8">
              <div className="w-40 h-40 mx-auto rounded-full border-2 border-primary/50 p-2 animate-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-purple-900/20 flex items-center justify-center animate-float">
                  <Code2 className="h-16 w-16 text-primary" />
                </div>
              </div>
            </div>

            <div className="font-mono text-sm text-primary mb-4">{">"} console.log("Hello World!");</div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
              <span className="text-primary">OUSSAMA</span> <span className="text-white">HAFDOUNE</span>
            </h1>

            <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
              <span className="border-r-2 border-primary animate-blink">{typedText}</span>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
             Passionate about developing modern web and mobile applications. Specialized in JavaScript technologies and cloud-native architecture.

            </p>

            <div className="flex justify-center space-x-4">
              <Button className="bg-primary hover:bg-primary/80 font-mono" asChild>
                <Link href="#contact">
                  <Terminal className="h-4 w-4 mr-2" />
                  contact()
                </Link>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono" asChild>
                <Link href="#projects">
                  <GitBranch className="h-4 w-4 mr-2" />
                  git checkout projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono text-primary">{"// About"}</h2>
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Photo Section */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-lg overflow-hidden border-2 border-primary/50 animate-glow">
                <img src="/linkin .png" alt="Hafdoune Oussama -  Full Stack Developper" className="w-full h-full object-cover" />

                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-primary"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-primary"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="md:col-span-2">
              <div className="mb-8">
                <p className="text-lg mb-6">
                  Full Stack Developer with over 3 years of experience in building high-performance web and mobile applications. Passionate about innovation, artificial intelligence, and data-driven solutions that push technology forward.
                </p>
                <p className="text-lg mb-6">
I enjoy solving complex problems with clean and efficient code, contributing to open source projects, and continuously seeking opportunities for learning and growth.
                </p>

                {/* Code snippet style bio */}
              <div className="bg-card border border-primary/20 rounded-lg p-4 font-mono text-sm mb-6">
  <div className="text-primary mb-2">const developer = {`{`}</div>
  <div className="ml-4 text-muted-foreground">
    <div>
      name: <span className="text-green-400">"OUSSAMA HAFDOUNE"</span>,
    </div>
    <div>
      role: <span className="text-green-400">"Full Stack Developer with expertise in AI Agents and Data Analysis"</span>,
    </div>
    <div>
      experience: <span className="text-yellow-400">+3</span>,
    </div>
    <div>
      location: <span className="text-green-400">"Tangier , Morocco"</span>,
    </div>
    <div>
      languages: [<span className="text-green-400">"JavaScript", "TypeScript", "Python"</span>],
    </div>
    <div>
      passion: <span className="text-green-400">"Building smart and efficient applications powered by optimized databases and AI. Passionate about data modeling, query optimization, and transforming data into intelligent, high-performance solutions."</span>,
    </div>
    <div>
      coffee: <span className="text-yellow-400">true</span>
    </div>
  </div>
  <div className="text-primary">{`};`}</div>
</div>


                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-primary hover:bg-primary/10" asChild>
                    <Link href="https://github.com/oussamasudo" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" className="border-primary hover:bg-primary/10" asChild>
                    <Link href="https://www.linkedin.com/in/oussama-hafdoune-974006260/" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" className="border-primary hover:bg-primary/10" asChild>
                    <Link href="https://mail.google.com" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Skills Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card border-primary/20 hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 text-center">
                    <Globe className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold mb-1 font-mono text-sm">Frontend</h3>
                    <p className="text-xs text-muted-foreground">React, Vue, Next.js , Angular , Html , Css , js </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-primary/20 hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 text-center">
                    <Server className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold mb-1 font-mono text-sm">Backend</h3>
                    <p className="text-xs text-muted-foreground">Node.js, Python, APIs , Spring boot(JAVA) , Laravel </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-primary/20 hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 text-center">
                    <Database className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold mb-1 font-mono text-sm">Database</h3>
                    <p className="text-xs text-muted-foreground">PostgreSQL, MongoDB, MySql  </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-primary/20 hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 text-center">
                    <Cpu className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold mb-1 font-mono text-sm">DevOps</h3>
                    <p className="text-xs text-muted-foreground">Docker, AWS, CI/CD</p>
                  </CardContent>
                </Card>
                {/* Nouvelle carte AI */}
                
<Card className="bg-card border-primary/20 hover:border-primary/50 transition-colors">
  <CardContent className="p-4 text-center">
    <Brain className="h-6 w-6 mx-auto mb-2 text-primary" />
    <h3 className="font-semibold mb-1 font-mono text-sm">AI</h3>
    <p className="text-xs text-muted-foreground">Machine Learning, Deep Learning, NLP, PyTorch, TensorFlow</p>
  </CardContent>
</Card>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Skills & Experience Timeline */}
<section className="py-16 px-4">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12 font-mono text-primary">
      {"/* Skills & Experience */"}
    </h2>
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>

        {/* Full-Stack Developer Experience */}
        <div key="1" className="relative flex items-center mb-8">
          <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Layers className="h-5 w-5 text-white" />
          </div>
          <Card className="ml-12 bg-card border-primary/20 hover:border-primary/50 transition-all hover:animate-glow">
            <CardContent className="p-6">
              <h3 className="font-bold font-mono text-primary">Full-Stack Developer</h3>
              <p className="text-muted-foreground">Freelance Developer</p>
              <p className="text-sm text-muted-foreground font-mono">2021 - Present</p>
            </CardContent>
          </Card>
        </div>

       {/* Education Section 1 */}
<div key="3" className="relative flex items-center mb-8">
  <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
    <Code2 className="h-5 w-5 text-white" />
  </div>
  <Card className="ml-12 bg-card border-primary/20 hover:border-primary/50 transition-all hover:animate-glow">
    <CardContent className="p-6">
      <h3 className="font-bold font-mono text-primary">BSc in Distributed Computer Systems</h3>
      <p className="text-muted-foreground">FST MARRAKECH </p>
      <p className="text-sm text-muted-foreground font-mono">2021 - 2024</p>
    </CardContent>
  </Card>
</div>

{/* Education Section 2 */}
<div key="4" className="relative flex items-center mb-8">
  <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
    <Server className="h-5 w-5 text-white" />
  </div>
  <Card className="ml-12 bg-card border-primary/20 hover:border-primary/50 transition-all hover:animate-glow">
    <CardContent className="p-6">
      <h3 className="font-bold font-mono text-primary">Master's in AI & Data Analysis</h3>
      <p className="text-muted-foreground">FST TANGER </p>
      <p className="text-sm text-muted-foreground font-mono">(2025 - 2026)</p>
    </CardContent>
  </Card>
</div>

{/* Additional Skills Section */}
<div key="5" className="relative flex items-center mb-8">
  <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
    <Cpu className="h-5 w-5 text-white" />
  </div>
  <Card className="ml-12 bg-card border-primary/20 hover:border-primary/50 transition-all hover:animate-glow">
    <CardContent className="p-6">
      <h3 className="font-bold font-mono text-primary">Additional Skills</h3>
      <p className="text-muted-foreground">
        UML, Merise, Linux (Ubuntu, Kali), Windows Server, VMware, VirtualBox
      </p>
    </CardContent>
  </Card>
</div>

      </div>
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono text-primary">{"// Technologies"}</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm py-2 px-4 bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors font-mono hover:animate-glow"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono text-primary">{"/* Projets */"}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-primary/20 hover:border-primary/50 transition-all hover:animate-glow"
              >
                <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-purple-900/20 flex items-center justify-center">
                  <div className="text-primary text-6xl opacity-50 animate-float">{project.icon}</div>
                </div>
                <CardHeader>
                  <CardTitle className="font-mono text-primary">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 font-mono"
                      asChild
                    >
                         <Link href="https://github.com/oussamasudo" aria-label="GitHub">

                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/80 font-mono" asChild>
                      <Link href={project.live}>
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono text-primary">{"// Statistiques"}</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:animate-glow text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary font-mono mb-2">5+</div>
                <p className="text-sm text-muted-foreground"> Completed Projets</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:animate-glow text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary font-mono mb-2">1+</div>
                <p className="text-sm text-muted-foreground">Expérience</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:animate-glow text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary font-mono mb-2">10K+</div>
                <p className="text-sm text-muted-foreground">Lignes of the Code</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:animate-glow text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary font-mono mb-2">∞</div>
                <p className="text-sm text-muted-foreground">Cups of Coffee</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

           {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 font-mono text-primary">{"// Contact & Feedback"}</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Terminal Info */}
              <div>
                <div className="bg-card border border-primary/20 rounded-lg p-6 font-mono text-sm mb-6">
                  <div className="text-primary mb-2">$ whoami</div>
                  <div className="text-muted-foreground mb-4">oussamahafdoune6@gmail.com</div>
                  <div className="text-primary mb-2">$ cat feedback.txt</div>
                  <p className="text-muted-foreground mb-4">
                   Your feedback and ideas are valuable! Whether it's to improve this portfolio, discuss a project, or simply exchange thoughts on tech.
                  </p>
                  <div className="text-primary">$ ./send_feedback --interactive</div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="font-mono">oussamahafdoune6@gmail.com</span>
                  </div>
                  <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-primary hover:bg-primary/10" asChild>
                    <Link href="https://github.com/oussamasudo" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" className="border-primary hover:bg-primary/10" asChild>
                    <Link href="https://www.linkedin.com/in/oussama-hafdoune-974006260/" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" className="border-primary hover:bg-primary/10" asChild>
                    <Link href="https://mail.google.com" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Code2 className="h-5 w-5 text-primary" />
            <p className="text-muted-foreground font-mono">© 2025 OUSSAMA HAFDOUNE - Full Stack Developer</p>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            {"{ "} Built with ❤️ using Next.js & TypeScript {" }"}
          </p>
        </div>
      </footer>
    </div>
  )
}
