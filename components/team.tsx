"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { memberInfo } from "@/lib/team-data"
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
                        src={teamImages[key as keyof typeof teamImages]}
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

