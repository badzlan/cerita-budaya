import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Map from "@/components/Map";
import Head from "next/head";
import cerita from "@/data/cerita.json";

export default function Cerita() {
   return (
      <>
         <Head>
            <title>Cerita | CeritaBudaya</title>
            <meta name="description" content="Platform pembelajaran cerita rakyat interaktif." />
         </Head>
         <Banner />
         <section className="pb-10 lg:pb-20">
            <div className="container">
               <div className="flex justify-center mb-10">
                  <Map cerita={cerita} />
               </div>

               <div className="mb-10">
                  <div className="hidden md:flex items-center">
                     <div className="flex-grow border-t border-gray-300"></div>
                     <span className="mx-4 text-gray-600 font-medium text-center">atau kamu bisa langsung memilih cerita di sini</span>
                     <div className="flex-grow border-t border-gray-300"></div>
                  </div>

                  <div className="flex flex-col items-center md:hidden">
                     <div className="w-full border-t border-gray-300 mb-2"></div>
                     <span className="text-gray-600 font-medium text-center">atau kamu bisa langsung memilih cerita di sini</span>
                     <div className="w-full border-t border-gray-300 mt-2"></div>
                  </div>
               </div>

               <div className="flex flex-wrap -mx-4 pt-5 lg:pt-10">
                  {cerita.map((item) => (
                     <Card key={item.slug} {...item} />
                  ))}
               </div>
            </div>
         </section>
      </>
   );
}
