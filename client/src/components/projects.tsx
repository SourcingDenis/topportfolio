import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "wouter"
import { getImageProps, optimizedAnimationSettings } from "@/lib/utils"
import { useDynamicSpacing } from "@/hooks/use-dynamic-spacing"
import { useSpacingPresets } from "@/hooks/use-spacing-presets"

const projects = [
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React and Node.js",
    category: "Full Stack",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "A React-based task management application with drag-and-drop functionality",
    category: "Frontend",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: "api-gateway",
    title: "API Gateway",
    description: "A scalable API gateway built with Node.js and Express",
    category: "Backend",
    image: "https://via.placeholder.com/400x300",
  },
]

const categories = ["All", "Frontend", "Backend", "Full Stack"]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const contentRef = useRef<HTMLDivElement>(null)
  const projectSpacing = useSpacingPresets('projects')
  const dynamicSpacing = useDynamicSpacing(contentRef, projectSpacing)

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  )

  return (
    <section id="projects" className="container py-16 sm:py-24">
      <motion.div
        {...optimizedAnimationSettings}
        className="flex flex-col items-center gap-3 text-center"
      >
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
          Projects
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Check out some of my recent projects
        </p>
      </motion.div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>

      <div
        ref={contentRef}
        className={`mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 ${dynamicSpacing}`}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeIn("up", 0.3 * (index + 1))}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "100px" }}
            className="relative"
          >
            <Card className="overflow-hidden transition-shadow duration-200 hover:shadow-lg">
              <div className="relative aspect-video">
                <img
                  {...getImageProps(
                    project.image,
                    project.title,
                    "w-full h-full object-cover",
                    index < 2
                  )}
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="mt-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link href={`/project/${project.id}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
