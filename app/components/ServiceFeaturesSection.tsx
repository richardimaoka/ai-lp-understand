import styles from './ServiceFeaturesSection.module.css';

export default function ServiceFeaturesSection() {
  return (
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
  );
}
