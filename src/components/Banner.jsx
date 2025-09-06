import Link from "next/link";
import * as motion from "motion/react-client";

export default function Banner({ title, subtitle }) {
   const isDetail = !!title;

   return (
      <div className="relative z-10 overflow-hidden pt-[120px] pb-[60px] md:pt-[130px] lg:pt-[160px]">
         <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-stroke/0 via-stroketo-stroke/0"></div>
         <div className="container">
            <div className="flex flex-wrap items-center -mx-4">
               <div className="w-full px-4">
                  <motion.div 
                  initial={{ opacity: 0, y: 100 }} 
                  animate={{ opacity: 1, y:0 }}
                  transition={{
                     type: "spring",
                     bounce: 0.5,
                     duration: 1.5,
                  }}
                  className="text-center">
                     <h1 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] md:leading-[1.2]">{isDetail ? title : "Jelajahi Cerita Nusantara"}</h1>
                     <p className="mb-5 text-base text-body-color">{isDetail ? subtitle : "Setiap daerah punya kisahnya sendiri. Yuk, telusuri dongeng dan legenda yang hidup di hati masyarakat Indonesia."}</p>

                     <ul className="flex items-center justify-center gap-[10px]">
                        {isDetail ? (
                           <>
                              <li>
                                 <Link href="/cerita" className="flex items-center gap-[10px] text-base font-medium text-body-color">
                                    Cerita
                                 </Link>
                              </li>
                              <li>
                                 <span className="flex items-center gap-[10px] text-base font-medium text-dark">
                                    <span className="text-body-color">/</span>
                                    {title}
                                 </span>
                              </li>
                           </>
                        ) : (
                           <>
                              <li>
                                 <Link href="/" className="flex items-center gap-[10px] text-base font-medium text-body-color">
                                    Home
                                 </Link>
                              </li>
                              <li>
                                 <span className="flex items-center gap-[10px] text-base font-medium text-dark">
                                    <span className="text-body-color">/</span>
                                    Cerita
                                 </span>
                              </li>
                           </>
                        )}
                     </ul>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   );
}
