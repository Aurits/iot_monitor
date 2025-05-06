"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

const posts = [
  {
    title: "Project Kickoff: IoT-Driven Air Quality Monitoring",
    date: "August 25, 2024",
    description:
      "An overview of our innovative approach to factory air quality monitoring using IoT technology. Learn about our project goals and expected impact on worker safety.",
  },
  {
    title: "Data Collection Insights: Understanding Factory Environments",
    date: "September 20, 2024",
    description:
      "Key findings from our comprehensive data collection phase, including insights from factory workers, health professionals, and management perspectives.",
  },
  {
    title: "Technical Deep Dive: IoT Sensor Network Architecture",
    date: "October 25, 2024",
    description:
      "Exploring the technical architecture of our IoT sensor network, including sensor types, data transmission protocols, and real-time monitoring capabilities.",
  },
  {
    title: "Requirements Analysis: Building the Right Solution",
    date: "December 10, 2024",
    description:
      "A detailed look at the project requirements and how they shape our approach to creating an effective air quality monitoring system.",
  },
  {
    title: "System Design: From Concept to Blueprint",
    date: "February 25, 2025",
    description:
      "Unveiling our system design approach, including cloud architecture, database structure, and user interface considerations.",
  },
  {
    title: "Implementation Progress: Bringing Ideas to Life",
    date: "April 20, 2025",
    description:
      "Updates on our development progress, featuring the working prototype and initial testing results in real factory environments.",
  },
  ,
  {
    title: "Project Presentation: Showcasing Our Solution",
    date: "May 12, 2025",
    description:
      "Join us for our project presentation, where we will showcase our IoT-driven air quality monitoring solution and its impact on worker safety. We will share insights from our journey and future plans.",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Project Updates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our journey as we develop and implement innovative solutions for industrial air quality monitoring
            and worker safety.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post?.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{post?.title}</CardTitle>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post?.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post?.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

