import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  return (
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
  );
}
