import styles from './PricingSection.module.css';

export default function PricingSection() {
  return (
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
  );
}
