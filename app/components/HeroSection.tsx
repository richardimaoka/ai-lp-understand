"use client";
import React, { FC } from "react";
import styles from "./HeroSection.module.css";

const HeroSection: FC = () => (
  <section className={styles.heroSection}>
    <div className={`${styles.heroContent}`}>
      <span className={`${styles.badge} ${styles.badgePulse}`}>
        期間限定オファー: 30日間無料!
      </span>
      <h2 className={styles.heroTitle}>
        <span className={styles.heroTitlePrimary}>究極の生産性向上</span>
        ツールで作業を最適化
      </h2>
      <p className={styles.heroSubtitle}>
        作業効率を<strong className={styles.strongHighlight}>劇的に改善</strong>
        し、散らかったタスクを整理し、チームの目標達成を
        <strong className={styles.strongHighlight}>強力にサポート</strong>します。
      </p>
      <a href="#cta" className={styles.heroCta}>
        🚀 今すぐ無料で始める
      </a>
      <p className={styles.heroDisclaimer}>クレジットカードの登録は不要です。</p>
    </div>
  </section>
);

export default HeroSection;
