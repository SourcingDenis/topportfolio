import { useParams } from "wouter"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"
import { Button } from "@/components/ui/button"
import { Link } from "wouter"
import { ArrowLeft, Github, Globe } from "lucide-react"
import { useRef } from "react"
import { useDynamicSpacing } from "@/hooks/use-dynamic-spacing"
import { useSpacingPresets } from "@/hooks/use-spacing-presets"

// Enhanced project type with more details
const projects = [
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React and Node.js",
    category: "Full Stack",
    image: "https://via.placeholder.com/800x600",
    longDescription: `
      A comprehensive e-commerce solution that provides a seamless shopping experience. 
      The platform includes features such as product catalog management, shopping cart functionality, 
      secure checkout process, and order management.
    `,
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Stripe"],
    challenges: `
      One of the main challenges was implementing real-time inventory management 
      while handling concurrent transactions. This was solved by implementing 
      optimistic locking and a queuing system for purchases.
    `,
    liveSite: "https://example.com",
    sourceCode: "https://github.com/example/project",
    images: [
      "https://via.placeholder.com/800x600",
      "https://via.placeholder.com/800x600",
      "https://via.placeholder.com/800x600"
    ]
  },
  // ... other projects ...
]

export function ProjectPage() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  const contentRef = useRef<HTMLDivElement>(null)
  const projectDetailSpacing = useSpacingPresets('project-detail')
  const dynamicSpacing = useDynamicSpacing(contentRef, projectDetailSpacing)

  if (!project) {
    return <div className="container py-24">Project not found</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24">
        <Link href="/#projects">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </Link>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className={`space-y-8 ${dynamicSpacing}`}
          ref={contentRef}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg object-cover"
            style={{ maxHeight: "500px" }}
          />

          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <p className="text-muted-foreground">{project.longDescription}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Challenges & Solutions</h2>
            <p className="text-muted-foreground">{project.challenges}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Project Gallery</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Button asChild>
              <a href={project.liveSite} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" /> Visit Live Site
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Source Code
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
