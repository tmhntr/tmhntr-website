import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

import Navbar from "./navbar";

const Layout = ({ children }) => {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <>
      <header>
        <div>
          <div className="nav-btn" onClick={() => setDisplayNav(!displayNav)}>
            <FaBars />
          </div>
          <h1>TMHNTR</h1>
        </div>
        {displayNav && <Navbar />}
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
