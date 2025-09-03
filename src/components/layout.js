import { Inter } from "next/font/google";

const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
});

export default function Layout({ children }) {
   return (
      // <html lang="en" className={inter.variable}>
      //    <body className={inter.className}>
      // {/* <Navbar /> */}
      <div>{children}</div>
      // {/* <Footer /> */}
      //    </body>
      // </html>
   );
}
