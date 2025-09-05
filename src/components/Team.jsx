import Image from "next/image";

export default function Team({ members }) {
   return (
      <section id="team" className="overflow-hidden bg-gray-1 pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
         <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
               <div className="w-full px-4">
                  <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                     <span className="mb-2 block text-lg font-semibold text-primary">Our Team Members</span>
                     <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]">Tim Kami</h2>
                     <p className="text-base text-body-color">
                        Beberapa figur dibalik Cerita
                        <span style={{ color: "#f1c28b" }}>Budaya</span>.
                     </p>
                  </div>
               </div>
            </div>

            <div className="-mx-4 flex flex-wrap justify-center">
               {members.map((member, index) => (
                  <div key={index} className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/3">
                     <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial">
                        <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                           <Image src={member.image} alt={member.name} width={120} height={120} className="h-[120px] w-[120px] rounded-full object-cover" />
                        </div>

                        <div className="text-center">
                           <h4 className="mb-1 text-lg font-semibold text-dark">{member.name}</h4>
                           <p className="mb-5 text-sm text-body-color">{member.role}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
