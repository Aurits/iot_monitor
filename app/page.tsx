
import Activities from "./components/Activities";
import Blog from "./components/Blog";
import ContactSection from "./components/ContactSection";
import Intro from "./components/Intro";
import Showcase from "./components/Showcase";
import TeamSection from "./components/TeamSection";


export default function Home() {
  return (
    <div className="space-y-16">
      <Showcase />
      <Intro />
      <Blog />
      <Activities />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
