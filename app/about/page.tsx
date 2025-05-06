import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, AlertTriangle, Archive, BarChart, CheckCircle, Cloud, Database, Download, ExternalLink, File, FileText, GitBranch, Github, HardDrive, LineChart, Lock, Shield, Users } from 'lucide-react'

// Project documents array
const projectDocuments = [
    {
        name: "BSE25-5 Data Collection Tools.zip",
        type: "archive",
        size: "277 KB",
        date: "5/4/2025",
        icon: <Archive className="h-5 w-5" />,
        description: "Tools and utilities for data collection",
        downloadUrl: "/documents/tools.zip",
    },
    {
        name: "BSE25-5 PROJECT REPORT_2.pdf",
        type: "pdf",
        size: "419 KB",
        date: "5/4/2025",
        icon: <FileText className="h-5 w-5" />,
        description: "Comprehensive project report with findings and analysis",
        downloadUrl: "/documents/report.pdf",
    },
    {
        name: "BSE25-5(SDD).pdf",
        type: "pdf",
        size: "1,148 KB",
        date: "5/4/2025",
        icon: <FileText className="h-5 w-5" />,
        description: "Software Design Document with technical specifications",
        downloadUrl: "/documents/sdd.pdf",
    },
    {
        name: "Software Requirements Specification BSE25-5.pdf",
        type: "pdf",
        size: "583 KB",
        date: "5/4/2025",
        icon: <FileText className="h-5 w-5" />,
        description: "Detailed requirements specification for the system",
        downloadUrl: "/documents/srs.pdf",
    },
    {
        name: "notes.txt",
        type: "text",
        size: "1 KB",
        date: "5/4/2025",
        icon: <File className="h-5 w-5" />,
        description: "Additional notes and documentation",
        downloadUrl: "/documents/notes.txt",
    },
]

// Project links
const projectLinks = [
    {
        title: "Blog",
        description: "Project blog with updates and articles about our air quality monitoring system",
        github: {
            url: "https://github.com/Aurits/iot_monitor/tree/master",
            label: "GitHub Repository"
        },
        deployment: {
            url: "https://iot-monitor-livid.vercel.app/",
            label: "Live Deployment"
        },
        icon: <Activity className="h-6 w-6" />,
        status: "Finalized",
        credentials: null
    },
    {
        title: "Dashboard",
        description: "Interactive dashboard for monitoring and analyzing air quality data",
        github: {
            url: "https://github.com/Aurits/factory-air-watch",
            label: "GitHub Repository"
        },
        deployment: {
            url: "https://factory-air-watch-m9bx.vercel.app",
            label: "Live Deployment"
        },
        icon: <BarChart className="h-6 w-6" />,
        status: "Finalized",
        credentials: {
            email: "admin@example.com",
            password: "password123"
        }
    }
]

