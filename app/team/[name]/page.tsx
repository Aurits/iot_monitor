import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { memberInfo } from "@/lib/team-data"
import { Award, Briefcase, Code, FileText, Github, GraduationCap, Linkedin, Mail, Twitter, Users } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

const teamImages = {
    kevin: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kevin.jpg-6Yl3DFF7Kbth9g1iyw5x85TvMZi7dS.jpeg",
    cynthia: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cynthia.jpg-Tg9LjyQDD5BMIKzgixy3NOZNunUJVE.jpeg",
    jelly: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jelly.jpg-TsTFzcvFMYeMT2FEVvaiBeTSduUjyP.jpeg",
    ambrose: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ambrose.jpg-B3CBRR2iEaJecJk55wNuhPN6mqcKTF.jpeg",
} as const

type Props = {
    params: Promise<{ name: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { name } = await params
    const normalizedName = name.toLowerCase()
    const member = memberInfo[normalizedName as keyof typeof memberInfo]

    if (!member) {
        return {
            title: "Member Not Found",
            description: "The team member you are looking for does not exist.",
        }
    }

    return {
        title: `${normalizedName.charAt(0).toUpperCase() + normalizedName.slice(1)} - Factory Monitor Team`,
        description: member.bio,
    }
}

export default async function TeamMemberPage({ params }: Props) {
    const { name } = await params
    const normalizedName = name.toLowerCase()
    const member = memberInfo[normalizedName as keyof typeof memberInfo]

    if (!member) {
        notFound()
    }

    const projectContributions = [
        "System Architecture Design",
        "Database Implementation",
        "API Development",
        "Documentation",
        "Team Coordination",
    ]

    return (
        <div className="container max-w-4xl py-12 px-4 sm:px-6">
            <Card className="mb-8 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-r from-primary/20 to-purple-500/20">
                    <div className="absolute -bottom-16 left-6">
                        <Avatar className="w-32 h-32 border-4 border-background">
                            <AvatarImage src={teamImages[normalizedName as keyof typeof teamImages]} alt={normalizedName} />
                            <AvatarFallback>{normalizedName[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <CardContent className="pt-20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-4xl font-bold mb-2">
                                {normalizedName.charAt(0).toUpperCase() + normalizedName.slice(1)}
                            </h1>
                            <p className="text-2xl text-muted-foreground">{member.role}</p>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href={member.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github className="h-6 w-6" />
                                <span className="sr-only">GitHub Profile</span>
                            </a>
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin className="h-6 w-6" />
                                <span className="sr-only">LinkedIn Profile</span>
                            </a>
                            <a
                                href={member.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Twitter className="h-6 w-6" />
                                <span className="sr-only">Twitter Profile</span>
                            </a>
                            <a
                                href={`mailto:${normalizedName}@iotmonitor.com`}
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Mail className="h-6 w-6" />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Tabs defaultValue="about" className="space-y-6">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 h-auto gap-4">
                    <TabsTrigger value="about" className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        About
                    </TabsTrigger>
                    <TabsTrigger value="experience" className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        Experience
                    </TabsTrigger>
                    <TabsTrigger value="education" className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        Education
                    </TabsTrigger>
                    <TabsTrigger value="skills" className="flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Skills
                    </TabsTrigger>
                    <TabsTrigger value="contributions" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Project Role
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="about">
                    <Card>
                        <CardHeader>
                            <CardTitle>About</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground whitespace-pre-line">{member.about}</p>
                            <p className="mt-4 text-muted-foreground">{member.bio}</p>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="experience">
                    <Card>
                        <CardHeader>
                            <CardTitle>Professional Experience</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {member.experience.map((exp, index) => (
                                    <div key={index} className="relative pl-8 pb-6 last:pb-0">
                                        <div className="absolute left-0 top-0 h-full w-px bg-muted-foreground/20">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary" />
                                        </div>
                                        <h4 className="font-semibold text-lg">{exp.company}</h4>
                                        <p className="text-muted-foreground">{exp.role}</p>
                                        <p className="text-sm text-muted-foreground/60">{exp.period}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="education">
                    <Card>
                        <CardHeader>
                            <CardTitle>Education & Certifications</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {member.education.map((edu, index) => (
                                    <div key={index} className="relative pl-8 pb-6 last:pb-0">
                                        <div className="absolute left-0 top-0 h-full w-px bg-muted-foreground/20">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary" />
                                        </div>
                                        <h4 className="font-semibold text-lg">{edu.institution}</h4>
                                        <p className="text-muted-foreground">{edu.degree}</p>
                                        <p className="text-sm text-muted-foreground/60">{edu.period}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="skills">
                    <Card>
                        <CardHeader>
                            <CardTitle>Technical Skills</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {member.skills.map((skill, index) => (
                                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="contributions">
                    <Card>
                        <CardHeader>
                            <CardTitle>Project Contributions</CardTitle>
                            <CardDescription>Key responsibilities and contributions to the IoT Monitor project</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                {projectContributions.map((contribution, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <Award className="h-5 w-5 text-primary" />
                                        <span>{contribution}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

