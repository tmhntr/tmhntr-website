import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaCode, FaHome } from "react-icons/fa";
import { MdOutlineScience, MdInfoOutline } from "react-icons/md";

const NavItem = ({ icon, href, label, onClick }) => {
  return (
    <li>
      <Link href={href}>
        <a onClick={() => onClick()}>
          {icon} {label}
        </a>
      </Link>
    </li>
  );
};

const Navbar = (props) => {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <>
      <header>
        <div className="nav-btn" onClick={() => setDisplayNav(!displayNav)}>
          <FaBars />
        </div>
        <h2>TMHNTR</h2>
        <nav className={displayNav && "nav-visible"}>
          <ul>
            <NavItem
              icon={<FaHome />}
              href="/"
              label="home"
              onClick={() => setDisplayNav(false)}
            />
            <NavItem
              icon={<MdInfoOutline />}
              href="/about"
              label="about"
              onClick={() => setDisplayNav(false)}
            />
            <NavItem
              icon={<MdOutlineScience />}
              href="/research"
              label="research"
              onClick={() => setDisplayNav(false)}
            />
            <NavItem
              icon={<FaCode />}
              href="/development"
              label="development"
              onClick={() => setDisplayNav(false)}
            />
          </ul>
        </nav>
        {displayNav && (
          <div id="nav-backdrop" onClick={() => setDisplayNav(false)}></div>
        )}
      </header>
    </>
  );
};

export default Navbar;
