/** @format */

import Head from "next/head";
import Page from "../HOC/Page";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Page>Hello</Page>
    </div>
  );
}
