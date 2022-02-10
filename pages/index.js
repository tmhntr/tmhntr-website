import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tim Hunter Portfolio</title>
        <meta name="description" content="A portfolio page by Tim Hunter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Tim Hunter</h1>
        <p>scientist and software developer</p>
      </header>
      <main>
        <section>
          <h2>About me</h2>
          <div>
            <p>
              I am a graduate student at Western University, working in the
              field of computational medicine. As a user and developer of
              scientific software platforms, I aim to promote accessibility and
              uptake of scientific software. My main area of research is the
              study of blood flow in the brain, using lumped parameter models,
              as well as 3D computational fluid dynamics.
            </p>
            <p>
              Through my studies, I gained an interest in the development side
              of software. I have been sharpening my skills, and hope to begin
              working in software development full-time after I graduate in the
              summer of 2022. I have been working on various free software
              projects, and my goal is to produce software that can make the
              world a more equitable, sustainable and safe place for everybody.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
