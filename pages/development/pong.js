import React, { useState } from "react";
import dynamic from "next/dynamic";
import Particles from "../../components/Particles";
import { Button } from "rsuite";
// import { Pong } from "@tmhntr/react-pong";

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
      {/* <Particles /> */}
      <Pong address={isML ? "ws://ml.tmhntr.com:80" : null} />
      <Button onClick={() => setIsML(!isML)}>Toggle ml</Button>
    </div>
  );
};

export default PongPage;
