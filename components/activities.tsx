"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

const activities = [
    {
        title: "Project Initiation & Supervisor Meeting",
        date: "August 23, 2024",
        description: "Met with our supervisor to discuss and confirm the chosen project direction and scope.",
    },
    {
        title: "Data Collection Tool Design",
        date: "September 4 - 15, 2024",
        description:
            "Designed comprehensive data collection tools for different stakeholders including factory workers, health workers, and factory managers.",
    },
    {
        title: "Field Data Collection",
        date: "October 18, 2024",
        description:
            "Completed the data collection phase through interviews and surveys with various stakeholders in the factory environment.",
    },
    {
        title: "Software Requirements Specification (SRS)",
        date: "December 6, 2024",
        description:
            "Submitted the comprehensive Software Requirements Specification document outlining project requirements and specifications.",
    },
    {
        title: "Design Document Submission",
        date: "February 21, 2025",
        description:
            "Completion and submission of the detailed system design document including architecture, interfaces, and technical specifications.",
    },
    {
        title: "Project Implementation",
        date: "April 18, 2025",
        description:
            "Delivery of working prototype demonstrating core functionalities of the air quality monitoring system.",
    },
    {
        title: "Project Report Submission",
        date: "May 9, 2025",
        description:
            "Submission of final project report documenting the entire development process, findings, and recommendations.",
    },
    {
        title: "Final Presentations",
        date: "May 12 - 16, 2025",
        description:
            "Project demonstrations and presentations to stakeholders, showcasing the completed system and its benefits.",
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
                        Track our progress as we develop and implement the IoT-driven air quality monitoring system from initial
                        concept to final deployment.
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

