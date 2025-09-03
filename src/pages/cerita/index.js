import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Map from "@/components/Map";

export default function Cerita() {
   return (
      <div>
         <Banner />
         <section className="pb-10 lg:pb-20">
            <div className="container">
               {/* Map */}
               <div className="flex justify-center mb-10">
                  <Map />
               </div>

               {/* Separator responsif */}
               <div className="mb-10">
                  {/* Desktop: garis kiri–kanan */}
                  <div className="hidden md:flex items-center">
                     <div className="flex-grow border-t border-gray-300"></div>
                     <span className="mx-4 text-gray-600 font-medium text-center">atau kamu bisa langsung memilih cerita di sini</span>
                     <div className="flex-grow border-t border-gray-300"></div>
                  </div>

                  {/* Mobile: garis atas–bawah */}
                  <div className="flex flex-col items-center md:hidden">
                     <div className="w-full border-t border-gray-300 mb-2"></div>
                     <span className="text-gray-600 font-medium text-center">atau kamu bisa langsung memilih cerita di sini</span>
                     <div className="w-full border-t border-gray-300 mt-2"></div>
                  </div>
               </div>

               {/* Cards */}
               <div className="flex flex-wrap -mx-4 pt-5 lg:pt-10">
                  <Card />
                  <Card />
                  <Card />
               </div>
            </div>
         </section>
      </div>
   );
}
