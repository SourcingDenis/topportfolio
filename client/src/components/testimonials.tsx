import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useRef } from "react"
import { useDynamicSpacing } from "@/hooks/use-dynamic-spacing"
import { useSpacingPresets } from "@/hooks/use-spacing-presets"

export function Testimonials() {
  const contentRef = useRef<HTMLDivElement>(null)
  const testimonialSpacing = useSpacingPresets('testimonials')
  const dynamicSpacing = useDynamicSpacing(contentRef, testimonialSpacing)

  return (
    <section id="testimonials" className={`container ${dynamicSpacing} py-16 md:py-24 lg:py-32`}>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center space-y-6 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Testimonials
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg lg:text-xl">
          What people say about working with me
        </p>
      </motion.div>

      <div 
        ref={contentRef}
        className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            variants={fadeIn("up", 0.3 * (index + 1))}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg">
              <CardContent className="flex h-full flex-col justify-between space-y-6 p-6">
                <p className="text-muted-foreground">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div className="space-y-1">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "StartupX",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content: "Working with John was a great experience. He brought innovative solutions to our project and was always responsive to feedback.",
  },
  {
    name: "Emily Rodriguez",
    role: "Frontend Lead",
    company: "WebSolutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content: "John's expertise in both frontend and backend development made him an invaluable asset to our team. His code is clean and well-documented.",
  },
]
