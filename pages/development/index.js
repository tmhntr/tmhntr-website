import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Header } from "rsuite";
// import { Pong } from "@tmhntr/react-pong";

const DevelopmentPage = () => {
  const Pong = dynamic(
    () => {
      return import("../../components/PongPlayer");
    },
    { ssr: false }
  );
  return (
    <div>
      <h1>Software Development Projects</h1>
      <Link href={"/development/pong"}>
        <a>Pong with Machine Learning</a>
      </Link>
    </div>
  );
};

export default DevelopmentPage;
