import Document, {Html, Head, Main, NextScript} from "next/document"

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/images/favicon_192.png" sizes="192x192" />
          <meta property="custom" content="123" />
        </Head>
        <body>
          <Main/>
        </body>
        <NextScript/>
      </Html>
    );
  }
}