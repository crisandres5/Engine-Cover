import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Target, Microscope } from "lucide-react"

export function About() {
  const skills = ["CATIA V5", "3DEXPERIENCE", "SolidWorks", "Star CCM+", "ANSYS Fluent"]

  const highlights = [
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Developing next-generation surface engineering solutions that push the boundaries of efficiency and performance.",
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "Meticulous attention to detail in surface analysis and CFD optimization for maximum aerodynamic benefit.",
    },
    {
      icon: Microscope,
      title: "Research",
      description:
        "Contributing to advanced surface engineering research through innovative CFD analysis and surface optimization techniques.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About My Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Specialising in designing aerodynamic surface components, using CAD software, especially CATIA
            V5/3DEXPERIENCE and SolidWorks, ensuring innovative solutions, high-quality through surface modelling
            standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <highlight.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">Technical Skills & Expertise</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
