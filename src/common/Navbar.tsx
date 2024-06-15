"use client";
import { routeEnum } from "@/constants/routeConstants";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      name: "Design",
      href: routeEnum.DESIGN,
    },
    {
      name: "Development",
      href: routeEnum.DEVELOPMENT,
    },
    {
      name: "Production",
      href: routeEnum.PRODUCTION,
    },
    {
      name: "Photography",
      href: routeEnum.PHOTOGRAPHY,
    },
  ];
  return (
    <div className={styles.container}>
      <Link href={routeEnum.HOME}>Roca Delta CONSULTING.</Link>
      <ul className={styles.list}>
        {navLinks.map((link) => {
          const isActive = pathName.startsWith(link.href);
          return (
            <li
              key={link.name}
              className={isActive ? styles.listItemActive : styles.listItem}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <ul
        onClick={() => setOpen(false)}
        className={styles.menu}
        style={{ right: open ? "0px" : "-50vw" }}
      >
        {[
          ...navLinks,
          ...[
            {
              name: "Contact",
              href: routeEnum.CONTACT,
            },
          ],
        ].map((link) => {
          const isActive = pathName.startsWith(link.href);
          return (
            <li
              key={link.name}
              className={isActive ? styles.listItemActive : styles.listItem}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
Navbar;
