import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
});

export default function Layout({ children }) {
   return (
      <main className={`${inter.variable} ${inter.className}`}>
         <Navbar />
         {children}
         <Footer />
      </main>
   );
}
