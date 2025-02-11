"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { motion } from "framer-motion"

const posts = [
  {
    title: "Understanding Factory Air Quality Standards",
    date: "February 8, 2024",
    description:
      "A comprehensive guide to international air quality standards and their importance in factory environments.",
  },
  {
    title: "IoT Sensors in Industrial Air Monitoring",
    date: "February 5, 2024",
    description:
      "Explore the various types of IoT sensors used in modern air quality monitoring systems and their applications.",
  },
  {
    title: "Real-Time Alerts: Protecting Worker Health",
    date: "February 1, 2024",
    description:
      "How immediate notifications and automated alerts are revolutionizing workplace safety in industrial settings.",
  },
  {
    title: "Data Analytics in Air Quality Management",
    date: "January 28, 2024",
    description:
      "Leveraging big data and analytics to improve air quality management and decision-making in factories.",
  },
  {
    title: "Regulatory Compliance Made Easy",
    date: "January 25, 2024",
    description: "Streamline your regulatory compliance with automated monitoring and reporting systems.",
  },
  {
    title: "The Future of Industrial Air Monitoring",
    date: "January 22, 2024",
    description: "Exploring upcoming trends and technologies in industrial air quality monitoring and management.",
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
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest developments in industrial air quality monitoring, IoT technology, and
            workplace safety.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

