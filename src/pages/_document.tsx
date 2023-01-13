import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          {/* @ts-ignore */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=M+PLUS+1p&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
