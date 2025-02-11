import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, PenToolIcon as Tool, Users } from "lucide-react"

const features = [
  {
    title: "Innovative Solutions",
    description:
      "We are dedicated to providing the most innovative IoT monitoring solutions that meet your specific needs.",
    icon: Lightbulb,
    color: "text-purple-500",
  },
  {
    title: "Advanced Tools",
    description: "Utilize our advanced tools to ensure seamless operations and optimize device management.",
    icon: Tool,
    color: "text-indigo-500",
  },
  {
    title: "Community Driven",
    description: "We believe in the power of community, working together to create solutions that benefit everyone.",
    icon: Users,
    color: "text-teal-500",
  },
]

export function Intro() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Project Introduction</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The IoT Monitor Project is an innovative solution that aims to revolutionize the monitoring and management
            of IoT devices. We focus on delivering real-time data insights and improving operational efficiency through
            cutting-edge technology.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className={`h-8 w-8 ${feature.color} mb-2`} />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

