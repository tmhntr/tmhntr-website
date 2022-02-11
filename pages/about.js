import Image from "next/image";
import React from "react";
import Layout from "../components/layout";

import styles from "../styles/about.module.css";
import utilStyles from "../styles/utils.module.css";

import BrainSVG from "../public/brain.svg";

const About = () => {
  const brainImageSize = 200;
  return (
    <Layout>
      <h2 className={utilStyles.textCenter}>About me</h2>
      <section className={utilStyles.bgLight}>
        <div className={utilStyles.container}>
          <div className={utilStyles.split}>
            <div>
              <h3 className={utilStyles.textCenter}>Research</h3>
              <p>
                I am a graduate student at Western University, working in the
                field of computational medicine. As a user and developer of
                scientific software platforms, I aim to promote accessibility
                and uptake of scientific software. My main area of research is
                the study of blood flow in the brain, using lumped parameter
                models, as well as 3D computational fluid dynamics.
              </p>
            </div>
            <div className={styles.vertMargin}>
              <BrainSVG className={styles.img} />
            </div>
          </div>
        </div>
      </section>
      <section className={utilStyles.bgDark}>
        <div className={utilStyles.container}>
          <div className={utilStyles.split}>
            <div className={utilStyles.center}>
              <Image
                src={"/brain.svg"}
                width={brainImageSize}
                height={brainImageSize}
                alt="An SVG of a brain"
              ></Image>
            </div>
            <div>
              <h3 className={utilStyles.textCenter}>Software Development</h3>
              <p>
                Through my studies, I gained an interest in the development side
                of software. I have been sharpening my skills, and hope to begin
                working in software development full-time after I graduate in
                the summer of 2022. I have been working on various free software
                projects, and my goal is to produce software that can make the
                world a more equitable, sustainable and safe place for
                everybody.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