export default function AboutPage() {
    return (
        <div className="py-12">
            <section className="mb-12">
                <h1 className="text-4xl font-bold mb-6">About Our Project</h1>
                <p className="text-lg text-muted-foreground mb-6">
                    The Real-Time IoT-Driven Air Condition Monitoring System for Factory Environments combines IoT hardware,
                    cloud-based analytics, and a user-friendly web dashboard to provide continuous monitoring and immediate alerts
                    for maintaining healthy indoor air conditions in factory settings.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-primary" />
                                Worker Safety
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Ensure safe air quality in factories, reducing health risks and boosting worker morale through
                                continuous monitoring and immediate alerts.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-primary" />
                                Immediate Alerts
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Deploy local and remote alerts to minimize response times when threshold levels are exceeded, ensuring
                                quick action.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* New Project Links Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Project Links</h2>
                <p className="text-lg text-muted-foreground mb-6">
                    Access our project repositories and live deployments to explore the code and functionality of our air quality monitoring system.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectLinks.map((project, index) => (
                        <Card key={index} className="overflow-hidden border-2">
                            <div className="bg-primary/5 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-full text-primary">
                                            {project.icon}
                                        </div>
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                    </div>
                                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 flex items-center gap-1">
                                        <CheckCircle className="h-3.5 w-3.5" />
                                        {project.status}
                                    </Badge>
                                </div>
                                <p className="text-muted-foreground">{project.description}</p>
                            </div>

                            <CardContent className="p-6 pt-6">
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Github className="h-4 w-4 text-primary" />
                                            <h4 className="font-medium">{project.github.label}</h4>
                                        </div>
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <a href={project.github.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                                <span>View Repository</span>
                                                <ExternalLink className="h-3.5 w-3.5" />
                                            </a>
                                        </Button>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <ExternalLink className="h-4 w-4 text-primary" />
                                            <h4 className="font-medium">{project.deployment.label}</h4>
                                        </div>
                                        <Button variant="default" size="sm" className="w-full" asChild>
                                            <a href={project.deployment.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                                <span>Visit Live Site</span>
                                                <ExternalLink className="h-3.5 w-3.5" />
                                            </a>
                                        </Button>
                                    </div>

                                    {project.credentials && (
                                        <div className="mt-4 p-3 bg-muted rounded-md">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Lock className="h-4 w-4 text-primary" />
                                                <h4 className="font-medium">Login Credentials</h4>
                                            </div>
                                            <div className="text-sm space-y-1 text-muted-foreground">
                                                <p><span className="font-medium">Email:</span> {project.credentials.email}</p>
                                                <p><span className="font-medium">Password:</span> {project.credentials.password}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Core Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <HardDrive className="h-5 w-5 text-primary" />
                                IoT Device Network
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Badge variant="outline">Sensors</Badge>
                                    CO, CO₂, PM2.5, PM10, VOCs, Methane
                                </li>
                                <li className="flex items-center gap-2">
                                    <Badge variant="outline">Alerts</Badge>
                                    Local buzzers and LED indicators
                                </li>
                                <li className="flex items-center gap-2">
                                    <Badge variant="outline">Power</Badge>
                                    Optimized battery management
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Cloud className="h-5 w-5 text-primary" />
                                Cloud Platform
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Badge variant="outline">Security</Badge>
                                    Secure data ingestion
                                </li>
                                <li className="flex items-center gap-2">
                                    <Badge variant="outline">Scale</Badge>
                                    Handles multiple factory zones
                                </li>
                                <li className="flex items-center gap-2">
                                    <Badge variant="outline">Analytics</Badge>
                                    Built-in visualization tools
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Activity className="h-5 w-5 text-primary" />
                                Real-Time Monitoring
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Badge variant="outline">Display</Badge>
                                    Live metrics and charts
                                </li>
                                <li className="flex items-center gap-2">
                                    <Badge variant="outline">Alerts</Badge>
                                    Email, SMS, in-app notifications
                                </li>
                                <li className="flex items-center gap-2">
                                    <Badge variant="outline">Reports</Badge>
                                    Automated compliance reporting
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">System Architecture</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Database className="h-5 w-5 text-primary" />
                                Data Management
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li>Secure MySQL database integration</li>
                                <li>Comprehensive audit logging</li>
                                <li>Efficient data retrieval system</li>
                                <li>Long-term data retention</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-primary" />
                                User Management
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li>Role-based access control</li>
                                <li>Customizable user permissions</li>
                                <li>Secure authentication system</li>
                                <li>Activity logging and tracking</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Project Documentation</h2>
                <p className="text-lg text-muted-foreground mb-6">
                    Access our comprehensive project documentation, including technical specifications, reports, and tools for the
                    IoT-Driven Air Condition Monitoring System.
                </p>

                <div className="overflow-hidden rounded-lg border bg-card">
                    <div className="grid grid-cols-12 p-4 text-sm font-medium text-muted-foreground border-b">
                        <div className="col-span-6">Document</div>
                        <div className="col-span-2 text-center">Type</div>
                        <div className="col-span-2 text-center">Size</div>
                        <div className="col-span-2 text-center">Action</div>
                    </div>

                    <div className="divide-y">
                        {projectDocuments.map((doc, index) => (
                            <div key={index} className="grid grid-cols-12 items-center p-4 hover:bg-muted/50 transition-colors">
                                <div className="col-span-6 flex items-center gap-3">
                                    <div className="text-primary">{doc.icon}</div>
                                    <div>
                                        <p className="font-medium">{doc.name}</p>
                                        <p className="text-xs text-muted-foreground">{doc.description}</p>
                                    </div>
                                </div>
                                <div className="col-span-2 text-center">
                                    <Badge variant="outline" className="capitalize">
                                        {doc.type}
                                    </Badge>
                                </div>
                                <div className="col-span-2 text-center text-sm text-muted-foreground">{doc.size}</div>
                                <div className="col-span-2 text-center">
                                    <Button variant="ghost" size="sm" className="gap-1" asChild>
                                        <a href={doc.downloadUrl} download>
                                            <Download className="h-4 w-4" />
                                            <span>Download</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Future Enhancements</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <LineChart className="h-5 w-5 text-primary" />
                                Predictive Analytics
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Machine learning models to predict pollution spikes before they occur.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BarChart className="h-5 w-5 text-primary" />
                                Advanced Alerts
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Integration with industrial control systems for automated ventilation adjustment.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <GitBranch className="h-5 w-5 text-primary" />
                                Multi-Cloud Support
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Optional redundancy across different cloud providers for enhanced availability.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}

