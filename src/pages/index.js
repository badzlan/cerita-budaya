import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import teamData from "@/data/team.json";
import featuresData from "@/data/features.json";
import Head from "next/head";

export default function Home() {
   return (
      <>
         <Head>
            <title>Home | CeritaBudaya</title>
            <meta name="description" content="Platform pembelajaran cerita rakyat interaktif." />
         </Head>
         <Hero />
         <Features items={featuresData} />
         <Team members={teamData} />
      </>
   );
}
