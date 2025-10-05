"use client";
import React, { FC } from "react";

const HeroSection: FC = () => (
  <section className="lp-hero-section">
    <div className="lp-content-wrapper lp-hero-content">
      <span className="lp-badge lp-badge-pulse">
        期間限定オファー: 30日間無料!
      </span>
      <h2 className="lp-hero-title">
        <span className="lp-hero-title-primary">究極の生産性向上</span>
        ツールで作業を最適化
      </h2>
      <p className="lp-hero-subtitle">
        作業効率を<strong className="lp-strong-highlight">劇的に改善</strong>
        し、散らかったタスクを整理し、チームの目標達成を
        <strong className="lp-strong-highlight">強力にサポート</strong>します。
      </p>
      <a href="#cta" className="lp-hero-cta">
        🚀 今すぐ無料で始める
      </a>
      <p className="lp-hero-disclaimer">クレジットカードの登録は不要です。</p>
    </div>
  </section>
);

export default HeroSection;
