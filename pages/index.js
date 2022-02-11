import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tim Hunter Portfolio</title>
        <meta name="description" content="A portfolio page by Tim Hunter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Tim Hunter</h1>
        <p>scientist and software developer</p>
      </Layout>
    </>
  );
}
