export default function Embed({ videoUrl, synopsis, virtualTourUrl }) {
   return (
      <div>
         <div className="relative z-20 mb-[50px] h-[200px] overflow-hidden rounded-[5px] md:h-[385px] lg:h-[650px]">
            <iframe
               src={videoUrl}
               width="100%"
               height="100%"
               className="object-cover object-center"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
            ></iframe>
         </div>

         <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-8/12 mx-auto">
               <div>
                  <h2 className="mb-8 text-2xl font-bold text-dark sm:text-3xl md:text-[35px] md:leading-[1.28]">Sinopsis Cerita</h2>

                  <p className="mb-6 text-base text-body-color">{synopsis}</p>
               </div>
            </div>
         </div>
      </div>
   );
}
