"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Calendar, CheckCircle2, Circle } from "lucide-react"

const activities = [
    {
        title: "Project Initiation & Supervisor Meeting",
        date: "August 23, 2024",
        status: "Completed",
        progress: 100,
        description: "Initial project phase focusing on scope definition and approval.",
        tasks: [
            { title: "Project proposal preparation", completed: true },
            { title: "Initial research on IoT air monitoring", completed: true },
            { title: "Supervisor consultation meeting", completed: true },
            { title: "Project scope refinement", completed: true },
            { title: "Timeline and deliverables planning", completed: true },
        ],
    },
    {
        title: "Data Collection Tool Design",
        date: "September 4 - 15, 2024",
        status: "Completed",
        progress: 100,
        description: "Development of comprehensive data gathering instruments.",
        tasks: [
            { title: "Survey questionnaire design", completed: true },
            { title: "Interview script preparation", completed: true },
            { title: "Data collection methodology planning", completed: true },
            { title: "Tool validation with supervisor", completed: true },
            { title: "Pilot testing of collection tools", completed: true },
        ],
    },
    {
        title: "Field Data Collection",
        date: "October 18, 2024",
        status: "Completed",
        progress: 100,
        description: "Comprehensive data gathering from all stakeholders.",
        tasks: [
            { title: "Factory worker interviews", completed: true },
            { title: "Health worker consultations", completed: true },
            { title: "Management stakeholder meetings", completed: true },
            { title: "Environmental data collection", completed: true },
            { title: "Data compilation and organization", completed: true },
        ],
    },
    {
        title: "Software Requirements Specification (SRS)",
        date: "December 6, 2024",
        status: "Completed",
        progress: 100,
        description: "Detailed documentation of system requirements and specifications.",
        tasks: [
            { title: "Functional requirements analysis", completed: true },
            { title: "Non-functional requirements definition", completed: true },
            { title: "System architecture planning", completed: true },
            { title: "User interface requirements", completed: true },
            { title: "SRS document compilation", completed: true },
        ],
    },
    {
        title: "Design Document Submission",
        date: "February 21, 2025",
        status: "In Progress",
        progress: 60,
        description: "Comprehensive system design documentation.",
        tasks: [
            { title: "System architecture design", completed: true },
            { title: "Database schema design", completed: true },
            { title: "UI/UX wireframes", completed: true },
            { title: "API documentation", completed: false },
            { title: "Security architecture planning", completed: false },
        ],
    },
    {
        title: "Project Implementation",
        date: "April 18, 2025",
        status: "Upcoming",
        progress: 0,
        description: "Development and testing of the working prototype.",
        tasks: [
            { title: "IoT sensor network setup", completed: false },
            { title: "Backend development", completed: false },
            { title: "Frontend implementation", completed: false },
            { title: "Database integration", completed: false },
            { title: "System testing and debugging", completed: false },
        ],
    },
    {
        title: "Project Report Submission",
        date: "May 9, 2025",
        status: "Upcoming",
        progress: 0,
        description: "Final documentation of the entire project.",
        tasks: [
            { title: "Implementation documentation", completed: false },
            { title: "Testing results compilation", completed: false },
            { title: "User manual creation", completed: false },
            { title: "Future recommendations", completed: false },
            { title: "Final report compilation", completed: false },
        ],
    },
    {
        title: "Final Presentations",
        date: "May 12 - 16, 2025",
        status: "Upcoming",
        progress: 0,
        description: "Project demonstration and presentation to stakeholders.",
        tasks: [
            { title: "Presentation preparation", completed: false },
            { title: "Demo environment setup", completed: false },
            { title: "Stakeholder presentation", completed: false },
            { title: "Technical demonstration", completed: false },
            { title: "Feedback collection", completed: false },
        ],
    },
]

export function Activities() {
    return (
        <section id="activities" className="py-12 bg-gradient-to-b from-muted/50 to-background">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Project Timeline</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Track our progress as we develop and implement the IoT-driven air quality monitoring system from initial
                        concept to final deployment.
                    </p>
                </motion.div>
                <div className="grid gap-8">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card
                                className={`relative overflow-hidden ${activity.status === "Completed"
                                    ? "border-l-4 border-l-green-500"
                                    : activity.status === "In Progress"
                                        ? "border-l-4 border-l-blue-500"
                                        : "border-l-4 border-l-gray-300"
                                    }`}
                            >
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-2">
                                            <Badge
                                                variant={
                                                    activity.status === "Completed"
                                                        ? "default"
                                                        : activity.status === "In Progress"
                                                            ? "default"
                                                            : "secondary"
                                                }
                                            >
                                                {activity.status}
                                            </Badge>
                                            <div className="flex items-center text-muted-foreground text-sm">
                                                <Calendar className="h-4 w-4 mr-2" />
                                                {activity.date}
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm text-muted-foreground">{activity.progress}%</span>
                                            <Progress value={activity.progress} className="w-24" />
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl">{activity.title}</CardTitle>
                                    <CardDescription>{activity.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        {activity.tasks.map((task, taskIndex) => (
                                            <motion.div
                                                key={taskIndex}
                                                className="flex items-center space-x-2"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: taskIndex * 0.1 }}
                                            >
                                                {task.completed ? (
                                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                                ) : (
                                                    <Circle className="h-4 w-4 text-muted-foreground" />
                                                )}
                                                <span className={`${task.completed ? "text-green-500" : "text-muted-foreground"}`}>
                                                    {task.title}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

