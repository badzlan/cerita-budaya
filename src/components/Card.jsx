import Link from "next/link";
import * as motion from "motion/react-client";

export default function Card({ slug, title, region, thumbnail, synopsis }) {
   return (
      <motion.div 
       initial={{ opacity: 0, scale: 0.5 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true}}
  transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
      className="w-full px-4 md:w-1/2 lg:w-1/3">
         <div className="mb-10 group">
            <div className="mb-8 overflow-hidden rounded-xl">
               <Link href={`/cerita/${slug}`}>
                  <img src={thumbnail} alt={title} className="w-full h-full object-cover aspect-video transition duration-500 group-hover:scale-105" />
               </Link>
            </div>

            <div>
               <span className="mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white">{region}</span>
               <h3>
                  <Link href={`/cerita/${slug}`} className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                     {title}
                  </Link>
               </h3>
               <p className="max-w-[370px] text-base text-body-color">{synopsis.substring(0, 100)}...</p>
            </div>
         </div>
      </motion.div>
   );
}
