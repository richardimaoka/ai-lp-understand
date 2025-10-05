"use client";
import React, { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => (
  <header className={styles.header}>
    <div className={styles.headerContentWrapper}>
      <h1 className={styles.logo}>
        Product<span className={styles.logoSuffix}>Pro</span>
      </h1>
      <a href="#cta" className={styles.headerCta}>
        今すぐ無料トライアル
      </a>
    </div>
  </header>
);

export default Header;
