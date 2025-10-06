import styles from './FooterSection.module.css';

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 Your Company. All rights reserved.</p>
      <div className={styles.footerLinks}>
        <a href="#">プライバシーポリシー</a>
        <a href="#">利用規約</a>
      </div>
    </footer>
  );
}
