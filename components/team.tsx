"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { memberInfo } from "@/lib/team-data"
import { motion } from "framer-motion"
import { BookOpen, Github, GraduationCap, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from "next/link"

const teamImages = {
  kevin: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kevin.jpg-6Yl3DFF7Kbth9g1iyw5x85TvMZi7dS.jpeg",
  cynthia: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cynthia.jpg-Tg9LjyQDD5BMIKzgixy3NOZNunUJVE.jpeg",
  jelly: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jelly.jpg-TsTFzcvFMYeMT2FEVvaiBeTSduUjyP.jpeg",
  ambrose: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ambrose.jpg-B3CBRR2iEaJecJk55wNuhPN6mqcKTF.jpeg",
}

export function Team() {
  return (
    <section id="team" className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the talented individuals behind our IoT-driven air quality monitoring solution.
          </p>
        </motion.div>

        {/* Supervisor Card - Featured at the top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1 flex flex-col items-center justify-center p-6 bg-primary/5">
                <div className="relative mb-4">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 to-primary/60 blur-sm"></div>
                  <Avatar className="w-32 h-32 border-4 border-background">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Dr. Nasser Kimbugwe" />
                    <AvatarFallback className="text-2xl">NK</AvatarFallback>
                  </Avatar>
                </div>
                <Badge variant="outline" className="mb-2 bg-primary/10 text-primary">Project Supervisor</Badge>
                <h3 className="text-2xl font-bold mb-1">Dr. Nasser Kimbugwe</h3>
                <p className="text-sm text-muted-foreground text-center">PhD</p>
              </div>

              <div className="md:col-span-2 p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Department of Networks</h4>
                      <p className="text-sm text-muted-foreground">School of Computing and Informatics Technology, Makerere University</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Research Interests</h4>
                      <p className="text-sm text-muted-foreground">AI (Machine learning and Deep learning), software engineering, internet of things, programming languages, data science</p>
                    </div>
                  </div>
                  <div className="flex justify-start gap-3 mt-6">
                    <Button variant="outline" size="sm" className="rounded-full" asChild>
                      <a href="mailto:kimbugwe@gmail.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </a>
                    </Button>

                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(memberInfo).map(([key, member], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Avatar className="w-full h-full">
                      <AvatarImage
                        src={teamImages[key as keyof typeof teamImages] || "/placeholder.svg"}
                        alt={`${key} profile`}
                        className="object-cover"
                      />
                      <AvatarFallback>{key[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-semibold capitalize mb-1">{key}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </Button>
                  </div>
                  <Button asChild className="w-full" variant="outline">
                    <Link href={`/team/${key}`}>View Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
