import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center space-y-4 md:space-y-0 py-md md:py-xl lg:py-2xl md:flex-row md:justify-between">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2024 Portfolio. All rights reserved.
        </p>
        <div className="flex space-x-4 md:space-x-6">
          <a 
            href="#" 
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Github Profile"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Twitter Profile"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
