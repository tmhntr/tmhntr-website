import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Particles from "react-tsparticles";

export default function Home() {
  const particleOptions = {
    background: {
      color: {
        value: "#000",
      },
      opacity: 0,
    },
    fullScreen: true,
    particles: {
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0,
        random: false,
      },
      shape: {
        type: "polygon",
        polygon: {
          sides: 4,
          fill: false,
          closed: true,
        },
      },
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      stroke: {
        width: 1,
        color: "#ffffff",
        opacity: 0.4,
      },
      size: {
        value: 6,
        random: true,
      },
      lineLinked: {
        enable: true,
        distance: 100,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outMode: "out",
        bounce: false,
        gravity: {
          enable: false,
          acceleration: 9.0,
          maxSpeed: 50,
        },
        attract: {
          enable: true,
          rotate: {
            x: 600,
            y: 600,
          },
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particlesNb: 4,
        },
        remove: {
          particlesNb: 2,
        },
      },
    },
    retinaDetect: false,
  };

  return (
    <>
      <Head>
        <title>Tim Hunter Portfolio</title>
        <meta name="description" content="A portfolio page by Tim Hunter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles className="particles" options={particleOptions} />
      <div className="page-about page">
        <div className="hero">
          <h1>Hi, I'm Tim Hunter</h1>
          <p>Researcher, Developer, Tutor.</p>
          <p> Interested in working together? Contact me!</p>
        </div>
      </div>
      <div className="page-research page">
        <h1>Tim Hunter</h1>
        <p>scientist and software developer</p>
      </div>
      <div className="page-development page">
        <h1>Tim Hunter</h1>
        <p>scientist and software developer</p>
      </div>
      <div className="page-tutoring page">
        <h1>Tim Hunter</h1>
        <p>scientist and software developer</p>
      </div>
      <div className="page-contact page">
        <h1>Tim Hunter</h1>
        <p>scientist and software developer</p>
      </div>
    </>
  );
}
