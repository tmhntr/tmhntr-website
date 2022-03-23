import React from "react";
import { Pong } from "@tmhntr/react-pong";

const PongPlayer = (props) => {
  const { address } = props;
  return <Pong wsAddress={address}></Pong>;
};

export default PongPlayer;
