import Hero from "@/components/Hero";
import Team from "@/components/Team";
import teamData from "@/data/team.json";

export default function Home() {
   return (
      <div>
         <Hero />
         <Team members={teamData} />
      </div>
   );
}
