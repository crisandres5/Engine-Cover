import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function About() {
  const skills = ["CATIA V5", "3DEXPERIENCE", "SolidWorks", "Star CCM+", "ANSYS Fluent"]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About My Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Specialising in designing race car components. Proficient in CAD software, especially CATIA V5/3D
            EXPERIENCE and SolidWorks, ensuring surface continuity.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <Image
              src="/surfacing-badge.png"
              alt="Dassault Systemes SOLIDWORKS Professional Surfacing Certification"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <Image
              src="/cswa-badge.webp"
              alt="Dassault Systemes CSWA SOLIDWORKS Associate Certification"
              fill
              className="object-contain"
            />
          </div>
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
