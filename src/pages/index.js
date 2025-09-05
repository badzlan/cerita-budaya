import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import teamData from "@/data/team.json";
import featuresData from "@/data/features.json";

export default function Home() {
   return (
      <div>
         <Hero />
         <Features items={featuresData} />
         <Team members={teamData} />
      </div>
   );
}
