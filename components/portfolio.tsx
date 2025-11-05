"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"

export function Portfolio() {
  const solidworksProjects = [
    {
      title: "Four Stroke Engine",
      description:
        "The goal of this project was to design and assemble a four-stroke engine in SOLIDWORKS, accurately representing its main components and the internal movement of the crankshaft – connecting rod piston mechanism.",
      technologies: ["Surface", "SOLIDWORKS"],
      image: "/four-stroke-engine.png",
      category: "Mechanical",
      year: "2019",
      videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FOUR%20STROKE%20ENGINE-sdFbCH3ykn32sGhvhcs3a77lOqlMUO.mp4",
    },
    {
      title: "Turbocharger",
      description:
        "The project aimed to create a real Turbocharger with all of the primary components, ensuring a realistic design.",
      technologies: ["SOLIDWORKS", "Mechanical"],
      image: "/turbocharger.png",
      category: "Mechanical",
      year: "2018",
      pdfUrl: "/turbocharger.pdf",
      videoUrl: "/turbocharger-video.mp4", // Updated to use new turbocharger video
    },
    {
      title: "Front Wing OBR",
      description:
        "The goal was to develop a new front wing for the Oxford Brookes Racing (Formula Student), optimising the aerodynamic performance and significantly reducing mass compared to the previous model.",
      technologies: ["SOLIDWORKS", "Surfaces", "CFD"],
      image: "/front-wing-obr.png",
      category: "Automotive",
      year: "2024",
      videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FRONT%20WING%20OBR-26bMk0Nq1aEl0GV2Cc7i01dooZgBlp.mp4",
    },
    {
      title: "Hill Climb FORCE TA",
      description:
        "The goal was to optimise the aerodynamic package for a hill climb car, FORE TA, starting with a baseline model and developing an improved version, with a greater aerodynamic efficiency, balanced between load and resistance.",
      technologies: ["SOLIDWORKS", "Surfaces", "CFD"],
      image: "/hill-climb-car.png",
      category: "Automotive",
      year: "2025",
      videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HILL%20CLIMB%20FORCE%20TA-7nggqzQLThQu4OhV44BRkaWwDj8fdE.mp4",
    },
  ]

  const catiaProjects = [
    {
      title: "Engine Cover",
      description:
        "The goal of this project was to design an engine cover for a Formula 1 car, utilising advanced surface tools in CATIA V5, aiming to achieve a well-behaved flow at the end of the cover.",
      technologies: ["CATIA V5", "Surfaces", "CFD"],
      image: "/engine-cover-red.jpg",
      category: "Automotive",
      year: "2025",
      videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ENGINE%20COVER%20PDF%20-j6WionTsj8mE13ulyRXK2zJBlZswjP.mp4",
      githubUrl: "https://github.com/crisandres5/Engine-Cover.git",
    },
    {
      title: "Rear Wing",
      description:
        "The goal of this project was to design a rear wing under the 2023 regulations, using optimised aerodynamic profile geometries.",
      technologies: ["CATIA V5", "Surfaces", "CFD"],
      image: "/rear-wing.jpg",
      category: "Automotive",
      year: "2025",
      videoUrl: "/rear-wing-video.mp4",
    },
  ]

  const ProjectGrid = ({ projects }: { projects: typeof solidworksProjects | typeof catiaProjects }) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="relative overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary">{project.category}</Badge>
            </div>
            <div className="absolute top-4 right-4">
              <Badge variant="outline" className="bg-background/80">
                {project.year}
              </Badge>
            </div>
          </div>

          <CardHeader>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              {(("githubUrl" in project && project.githubUrl) ||
                ("pdfUrl" in project && project.pdfUrl) ||
                ("videoUrl" in project && project.videoUrl)) && (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => {
                    if ("videoUrl" in project && project.videoUrl) {
                      window.open(project.videoUrl, "_blank")
                    } else if ("githubUrl" in project && project.githubUrl) {
                      window.open(project.githubUrl, "_blank")
                    } else if ("pdfUrl" in project && project.pdfUrl) {
                      window.open(project.pdfUrl, "_blank")
                    }
                  }}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Details
                </Button>
              )}
              <Button size="sm" variant="ghost">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Project Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A showcase of innovative aerodynamic surface engineering projects organized by design software expertise.
          </p>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">CATIA V5 Projects</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complex aerodynamic surface designs created with CATIA V5 advanced surfacing capabilities.
            </p>
          </div>
          <ProjectGrid projects={catiaProjects} />
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">SOLIDWORKS Projects</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced surface engineering projects developed using SOLIDWORKS design and simulation tools.
            </p>
          </div>
          <ProjectGrid projects={solidworksProjects} />
        </div>
      </div>
    </section>
  )
}
