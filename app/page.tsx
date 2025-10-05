"use client";
import React, { FC } from "react";

// --- 型定義 ---
interface Feature {
  icon: FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

interface Testimonial {
  image: string;
  quote: string;
  name: string;
  title: string;
}

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

const CheckCircle: FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

// --- コンポーネント定義 ---

const Header: FC = () => (
  <header className="lp-header">
    <div className="lp-header-content-wrapper">
      <h1 className="lp-logo">
        Product<span className="lp-logo-suffix">Pro</span>
      </h1>
      <a href="#cta" className="lp-header-cta">
        今すぐ無料トライアル
      </a>
    </div>
  </header>
);

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

interface TestimonialCardProps extends Testimonial {}

const TestimonialCard: FC<TestimonialCardProps> = ({
  image,
  quote,
  name,
  title,
}) => (
  <div className="lp-testimonial-card">
    <img
      src={image}
      alt={`${name} の写真`}
      className="lp-testimonial-image"
      // In case the placeholder link fails, use a fallback
      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = "https://placehold.co/100x100/6366F1/ffffff?text=User";
      }}
    />
    <p className="lp-testimonial-quote">「{quote}」</p>
    <div className="lp-testimonial-footer">
      <p className="lp-testimonial-name">{name}</p>
      <p className="lp-testimonial-title">{title}</p>
    </div>
  </div>
);

