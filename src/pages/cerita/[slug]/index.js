import data from "@/data/cerita.json";
import Banner from "@/components/Banner";
import Embed from "@/components/Embed";
import QuizCard from "@/components/QuizCard";
import Head from "next/head";

export async function getStaticPaths() {
   return {
      paths: data.map((c) => ({ params: { slug: c.slug } })),
      fallback: false,
   };
}

export async function getStaticProps({ params }) {
   const cerita = data.find((c) => c.slug === params.slug);

   const quiz = cerita.quizFile ? (await import(`@/data/quiz/${cerita.quizFile}.js`)).quiz : null;

   return {
      props: {
         cerita,
         quiz,
      },
   };
}

export default function DetailCerita({ cerita, quiz }) {
   const [mainTitle, subTitle] = cerita.title.split(":");

   return (
      <>
         <Head>
            <title>{cerita.title} | CeritaBudaya</title>
            <meta name="description" content="Platform pembelajaran cerita rakyat interaktif." />
         </Head>

         <Banner title={mainTitle} subtitle={subTitle?.trim()} />

         <section className="pb-10 lg:pb-20">
            <div className="container">
               <div className="-mx-4 flex flex-wrap justify-center">
                  <div className="w-full px-4">
                     <Embed videoUrl={cerita.videoUrl} synopsis={cerita.synopsis} virtualTourUrl={cerita.virtualTourUrl} />

                     {quiz && (
                        <div className="flex flex-wrap -mx-4 mt-6">
                           <div className="w-full px-4 lg:w-8/12 mx-auto">
                              <QuizCard quiz={quiz} shuffle={true} />
                           </div>
                        </div>
                     )}

                     {cerita.virtualTourUrl && (
                        <div className="mt-10 text-center">
                           <a href={cerita.virtualTourUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md bg-primary px-6 py-3 text-white font-medium shadow hover:bg-opacity-90">
                              Lihat Virtual Tour
                           </a>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
