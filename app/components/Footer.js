"use client";

import footerImage from "../../public/LawnFooter.jpg";
import React from "react";
import Image from "next/image";
import logo from "../../public/LogoComplete.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <div>
      <footer>
        <Image src={footerImage} alt="grass" className="footerImage" />
        <Image
          src={logo}
          alt="lawn mowing logo"
          placeholder="blur"
          className="logo"
        />
        <ul>
          <li className="foot">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);

              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={isActive ? "footerActive" : ""}
                >
                  {link.name}
                </Link>
              );
            })}
          </li>
          {/* <li className="foot">
            <Link href="/">Home</Link>
          </li>
          <li className="foot">
            <Link href="/about">About</Link>
          </li>{" "}
          <li className="foot">
            <Link href="/services">Services</Link>
          </li>{" "}
          <li className="foot">
            <Link href="/contact">Contact</Link>
          </li>{" "} */}
          {/* <a
          href="https://www.facebook.com/Perthgardenandlawn"
          className="footerFacebook"
        >
          <Image src={facebook} alt="facebook" className="Facebook" />
        </a> */}
        </ul>
      </footer>
    </div>
  );
}