const TestimonialSection: FC = () => {
  const testimonials: Testimonial[] = [
    {
      image: "https://placehold.co/100x100/4F46E5/ffffff?text=KS",
      quote:
        "ProductProを導入してから、チームのコミュニケーションと生産性が格段に向上しました。これなしでは仕事が考えられません。本当に人生が変わりました。",
      name: "佐藤 健太",
      title: "テックスタートアップ CEO",
    },
    {
      image: "https://placehold.co/100x100/10B981/ffffff?text=MT",
      quote:
        "クライアントとのフィードバック管理が驚くほど簡単になりました。デザインの修正時間が半分になり、もっとクリエイティブな作業に集中できています。",
      name: "田中 美咲",
      title: "フリーランスデザイナー",
    },
    {
      image: "https://placehold.co/100x100/F97316/ffffff?text=SY",
      quote:
        "複雑な営業パイプラインの追跡が視覚化され、ボトルネックを瞬時に特定できるようになりました。部門の売上が前年比20%アップです！",
      name: "山田 悟",
      title: "大手企業 営業部長",
    },
    {
      image: "https://placehold.co/100x100/EC4899/ffffff?text=YI",
      quote:
        "限られたリソースの中で、ボランティアのタスクを効率的に割り振るのに役立っています。操作が簡単で、ITに不慣れなメンバーでもすぐに使えました。",
      name: "伊藤 陽子",
      title: "NPO法人 事務局長",
    },
  ];

  return (
    <section className="lp-section lp-bg-indigo-dark">
      <div className="lp-content-wrapper lp-text-center">
        <h3 className="lp-testimonial-heading">信頼の実績 — お客様からの声</h3>
        <div className="lp-testimonial-grid">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

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

const CTASection: FC = () => (
  <section id="cta" className="lp-section lp-bg-gray-light lp-text-center">
    <div className="lp-content-wrapper">
      <h3 className="lp-cta-title">次世代の生産性を体験しませんか？</h3>
      <p className="lp-cta-subtitle">
        今すぐ30日間無料トライアルを開始して、ProductProの全機能をリスクなしでお試しください。
      </p>
      <a href="#" className="lp-cta-button">
        特別オファーで始める &gt;
      </a>
    </div>
  </section>
);

const Footer: FC = () => (
  <footer className="lp-footer">
    <div className="lp-content-wrapper lp-text-center lp-text-gray-400">
      <p className="lp-footer-brand">ProductPro | 究極の生産性向上ツール</p>
      <div className="lp-footer-links">
        <a href="#" className="lp-footer-link">
          プライバシーポリシー
        </a>
        <a href="#" className="lp-footer-link">
          利用規約
        </a>
        <a href="#" className="lp-footer-link">
          サポート
        </a>
      </div>
      <p className="lp-footer-copy">
        &copy; {new Date().getFullYear()} ProductPro. All rights reserved.
      </p>
    </div>
  </footer>
);

// --- メインコンポーネント ---
const App: FC = () => {
  return (
    <div className="lp-body">
      <style>{`
        /* ベーススタイル */
        .lp-body {
            font-family: 'Inter', sans-serif;
            background-color: #f9fafb; /* bg-gray-50 */
            min-height: 100vh;
            line-height: 1.5;
        }

        .lp-content-wrapper {
            max-width: 1280px; /* max-w-7xl */
            margin-left: auto;
            margin-right: auto;
            padding-left: 1.5rem; /* px-6 */
            padding-right: 1.5rem; /* px-6 */
        }
        
        .lp-text-center { text-align: center; }
        .lp-bg-white { background-color: #fff; }
        .lp-mb-4 { margin-bottom: 1rem; }
        .lp-mb-6 { margin-bottom: 1.5rem; }
        .lp-mb-10 { margin-bottom: 2.5rem; }
        .lp-mb-12 { margin-bottom: 3rem; }
        .lp-mb-16 { margin-bottom: 4rem; }
        .lp-mt-4 { margin-top: 1rem; }
        
        /* 色の定義 */
        .lp-bg-indigo { background-color: #4f46e5; }
        .lp-bg-indigo-light { background-color: #eef2ff; }
        .lp-bg-indigo-dark { background-color: #4338ca; } /* bg-indigo-700 */
        .lp-bg-gray-light { background-color: #f9fafb; } /* bg-gray-50 */
        .lp-text-indigo { color: #4f46e5; }
        .lp-text-indigo-dark { color: #3730a3; } /* text-indigo-800 */
        .lp-text-gray-900 { color: #111827; }
        .lp-text-gray-600 { color: #4b5563; }
        .lp-text-gray-500 { color: #6b7280; }
        .lp-text-white { color: #fff; }

        /* ヘッダー */
        .lp-header {
            padding: 1rem 1.5rem;
            background-color: #fff;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1); /* shadow-md */
            position: sticky;
            top: 0;
            z-index: 10;
        }
        .lp-header-content-wrapper {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .lp-logo {
            font-size: 1.5rem; /* text-2xl */
            font-weight: 800; /* font-extrabold */
            color: #4f46e5; /* text-indigo-600 */
            letter-spacing: -0.05em; /* tracking-tight */
        }
        .lp-logo-suffix { color: #111827; }
        
        .lp-header-cta {
            background-color: #4f46e5;
            color: #fff;
            font-weight: 700;
            padding: 0.5rem 1rem;
            border-radius: 9999px; /* rounded-full */
            transition: all 300ms;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            font-size: 0.875rem; /* text-sm */
            text-decoration: none;
        }
        .lp-header-cta:hover {
            background-color: #4338ca; /* hover:bg-indigo-700 */
        }

        /* ヒーローセクション */
        .lp-hero-section {
            background-color: #f9fafb;
            padding: 4rem 0 5rem;
            text-align: center;
        }
        @media (min-width: 768px) {
            .lp-hero-section {
                padding: 8rem 0; /* md:py-32 */
            }
        }
        .lp-hero-content {
            max-width: 80rem; /* max-w-5xl */
            margin-left: auto;
            margin-right: auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
        .lp-badge {
            display: inline-block;
            background-color: #eef2ff;
            color: #4f46e5;
            font-size: 0.875rem;
            font-weight: 600;
            padding: 0.25rem 1rem;
            border-radius: 9999px;
            margin-bottom: 1rem;
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        .lp-badge-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

        .lp-hero-title {
            font-size: 3rem; /* text-5xl */
            font-weight: 800;
            color: #111827;
            margin-bottom: 1.5rem;
            line-height: 1.25;
        }
        @media (min-width: 768px) {
            .lp-hero-title { font-size: 4.5rem; } /* md:text-7xl */
        }
        .lp-hero-title-primary { display: block; color: #4f46e5; }
        
        .lp-hero-subtitle {
            font-size: 1.25rem; /* text-xl */
            color: #4b5563;
            margin-bottom: 2.5rem;
            max-width: 48rem; /* max-w-3xl */
            margin-left: auto;
            margin-right: auto;
        }
        @media (min-width: 768px) {
            .lp-hero-subtitle { font-size: 1.5rem; } /* md:text-2xl */
        }
        .lp-strong-highlight {
            font-weight: 800; /* font-extrabold */
            color: #3730a3; /* text-indigo-800 */
        }

        .lp-hero-cta {
            display: inline-block;
            background-color: #4f46e5;
            color: #fff;
            font-size: 1.125rem; /* text-lg */
            font-weight: 700;
            padding: 1rem 2.5rem;
            border-radius: 0.75rem; /* rounded-xl */
            transition: all 300ms;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* shadow-xl */
            text-decoration: none;
        }
        .lp-hero-cta:hover {
            background-color: #4338ca;
            transform: scale(1.05);
        }
        .lp-hero-disclaimer {
            margin-top: 1rem;
            font-size: 0.875rem;
            color: #6b7280;
        }

        /* 共通セクションスタイル */
        .lp-section {
            padding-top: 5rem;
            padding-bottom: 5rem;
        }
        @media (min-width: 768px) {
            .lp-section {
                padding-top: 7rem; /* md:py-28 */
                padding-bottom: 7rem;
            }
        }
        .lp-section-title {
            font-size: 1.875rem; /* text-3xl */
            font-weight: 800;
            color: #111827;
            margin-bottom: 1rem;
        }
        @media (min-width: 768px) {
            .lp-section-title { font-size: 2.25rem; } /* md:text-4xl */
        }
        .lp-section-subtitle {
            font-size: 1.125rem;
            color: #4b5563;
        }
        .lp-feature-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 2.5rem; /* gap-10 */
        }
        @media (min-width: 768px) {
            .lp-feature-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (min-width: 1024px) {
            .lp-feature-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        /* 特徴カード */
        .lp-feature-card {
            padding: 1.5rem;
            background-color: #f9fafb;
            border-radius: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); /* shadow-lg */
            transition: all 300ms;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .lp-feature-card:hover {
            transform: scale(1.02);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* hover:shadow-2xl */
        }
        .lp-feature-icon-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 3rem; /* w-12 */
            height: 3rem; /* h-12 */
            margin-left: auto;
            margin-right: auto;
            background-color: #6366f1; /* bg-indigo-500 */
            border-radius: 9999px;
            color: #fff;
            margin-bottom: 1rem;
        }
        .lp-icon-lg { width: 1.5rem; height: 1.5rem; } /* w-6 h-6 */
        .lp-feature-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 0.75rem;
        }
        .lp-feature-description {
            color: #4b5563;
            font-size: 1rem;
        }

        /* お客様の声セクション */
        .lp-bg-indigo-dark { background-color: #4338ca; }
        .lp-testimonial-heading {
            font-size: 2.25rem;
            font-weight: 800;
            color: #fff;
            margin-bottom: 3rem;
        }
        @media (min-width: 768px) {
            .lp-testimonial-heading { font-size: 3rem; } /* md:text-5xl */
        }
        .lp-testimonial-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 2.5rem; /* gap-10 */
        }
        @media (min-width: 768px) {
            .lp-testimonial-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        /* Testimonial Card */
        .lp-testimonial-card {
            background-color: #fff;
            padding: 2rem;
            border-radius: 0.75rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
            transition: all 300ms;
            transform: translateZ(0); /* For transform transition smoothing */
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            height: 100%;
        }
        .lp-testimonial-card:hover {
            transform: scale(1.03);
        }
        .lp-testimonial-image {
            width: 5rem;
            height: 5rem;
            border-radius: 9999px;
            margin-bottom: 1.5rem;
            object-fit: cover;
            border: 4px solid #c7d2fe; /* ring-4 ring-indigo-200 */
        }
        .lp-testimonial-quote {
            font-size: 1.125rem;
            font-style: italic;
            color: #4b5563;
            margin-bottom: 1.5rem;
            flex-grow: 1;
        }
        .lp-testimonial-footer {
            margin-top: auto;
        }
        .lp-testimonial-name {
            font-weight: 700;
            color: #111827;
            font-size: 1rem;
        }
        .lp-testimonial-title {
            font-size: 0.875rem;
            color: #4f46e5;
        }

        /* 料金プランセクション */
        .lp-pricing-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 2.5rem;
            align-items: stretch;
        }
        @media (min-width: 1024px) {
            .lp-pricing-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        .lp-price-card {
            padding: 2rem;
            border-radius: 1rem; /* rounded-2xl */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* shadow-xl */
            transition: all 500ms;
            display: flex;
            flex-direction: column;
        }

        /* デフォルトカードスタイル */
        .lp-price-card-default {
            background-color: #f9fafb;
            color: #111827;
        }
        
        /* 人気プランカードスタイル */
        .lp-price-card-popular {
            background-color: #4f46e5; /* bg-indigo-600 */
            color: #fff;
            transform: scale(1.05);
            border: 4px solid #ec4899; /* ring-4 ring-pink-500 */
        }
        
        .lp-popular-badge {
            display: inline-block;
            background-color: #ec4899; /* bg-pink-500 */
            color: #fff;
            font-size: 0.75rem;
            font-weight: 700;
            padding: 0.25rem 1rem;
            border-radius: 9999px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            align-self: center;
        }

        .lp-price-name {
            font-size: 1.875rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        .lp-price-name-default { color: #4f46e5; }
        .lp-price-name-popular { color: #fff; }

        .lp-price-description {
            font-size: 1rem;
            margin-bottom: 1.5rem;
            flex-grow: 0;
        }

        .lp-price-amount {
            font-size: 3.75rem; /* text-6xl */
            font-weight: 800;
            margin-bottom: 2rem;
            flex-grow: 0;
            display: flex;
            align-items: flex-end;
            justify-content: center;
        }
        .lp-price-period {
            font-size: 1.5rem;
            font-weight: 500;
            margin-left: 0.25rem;
        }

        .lp-price-features {
            text-align: left;
            margin-bottom: 2.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem; /* space-y-3 */
            flex-grow: 1;
        }
        .lp-price-feature-item {
            display: flex;
            align-items: flex-start;
        }
        .lp-price-check-icon {
            width: 1.25rem;
            height: 1.25rem;
            margin-right: 0.75rem;
            flex-shrink: 0;
        }
        .lp-price-card-default .lp-price-check-icon { color: #4f46e5; } /* text-indigo-500 */
        .lp-price-card-popular .lp-price-check-icon { color: #f9a8d4; } /* text-pink-300 */

        .lp-price-cta {
            display: block;
            width: 100%;
            text-align: center;
            font-weight: 700;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            transition: all 300ms;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            margin-top: auto;
            font-size: 1.125rem;
            text-decoration: none;
        }
        .lp-price-cta-default {
            background-color: #6366f1; /* bg-indigo-500 */
            color: #fff;
        }
        .lp-price-cta-default:hover {
            background-color: #4f46e5; /* hover:bg-indigo-600 */
        }
        .lp-price-cta-popular {
            background-color: #ec4899; /* bg-pink-500 */
            color: #fff;
        }
        .lp-price-cta-popular:hover {
            background-color: #db2777; /* hover:bg-pink-600 */
        }
        .lp-price-cta-white {
            background-color: #fff;
            color: #4f46e5;
        }
        .lp-price-cta-white:hover {
            background-color: #f3f4f6;
        }


        /* CTAセクション */
        .lp-cta-title {
            font-size: 2.25rem;
            font-weight: 800;
            color: #111827;
            margin-bottom: 1rem;
        }
        @media (min-width: 768px) {
            .lp-cta-title { font-size: 3rem; } /* md:text-5xl */
        }
        .lp-cta-subtitle {
            font-size: 1.25rem;
            color: #4b5563;
            margin-bottom: 2.5rem;
        }
        .lp-cta-button {
            display: inline-block;
            background-color: #ec4899; /* bg-pink-500 */
            color: #fff;
            font-size: 1.25rem;
            font-weight: 700;
            padding: 1rem 3rem;
            border-radius: 0.75rem;
            transition: all 300ms;
            transform: translateZ(0);
            box-shadow: 0 25px 50px -12px rgba(236, 72, 153, 0.5); /* shadow-2xl shadow-pink-300/50 */
            text-decoration: none;
        }
        .lp-cta-button:hover {
            background-color: #db2777; /* hover:bg-pink-600 */
            transform: scale(1.05);
        }

        /* フッター */
        .lp-footer {
            background-color: #1f2937; /* bg-gray-800 */
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
        }
        .lp-footer-brand {
            margin-bottom: 1rem;
        }
        .lp-footer-links {
            display: flex;
            justify-content: center;
            gap: 1.5rem; /* space-x-6 */
            font-size: 0.875rem;
        }
        .lp-footer-link {
            color: #9ca3af; /* text-gray-400 */
            transition: color 200ms;
            text-decoration: none;
        }
        .lp-footer-link:hover {
            color: #fff;
        }
        .lp-footer-copy {
            margin-top: 1.5rem;
            font-size: 0.875rem;
        }

        /* 共通アイコンの色 */
        .lp-icon {
            width: 1.5rem;
            height: 1.5rem;
        }

        @media (min-width: 768px) {
            .lp-header { padding: 1rem 3rem; }
            .lp-content-wrapper { padding-left: 3rem; padding-right: 3rem; }
        }
      `}</style>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
