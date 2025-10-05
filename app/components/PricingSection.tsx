import React, { FC } from "react";
import { CheckCircle } from "./Icons";
import styles from "./PricingSection.module.css";

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
    <section className={`${styles.section} ${styles.bgWhite} ${styles.textCenter}`}>
      <div className={`${styles.contentWrapper}`}>
        <h3 className={`${styles.sectionTitle}`}>あなたのチームに最適なプランを選ぶ</h3>
        <p className={`${styles.sectionSubtitle} ${styles.mb16}`}>
          全てのプランには30日間の無料トライアルが含まれています。今すぐ最適な生産性向上ツールを手に入れましょう。
        </p>

        <div className={`${styles.pricingGrid}`}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.priceCard} ${
                plan.isPopular
                  ? styles.priceCardPopular
                  : styles.priceCardDefault
              }`}
            >
              {plan.isPopular && (
                <span className={`${styles.popularBadge}`}>最も人気</span>
              )}
              <h4
                className={`${styles.priceName} ${
                  plan.isPopular
                    ? styles.priceNamePopular
                    : styles.priceNameDefault
                }`}
              >
                {plan.name}
              </h4>
              <p
                className={`${styles.priceDescription} ${
                  plan.isPopular ? styles.textIndigo200 : styles.textGray500
                }`}
              >
                {plan.description}
              </p>
              <div className={`${styles.priceAmount}`}>
                <span
                  className={
                    plan.isPopular ? styles.textWhite : styles.textGray900
                  }
                >
                  {plan.price}
                </span>
                <span
                  className={`${styles.pricePeriod} ${
                    plan.isPopular ? styles.textIndigo200 : styles.textGray500
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className={`${styles.priceFeatures}`}>
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className={`${styles.priceFeatureItem} ${
                      plan.isPopular ? styles.textIndigo100 : styles.textGray700
                    }`}
                  >
                    <CheckCircle
                      className={`${styles.priceCheckIcon} ${
                        plan.isPopular
                          ? styles.textPink300
                          : styles.textIndigo500
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`${styles.priceCta} ${plan.ctaClass === "lp-price-cta-default" ? styles.priceCtaDefault : styles.priceCtaPopular} ${
                  plan.ctaClass === "lp-price-cta-white" ? styles.priceCtaWhite : ""
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

