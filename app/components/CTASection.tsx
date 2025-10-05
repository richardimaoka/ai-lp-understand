"use client";
import React, { FC } from "react";
import styles from "./CTASection.module.css";

const CTASection: FC = () => (
  <section id="cta" className={`${styles.section} ${styles.bgGrayLight} ${styles.textCenter}`}>
    <div className={styles.contentWrapper}>
      <h3 className={styles.ctaTitle}>次世代の生産性を体験しませんか？</h3>
      <p className={styles.ctaSubtitle}>
        今すぐ30日間無料トライアルを開始して、ProductProの全機能をリスクなしでお試しください。
      </p>
      <a href="#" className={styles.ctaButton}>
        特別オファーで始める &gt;
      </a>
    </div>
  </section>
);

export default CTASection;
