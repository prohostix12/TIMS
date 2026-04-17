import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.badge}>Next.js + MongoDB Installed</div>
        <h1 className={styles.title}>
          Welcome to <span className={styles.gradientText}>TIMS</span>
        </h1>
        <p className={styles.subtitle}>
          Your high-performance development environment is ready. 
          Connected with MongoDB and styled with premium Vanilla CSS.
        </p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Framework Ready</h3>
            <p>Next.js 15+ with App Router and TypeScript is fully configured.</p>
          </div>
          <div className={styles.card}>
            <h3>Database Configured</h3>
            <p>Mongoose is installed. Connection utility available at <code>src/lib/db.ts</code>.</p>
          </div>
          <div className={styles.card}>
            <h3>Premium UI</h3>
            <p>Custom design tokens and animations are integrated into your project.</p>
          </div>
        </div>
      </div>
      
      <div className={styles.footer}>
        <p>© 2026 TIMS Project • Built with Antigravity</p>
      </div>
    </main>
  );
}
