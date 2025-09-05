import "@/styles/globals.css";
import Layout from "./_layout";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>CeritaBudaya</title>
            <meta name="description" content="Platform pembelajaran cerita rakyat interaktif." />
            <link rel="icon" type="image/png" href="/icon.png" />
         </Head>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </>
   );
}
