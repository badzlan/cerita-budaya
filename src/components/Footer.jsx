import Link from "next/link";

export default function Footer() {
   return (
      <footer className="relative z-10 bg-primary">
         <div className="border-t border-[#8890A4] border-opacity-40 py-8">
            <div className="container">
               <div className="-mx-4 flex flex-wrap">
                  <div className="w-full">
                     <div className="my-1 flex justify-center md:justify-center">
                        <p className="text-base text-gray-7">
                           Copyright © {new Date().getFullYear()}{" "}
                           <Link href="/" target="_blank" rel="nofollow noopener" className="text-gray-1 hover:underline">
                              Cerita<span style={{ color: "#f1c28b" }}>Budaya</span>
                           </Link>{" "}
                           All rights reserved.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
