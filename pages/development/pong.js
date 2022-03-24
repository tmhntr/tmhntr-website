import React, { useState } from "react";
import dynamic from "next/dynamic";
import Particles from "../../components/Particles";
import { Button } from "rsuite";
import DevLayout from "../../components/DevLayout";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/DevPages.module.css";

const PongPage = () => {
  const [isML, setIsML] = useState(false);
  const Pong = dynamic(
    () => {
      return import("../../components/PongPlayer");
    },
    { ssr: false }
  );
  return (
    <div>
      <Particles />
      <DevLayout
        showcase={
          <>
            <Pong address={isML ? "ws://ml.tmhntr.com:80" : null} />
            <Button onClick={() => setIsML(!isML)}>Toggle ml</Button>
          </>
        }
        title={"Pong"}
        githubURL={"https://github.com/tmhntr/react-pong"}
        description={`A 2-player game of pong that you can play with a friend or with a machine learning model. \n\n
          The game was originally developed in pygame, then transpiled to javascript with Transcrypt and the pyjsdl python module.
          The ML algorythm was implemented using openAI gym and the stable-baselines3 module and is hosted on my server in a docker container.`}
      />
    </div>
  );
};

export default PongPage;
