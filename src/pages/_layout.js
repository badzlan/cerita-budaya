import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
});

export default function Layout({ children }) {
   return (
      <main className={inter.variable}>
         <Navbar />
         {children}
      </main>
   );
}
