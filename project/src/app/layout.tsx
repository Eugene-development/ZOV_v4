// import './globals.css'
import '../../src/css/globals.css'
import { Inter } from 'next/font/google'

import FormProject from './z-module/forms/project'
import FormConsultation from './z-module/forms/consultation'

import Banner from "./z-module/layout/Banner";
import Header from "./z-module/layout/Header";
import Footer from "./z-module/layout/Footer";


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        {/* <link rel="icon" href="../image/favicon.ico" sizes="any" /> */}
          <script src="//code.jivosite.com/widget/szuh00HFi5" async></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                        m[i].l=1*new Date();
                        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                        ym(93835019, "init", {
                              clickmap:true,
                              trackLinks:true,
                              accurateTrackBounce:true,
                              webvisor:true
                        });
                      `
            }}
          />
        <noscript><div><img src="https://mc.yandex.ru/watch/93835019" style={{position:'absolute', left:'-9999px'}} alt="" /></div></noscript>
      </head>
      <body className={inter.className}>
        <FormProject/>
        <FormConsultation/>
        <Banner/>
        <Header />
          {children}
        <Footer/>
      </body>
    </html>
  )
}
