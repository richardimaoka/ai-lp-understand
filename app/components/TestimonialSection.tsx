"use client";
import React, { FC } from "react";

interface Testimonial {
  image: string;
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: FC<Testimonial> = ({
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

export default TestimonialSection;
