import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";


export default function Hero() {
   return (
      <section id="home" className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
         <div className="container">
            <div className="-mx-4 flex flex-wrap items-center">
               <div className="w-full px-4">
                  <div className="hero-content mx-auto max-w-[780px] text-center">
                     <motion.h1 
                     initial={{ opacity: 0, scale: 0.5 }} 
                     animate={{ opacity: 1, scale: 1 }} 
                     transition={{
                        type: "spring",
                        bounce: 0.5,
                        duration: 2,
                     }} 
                     className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                        Selamat Datang di Cerita<span style={{ color: "#f1c28b" }}>Budaya</span>
                     </motion.h1>
                     <motion.p 
                     initial={{ opacity: 0, scale: 0.5 }} 
                     animate={{ opacity: 1, scale: 1 }} 
                     transition={{
                        type: "spring",
                        bounce: 0.5,
                        duration: 2,
                     }} 
                     className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                        Belajar budaya Indonesia jadi lebih seru! <br/>
                        Jelajahi cerita rakyat Nusantara lewat Peta Interaktif, Vidio menarik, Kuis seru, dan Virtual Tour.
                     </motion.p>

                     <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                        <motion.li  
                        whileHover={{ scale: 1.1, transition:1 }} 
                        whileTap={{ scale: 0.9, transition:1 }}>
                           <motion.div
                           initial={{ x:-100, opacity:0 }} 
                           animate={{ x:0, opacity:1 }} 
                           transition={{ type: "spring", bounce: 0.1, ease:"easeOut", duration:2}}
                           >
                           <Link
                              href="/cerita"
                              className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                           >
                              Ayo Cari Cerita Nusantara!
                           </Link>
                           </motion.div>
                        </motion.li>
                        <motion.li
                        whileHover={{ scale: 1.1, transition:1 }} 
                        whileTap={{ scale: 0.9, transition:1 }}>
                           <motion.div
                           initial={{ x:100, opacity:0 }} 
                           animate={{ x:0, opacity:1 }} 
                           transition={{ type: "spring", bounce: 0.1, ease:"easeOut", duration:2}}
                           >
                           <Link href="/" target="_blank" className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark">
                              Lihat Video Demo
                           </Link>
                           </motion.div>
                        </motion.li>
                     </ul>
                  </div>
               </div>
               <div className="w-full px-4">
                  <div className="relative z-10 mx-auto max-w-[845px]">
                     <motion.div 
                     initial={{ opacity: 0, scale: 0.5 }} 
                     animate={{ opacity: 1, scale: 1 }} 
                     transition={{
                        type: "spring",
                        bounce: 0.5,
                        duration: 1,
                     }}
                     className="mt-16">
                        <Image src="/demo.png" width={845} height={500} alt="hero" className="mx-auto max-w-full rounded-t-xl rounded-tr-xl  border-t-[2px] border-l-[2px] border-r-[2px] border-[#f1c28b]" />
                     </motion.div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
