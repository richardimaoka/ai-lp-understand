"use client";
import React, { FC } from "react";
import { CheckCircle } from "./Icons";

// --- 型定義 ---
interface Feature {
  icon: FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

// --- アイコンコンポーネント (SVG) ---
const Zap: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lp-icon"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const Users: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lp-icon"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Cloud: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lp-icon"
  >
    <path d="M17.5 19H17a4.5 4.5 0 1 0 0-9h-.02a6 6 0 0 0-11.85-2.28A6 6 0 0 0 5 17h2.5" />
  </svg>
);

const FeaturesSection: FC = () => {
  const features: Feature[] = [
    {
      icon: Zap,
      title: "圧倒的なスピード",
      description:
        "軽量設計と最適化されたコードにより、ストレスフリーで迅速な操作を実現します。",
    },
    {
      icon: Cloud,
      title: "リアルタイム同期",
      description:
        "すべてのデバイスで最新の状態に保たれます。場所を選ばず、常に作業を継続できます。",
    },
    {
      icon: Users,
      title: "シームレスな共有",
      description:
        "チームメンバーとのプロジェクト共有やコラボレーションが直感的かつ簡単に行えます。",
    },
    {
      icon: CheckCircle,
      title: "堅牢なセキュリティ",
      description:
        "お客様のデータを保護するため、業界最高水準の暗号化とセキュリティ対策を施しています。",
    },
  ];

  return (
    <section className="lp-section lp-bg-white">
      <div className="lp-content-wrapper lp-text-center">
        <h3 className="lp-section-title">ProductProが選ばれる理由</h3>
        <p className="lp-section-subtitle lp-mb-16">
          あなたのビジネスを次のレベルへ導くための、必要なすべてがここにあります。
        </p>
        <div className="lp-feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="lp-feature-card">
              <div className="lp-feature-icon-wrapper">
                <feature.icon className="lp-icon-lg lp-text-white" />
              </div>
              <h4 className="lp-feature-title">{feature.title}</h4>
              <p className="lp-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
