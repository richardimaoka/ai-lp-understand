"use client";
import React, { FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className={`${styles.contentWrapper} ${styles.textCenter} ${styles.textGray400}`}>
      <p className={styles.footerBrand}>ProductPro | 究極の生産性向上ツール</p>
      <div className={styles.footerLinks}>
        <a href="#" className={styles.footerLink}>
          プライバシーポリシー
        </a>
        <a href="#" className={styles.footerLink}>
          利用規約
        </a>
        <a href="#" className={styles.footerLink}>
          サポート
        </a>
      </div>
      <p className={styles.footerCopy}>
        &copy; {new Date().getFullYear()} ProductPro. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
