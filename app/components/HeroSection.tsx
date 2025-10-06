import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={`${styles.section} ${styles.heroSection}`}>
      <div className={styles.heroContent}>
        <h1>革新的なソリューションでビジネスを加速</h1>
        <p>
          あなたのビジネスの課題を解決し、成長をサポートする最先端のサービスを提供します。
        </p>
        <button className={styles.primaryButton}>今すぐ始める</button>
      </div>
    </section>
  );
}
