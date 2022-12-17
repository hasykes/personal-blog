// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito"
        />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8MZF7BGZ81" strategy="afterInteractive" />
        <Script 
          id="google-analytics" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-8MZF7BGZ81', {
                page_path: window.location.pathname,
                });
            `,
            }}/>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}