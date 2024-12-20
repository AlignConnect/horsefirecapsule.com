import { Inter } from 'next/font/google'
import './globals.css'
import { GlobalContextProvider } from './statemanage/context'
import Script from 'next/script';
import Link from 'next/link';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Horse Fire Capsule',
  description: 'Horse Fire Capsule',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >

      <Head>
        {/* <!--Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-HJXB2S4D4X"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-HJXB2S4D4X');
      </script> */}

        <link rel='icon' href={"/main/hft_home/pro3.png"} />
      </Head>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id='G-JXBEHG9Z1T`}
      />
      <Script strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ''G-JXBEHG9Z1T', {
              page_path: window.location.pathname,
              });
          `}
      </Script>


      <body className={inter.className}>



        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>



      </body>
    </html>
  )
}
