import { Activities } from "@/components/activities"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { Intro } from "@/components/intro"
import { Showcase } from "@/components/showcase"
import { Team } from "@/components/team"

export default function Home() {
  return (
    <div className="space-y-16">
      <Showcase />
      <Intro />
      <Blog />
      <Activities />
      <Team />
      <Contact />
    </div>
  )
}

