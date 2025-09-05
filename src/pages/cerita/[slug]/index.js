import { quiz } from "@/data/quiz/burung_cendrawasih";
import Banner from "@/components/Banner";
import Embed from "@/components/Embed";
import QuizCard from "@/components/QuizCard";
import Head from "next/head";

export default function DetailCerita() {
   return (
      <>
         <Head>
            <title>Malin Kundang | CeritaBudaya</title>
            <meta name="description" content="Platform pembelajaran cerita rakyat interaktif." />
         </Head>
         <Banner />
         <section className="pb-10 lg:pb-20">
            <div className="container">
               <div className="-mx-4 flex flex-wrap justify-center">
                  <div className="w-full px-4">
                     <Embed />
                     <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 lg:w-8/12 mx-auto">
                           <QuizCard quiz={quiz} shuffle={true} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
