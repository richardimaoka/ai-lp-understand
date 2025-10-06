import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={styles.heroContent}>
          <h1>革新的なソリューションでビジネスを加速</h1>
          <p>
            あなたのビジネスの課題を解決し、成長をサポートする最先端のサービスを提供します。
          </p>
          <button className={styles.primaryButton}>今すぐ始める</button>
        </div>
      </section>

      {/* Service Features Section */}
      <section className={`${styles.section} ${styles.featuresSection}`}>
        <h2 className={styles.sectionTitle}>私たちのサービスが選ばれる理由</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>💡</span>
            <h3>直感的な操作性</h3>
            <p>
              誰でも簡単に使いこなせる、ユーザーフレンドリーなインターフェース。
            </p>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>🚀</span>
            <h3>高速なパフォーマンス</h3>
            <p>最適化されたシステムで、ストレスフリーな動作を実現。</p>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>🔒</span>
            <h3>強固なセキュリティ</h3>
            <p>お客様のデータを守る、最高レベルのセキュリティ対策。</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`${styles.section} ${styles.testimonialsSection}`}>
        <h2 className={styles.sectionTitle}>お客様の声</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialItem}>
            <p>
              "このサービスのおかげで、業務効率が劇的に向上しました。サポートも迅速で助かっています。"
            </p>
            <p className={styles.testimonialAuthor}>
              - 株式会社A 代表取締役 山田 太郎
            </p>
          </div>
          <div className={styles.testimonialItem}>
            <p>
              "導入前は不安もありましたが、丁寧な説明と手厚いサポートで安心して利用を開始できました。"
            </p>
            <p className={styles.testimonialAuthor}>
              - 合同会社B 担当者 佐藤 花子
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className={`${styles.section} ${styles.keyFeaturesSection}`}>
        <h2 className={styles.sectionTitle}>主な機能</h2>
        <div className={styles.keyFeaturesGrid}>
          <div className={styles.keyFeatureItem}>
            <h3>データ分析</h3>
            <p>高度な分析ツールで、ビジネスのインサイトを深く掘り下げます。</p>
          </div>
          <div className={styles.keyFeatureItem}>
            <h3>自動化</h3>
            <p>繰り返し作業を自動化し、時間とコストを削減します。</p>
          </div>
          <div className={styles.keyFeatureItem}>
            <h3>リアルタイム連携</h3>
            <p>
              他のツールとのシームレスな連携で、ワークフローを最適化します。
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={`${styles.section} ${styles.pricingSection}`}>
        <h2 className={styles.sectionTitle}>料金プラン</h2>
        <div className={styles.pricingCards}>
          <div className={styles.pricingCard}>
            <h3>ベーシック</h3>
            <p className={styles.price}>
              ¥4,980<span>/月</span>
            </p>
            <ul>
              <li>基本機能</li>
              <li>メールサポート</li>
              <li>ストレージ 10GB</li>
            </ul>
            <button className={styles.secondaryButton}>詳細を見る</button>
          </div>
          <div className={styles.pricingCard}>
            <h3>スタンダード</h3>
            <p className={styles.price}>
              ¥9,980<span>/月</span>
            </p>
            <ul>
              <li>全ベーシック機能</li>
              <li>優先サポート</li>
              <li>ストレージ 100GB</li>
              <li>高度な分析</li>
            </ul>
            <button className={styles.primaryButton}>今すぐ申し込む</button>
          </div>
          <div className={styles.pricingCard}>
            <h3>プレミアム</h3>
            <p className={styles.price}>
              ¥19,980<span>/月</span>
            </p>
            <ul>
              <li>全スタンダード機能</li>
              <li>専任担当者</li>
              <li>ストレージ 無制限</li>
              <li>カスタム統合</li>
            </ul>
            <button className={styles.secondaryButton}>お問い合わせ</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; 2025 Your Company. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="#">プライバシーポリシー</a>
          <a href="#">利用規約</a>
        </div>
      </footer>
    </div>
  );
}
