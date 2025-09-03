import Image from "next/image";

export default function Embed() {
   return (
      <div>
         <div className="relative z-20 mb-[50px] h-[200px] overflow-hidden rounded-[5px] md:h-[385px] lg:h-[650px]">
            <iframe src="https://www.youtube.com/embed/IQW64q5-lNE" width={"100%"} height={"100%"} className="object-cover object-center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
         </div>
         <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-8/12 mx-auto">
               <div>
                  <h2 className="mb-8 text-2xl font-bold text-dark sm:text-3xl md:text-[35px] md:leading-[1.28]">Facing a challenge is kind of a turn-on for an easy rider</h2>

                  <p className="mb-6 text-base text-body-color">
                     There&apos;s a time and place for everything… including asking for reviews. For instance: you should not ask for a review on your checkout page. The sole purpose of this page is to guide your customer to complete their
                     purchase, and this means that the page should be as minimalist and pared-down as possible. You don&apos;t want to have any unnecessary elements or Call To Actions.
                  </p>

                  <p className="mb-8 text-base text-body-color">
                     There&apos;s a time and place for everything… including asking for reviews. For instance: you should not ask for a review on your checkout page. The sole purpose of this page is to guide your customer to complete their
                     purchase, and this means that the page should be as minimalist and pared-down as possible. You don&apos;t want to have any unnecessary elements or Call To Actions.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
