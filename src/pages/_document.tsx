import Document, {Html, Head, Main, NextScript} from "next/document"
import Header from "@/components/common/header"

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/images/favicon_192.png" sizes="192x192" />
          <meta property="custom" content="123" />
        </Head>
        <body>
          <Header/>
          <Main/>
        </body>
        <NextScript/>
      </Html>
    );
  }
}