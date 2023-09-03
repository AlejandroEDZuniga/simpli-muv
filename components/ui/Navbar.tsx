import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/simplimuv-logo.png";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image src={logo} alt="Logo-simplimuv" width={210} height={42} />
      </Link>
      <div className={styles.menu}>
        <Link href="/">Bikes</Link>
        <Link href="/accessories">Accessories</Link>
        <a href="#apparel">Apparel</a>
      </div>
    </div>
  );
};

export default Navbar;
