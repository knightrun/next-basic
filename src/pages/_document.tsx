import Document, {Html, Head, Main, NextScript} from "next/document";
import Header from "@/components/common/header";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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