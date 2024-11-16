import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { fadeIn } from "@/lib/motion"

export function Hero() {
  return (
    <section className="container flex min-h-[90vh] items-center">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center space-y-3"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
            Hi, I'm John Doe
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
            A passionate full-stack developer creating innovative web solutions
          </p>
          <div className="flex gap-3">
            <Button asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View projects</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center"
        >
          <div className="relative aspect-square w-full max-w-[400px] rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  )
}
