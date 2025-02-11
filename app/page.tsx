import { Showcase } from "@/components/showcase"
import { Intro } from "@/components/intro"
import { Blog } from "@/components/blog"
import { Activities } from "@/components/activities"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"

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

