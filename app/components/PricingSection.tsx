"use client";
import React, { FC } from "react";
import { CheckCircle } from "./Icons";

interface Plan {
  name: string;
  price: string;
  period: string;
  isPopular: boolean;
  description: string;
  features: string[];
  ctaText: string;
  ctaClass: string;
}

const PricingSection: FC = () => {
  const plans: Plan[] = [
    {
      name: "ベーシック",
      price: "$9",
      period: "/月",
      isPopular: false,
      description: "個人利用や小規模チーム向けの必要最低限の機能。",
      features: [
        "タスク管理 (最大500件)",
        "リアルタイム同期",
        "モバイル/デスクトップ対応",
        "基本サポート (メール)",
      ],
      ctaText: "ベーシックプランを試す",
      ctaClass: "lp-price-cta-default",
    },
    {
      name: "スタンダード",
      price: "$29",
      period: "/月",
      isPopular: true,
      description: "最も人気！成長中のチームに最適なフル機能パッケージ。",
      features: [
        "無制限のタスク管理",
        "シームレスな共有・コラボレーション",
        "プロジェクト分析レポート",
        "優先カスタマーサポート",
        "カスタムテンプレート作成",
      ],
      ctaText: "スタンダードプランを選ぶ",
      ctaClass: "lp-price-cta-popular",
    },
    {
      name: "プレミアム",
      price: "$79",
      period: "/月",
      isPopular: false,
      description: "大規模組織向けの高度なセキュリティとエンタープライズ機能。",
      features: [
        "スタンダードの全て",
        "高度なセキュリティ（SSO）",
        "専任アカウントマネージャー",
        "監査ログと履歴管理",
        "SLA（サービス品質保証）",
      ],
      ctaText: "お問い合わせ",
      ctaClass: "lp-price-cta-default",
    },
  ];

  return (
    <section className="lp-section lp-bg-white">
      <div className="lp-content-wrapper lp-text-center">
        <h3 className="lp-section-title">あなたのチームに最適なプランを選ぶ</h3>
        <p className="lp-section-subtitle lp-mb-16">
          全てのプランには30日間の無料トライアルが含まれています。今すぐ最適な生産性向上ツールを手に入れましょう。
        </p>

        <div className="lp-pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`lp-price-card ${
                plan.isPopular
                  ? "lp-price-card-popular"
                  : "lp-price-card-default"
              }`}
            >
              {plan.isPopular && (
                <span className="lp-popular-badge">最も人気</span>
              )}
              <h4
                className={`lp-price-name ${
                  plan.isPopular
                    ? "lp-price-name-popular"
                    : "lp-price-name-default"
                }`}
              >
                {plan.name}
              </h4>
              <p
                className={`lp-price-description ${
                  plan.isPopular ? "lp-text-indigo-200" : "lp-text-gray-500"
                }`}
              >
                {plan.description}
              </p>
              <div className="lp-price-amount">
                <span
                  className={
                    plan.isPopular ? "lp-text-white" : "lp-text-gray-900"
                  }
                >
                  {plan.price}
                </span>
                <span
                  className={`lp-price-period ${
                    plan.isPopular ? "lp-text-indigo-200" : "lp-text-gray-500"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="lp-price-features">
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className={`lp-price-feature-item ${
                      plan.isPopular ? "lp-text-indigo-100" : "lp-text-gray-700"
                    }`}
                  >
                    <CheckCircle
                      className={`lp-price-check-icon ${
                        plan.isPopular
                          ? "lp-text-pink-300"
                          : "lp-text-indigo-500"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`lp-price-cta ${plan.ctaClass} ${
                  plan.isPopular ? "lp-price-cta-white" : ""
                }`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
