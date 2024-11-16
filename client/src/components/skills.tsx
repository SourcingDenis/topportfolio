import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "SQL", level: 85 },
  { name: "AWS", level: 70 },
]

export function Skills() {
  return (
    <section id="skills" className="container py-16 sm:py-24">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-3 text-center"
      >
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
          Skills
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Technologies and tools I work with
        </p>
      </motion.div>

      <div className="mx-auto mt-12 max-w-3xl space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={fadeIn("up", 0.3 * (index + 1))}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-1.5"
          >
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-1.5" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
