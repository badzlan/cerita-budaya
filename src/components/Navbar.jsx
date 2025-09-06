import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";


export default function Navbar() {
   return (
      <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}    
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-primary">
         <div className="container">
            <div className="relative -mx-4 flex items-center justify-between">
               <div className="px-4">
                  <Link href="/" className="navbar-logo block py-5">
                     <Image src="/logo.png" alt="logo" width={175} height={60} priority />
                  </Link>
               </div>

               <div className="px-4">
                     <Link href="/cerita">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="rounded-md bg-white bg-opacity-20 px-6 py-2 text-sm md:text-base font-medium text-white hover:bg-opacity-100 hover:text-dark">
                              Ayo Eksplor!
                        </motion.button>
                     </Link>
               </div>
            </div>
         </div>
      </motion.div>
   );
}
