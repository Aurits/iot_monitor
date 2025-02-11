import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { memberInfo } from "@/lib/team-data"
import { Github, Linkedin, Twitter } from "lucide-react"
import { notFound } from "next/navigation"

interface Props {
    params: {
        name: string
    }
}

export default function TeamMemberPage({ params }: Props) {
    const member = memberInfo[params.name.toLowerCase()]

    if (!member) {
        notFound()
    }

    return (
        <div className="container max-w-4xl py-12">
            <div className="text-center mb-8">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={`/${params.name.toLowerCase()}.jpg`} alt={params.name} />
                    <AvatarFallback>{params.name[0]}</AvatarFallback>
                </Avatar>
                <h1 className="text-4xl font-bold mb-2">
                    {params.name.charAt(0).toUpperCase() + params.name.slice(1).toLowerCase()}
                </h1>
                <p className="text-2xl text-muted-foreground">{member.role}</p>
            </div>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{member.about}</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="h-6 w-6" />
                        </a>
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Twitter className="h-6 w-6" />
                        </a>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-8 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Experience</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {member.experience.map((exp, index) => (
                                <div key={index}>
                                    <h4 className="font-semibold">{exp.company}</h4>
                                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                                    {index < member.experience.length - 1 && <Separator className="my-2" />}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {member.skills.map((skill, index) => (
                                <Badge key={index} variant="secondary">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

