import React from "react";
import { Pong } from "@tmhntr/react-pong";

const PongPlayer = ({ address }) => {
  console.log(address);
  return <Pong wsAddress={address}></Pong>;
};

export default PongPlayer;
