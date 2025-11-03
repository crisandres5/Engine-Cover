import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-2">Hello, I am</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
                Christian Enríquez
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
                Aero Surfacer & CAD Designer
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>
          </div>

          {/* Right Column - Professional Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/christian-enriquez-photo.jpeg"
                  alt="Christian Enríquez - Aero Surfacer & CAD Designer"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="mt-16 text-center">
          <a
            href="#about"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
