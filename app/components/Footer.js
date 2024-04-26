"use client";

import footerImage from "../../public/LawnFooter.jpg";
import React from "react";
import Image from "next/image";
import logo from "../../public/LogoComplete.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
];
const Footer = () => {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;
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
          {navLinks.map((link) => {
            return (
              <li key={link.id} className="foot">
                <Link
                  href={link.path}
                  className={isActive(link.path) ? "footerActive" : ""}
                >
                  {link.name}
                </Link>{" "}
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
};
export default Footer;
