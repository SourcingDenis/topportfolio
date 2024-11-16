import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"
import { Card, CardContent } from "@/components/ui/card"
import { useRef } from "react"
import { useDynamicSpacing } from "@/hooks/use-dynamic-spacing"
import { useSpacingPresets } from "@/hooks/use-spacing-presets"

export function About() {
  const contentRef = useRef<HTMLDivElement>(null)
  const contentSpacing = useSpacingPresets('content')
  const dynamicSpacing = useDynamicSpacing(contentRef, contentSpacing)

  return (
    <section id="about" className={`container ${dynamicSpacing} py-md md:py-2xl lg:py-4xl`}>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center space-y-4 md:space-y-6 text-center"
      >
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          About Me
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg lg:text-xl">
          I'm a full-stack developer with 5+ years of experience building web applications.
          I specialize in React, Node.js, and modern web technologies.
        </p>
      </motion.div>

      <div 
        ref={contentRef}
        className="mx-auto grid max-w-5xl gap-4 md:gap-6 lg:gap-8 md:grid-cols-3"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={fadeIn("up", 0.3 * (index + 1))}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="flex h-full flex-col items-center space-y-4 p-4 md:p-6 lg:p-8">
                <feature.icon className="h-12 w-12" />
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-center text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const features = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern frameworks",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9l3 3-3 3" />
      </svg>
    ),
  },
  {
    title: "Backend Development",
    description: "Creating scalable server-side applications and APIs",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Database Design",
    description: "Designing efficient and scalable database architectures",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
]
