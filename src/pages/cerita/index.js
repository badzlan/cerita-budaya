import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Cerita() {
   return (
      <div>
         <Banner />
         <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
            <div className="container">
               <div className="flex flex-wrap -mx-4">
                  <Card />
                  <Card />
                  <Card />
               </div>
            </div>
         </section>
      </div>
   );
}
