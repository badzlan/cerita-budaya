import * as motion from "motion/react-client";

export default function Embed({ videoUrl, synopsis }) {
   return (
      <div>
         <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
               type: "spring",
               bounce: 0.5,
               duration: 1.5,
            }}
            className="relative z-20 mb-[50px] h-[200px] overflow-hidden rounded-[5px] md:h-[385px] lg:h-[650px]"
         >
            <iframe src={videoUrl} width="100%" height="100%" className="object-cover object-center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
         </motion.div>

         <div className="flex flex-wrap -mx-4">
            <motion.div
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 1.5,
               }}
               viewport={{ once: true, amount: 0.3 }}
               className="w-full px-4 lg:w-8/12 mx-auto"
            >
               <div>
                  <h2 className="mb-8 text-2xl font-bold text-dark sm:text-3xl md:text-[35px] md:leading-[1.28]">Sinopsis Cerita</h2>

                  <p className="mb-6 text-base text-body-color">{synopsis}</p>
               </div>
            </motion.div>
         </div>
      </div>
   );
}
