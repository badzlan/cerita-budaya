import Image from "next/image";
import Link from "next/link";

export default function Card() {
   return (
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
         <div className="mb-10 group">
            <div className="mb-8 overflow-hidden rounded-[5px]">
               <Link href="/cerita/malin-kundang">
                  <Image src="/logo.png" alt="Blog Image" width={400} height={250} className="w-full transition group-hover:rotate-6 group-hover:scale-125" />
               </Link>
            </div>
            <div>
               <span className="mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white">Sumatera Barat</span>
               <h3>
                  <Link href="/cerita/malin-kundang" className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                     Malin Kundang si Anak Durhaka
                  </Link>
               </h3>
               <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt cumque eos numquam.</p>
            </div>
         </div>
      </div>
   );
}
