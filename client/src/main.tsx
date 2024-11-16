import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Switch, Route } from "wouter"
import { SWRConfig } from "swr"
import { ThemeProvider } from "@/components/theme-provider"
import { fetcher } from "./lib/fetcher"
import { Home } from "./pages/home"
import { ProjectPage } from "./pages/project"
import { ResumePage } from "./pages/resume"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" attribute="class">
      <SWRConfig value={{ fetcher }}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/project/:id" component={ProjectPage} />
          <Route path="/resume" component={ResumePage} />
          <Route>404 Page Not Found</Route>
        </Switch>
      </SWRConfig>
    </ThemeProvider>
  </StrictMode>
)
