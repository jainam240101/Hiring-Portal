/** @format */

import Head from "next/head";
import Page from "../HOC/Page";
import styles from "../styles/Home.module.css";
import Card from "../Components/Cards/Card";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Card
            name="Varun"
            profilePic="https://images.unsplash.com/photo-1613136425456-09493c7a2678?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            image="https://images.unsplash.com/photo-1613085628218-d08b3a264f86?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            description="Recently I worked here and it was an awesome experience to work with other artist ranging from back dancer memic artist etc"
          />
          <Card
            name="Sneha"
            profilePic="https://images.unsplash.com/photo-1613077655246-c8c1ab3820d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            description="Hey there am looking for work"
          />
          <Card
            name="Aditya"
            profilePic="https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            image="https://images.unsplash.com/photo-1613066803104-00fab99c0d5a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            description="I love to hangout here"
          />
        </div>
      </Page>
    </div>
  );
}
