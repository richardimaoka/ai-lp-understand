import styles from './KeyFeaturesSection.module.css';

export default function KeyFeaturesSection() {
  return (
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
  );
}
