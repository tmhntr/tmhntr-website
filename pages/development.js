import React from "react";
import dynamic from "next/dynamic";
// import { Pong } from "@tmhntr/react-pong";

const address = process.env.PONGML_WEBSOCKET_ADDRESS;
const Development = () => {
  const Pong = dynamic(
    () => {
      return import("../components/PongPlayer");
    },
    { ssr: false }
  );
  return (
    <div>
      <Pong address={"ws://localhost:8001"} />
      {/* Development */}
    </div>
  );
};

export default Development;
