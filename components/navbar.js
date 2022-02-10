import Link from "next/link";
import React from "react";

function navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>TMHNTR.com</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/research">
            <a>Research</a>
          </Link>
        </li>
        <li>
          <Link href="/development">
            <a>Development</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
