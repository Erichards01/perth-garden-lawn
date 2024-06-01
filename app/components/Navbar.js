"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import headerImage from "../../public/wood1.jpeg";
import facebook from "../../public/facebook.png";
import logo from "../../public/LogoComplete.jpg";

export default function Navbar() {
  return (

    
    <div>
      <nav>
        <Image
          src={logo}
          alt="lawn mowing logo"
          placeholder="blur"
          className="logo"
        />{" "}
        <a
          href="https://www.facebook.com/Perthgardenandlawn"
          className="aFacebook"
        >
          <Image src={facebook} alt="facebook" className="Facebook" />
        </a>
        <Image
          src={headerImage}
          height="300px"
          width="300px"
          alt=" dark vertical timber panels"
          placeholder="blur"
          className="headerImage"
        />
        <ul>
          {" "}
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>{" "}
          <li>
            <Link href="/services">Services</Link>
          </li>{" "}
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
