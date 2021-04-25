import Heading from "@/components/common/heading";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home"/>
      </Head>
      <div className="container">
        <Heading level="2" title="Home" />
      </div>
    </>
  )
}
