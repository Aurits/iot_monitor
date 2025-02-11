"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

const activities = [
    {
        title: "Project Initiation & Requirements Gathering",
        date: "January 15, 2024",
        description:
            "Initial meetings with stakeholders to understand factory air quality monitoring needs and define project scope.",
    },
    {
        title: "System Architecture Design",
        date: "January 30, 2024",
        description:
            "Development of comprehensive system architecture including IoT network, cloud platform, and database design.",
    },
    {
        title: "Sensor Network Implementation",
        date: "February 15, 2024",
        description:
            "Installation and testing of IoT sensors for monitoring various air quality parameters in factory environments.",
    },
    {
        title: "Dashboard Development",
        date: "March 1, 2024",
        description: "Creation of user-friendly web dashboard for real-time monitoring and analytics visualization.",
    },
    {
        title: "Testing & Quality Assurance",
        date: "March 15, 2024",
        description:
            "Comprehensive testing of all system components including sensors, alerts, and reporting functionality.",
    },
    {
        title: "Deployment Planning",
        date: "March 30, 2024",
        description: "Preparation for system deployment including documentation and training materials.",
    },
]

export function Activities() {
    return (
        <section id="activities" className="py-12 bg-muted/50">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Project Timeline</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Track our progress as we develop and implement the IoT-driven air quality monitoring system.
                    </p>
                </motion.div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl">{activity.title}</CardTitle>
                                    <div className="flex items-center text-muted-foreground text-sm">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        {activity.date}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{activity.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

