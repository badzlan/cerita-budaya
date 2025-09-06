import * as motion from "motion/react-client";

export default function Features({ items }) {
   return (
      <section className="pb-8 pt-20 lg:pb-[70px] lg:pt-[120px]">
         <div className="container">
            <div className="-mx-4 flex flex-wrap">
               <div className="w-full px-4">
                  <motion.div 
                  initial={{ opacity: 0, y: 100 }} 
                  whileInView={{ opacity: 1, y:0 }}
                  transition={{
                     type: "spring",
                     bounce: 0.5,
                     duration: 1.5,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                     <span className="mb-2 block text-lg font-semibold text-primary">Features</span>
                     <h2 className="mb-3 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] md:leading-[1.2]">Fitur Utama</h2>
                     <p className="text-base text-body-color">Nikmati berbagai cara belajar cerita rakyat Nusantara dengan fitur interaktif dan seru.</p>
                  </motion.div>
               </div>
            </div>

            <div className="-mx-4 flex flex-wrap">
               {items.map((feature, index) => (
                  <motion.div key={index} 
                  initial={{ opacity: 0, scale: 0.5 }} 
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                     type: "spring",
                     bounce: 0.5,
                     duration: 1.5,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full px-4 md:w-1/2 lg:w-1/4">
                     <div className="group mb-12 flex md:block flex-col items-center">
                        <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary text-2xl">
                           {feature.icon}
                           <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                        </div>
                        <h4 className="mb-3 text-xl font-bold text-dark">{feature.title}</h4>
                        <p className="mb-8 text-body-color lg:mb-9 text-center md:text-start">{feature.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
