/** @format */

import Head from "next/head";
import Page from "../HOC/Page";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Page>Hello</Page>
    </div>
  );
}
