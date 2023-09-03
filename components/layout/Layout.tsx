import { FC } from "react";
import Head from "next/head";

import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import styles from "./layout.module.css";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
