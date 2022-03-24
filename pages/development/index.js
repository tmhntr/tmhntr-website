import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Header } from "rsuite";
import Particles from "../../components/Particles";
// import { Pong } from "@tmhntr/react-pong";

const DevelopmentPage = () => {
  return (
    <div>
      <Particles />
      <h1>Software Development Projects</h1>
      <p>
        <Link href={"/development/pong"}>
          <a>Pong with Machine Learning</a>
        </Link>
      </p>
    </div>
  );
};

export default DevelopmentPage;
