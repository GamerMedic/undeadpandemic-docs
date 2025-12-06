import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const latestChangelogs = [
    {
      version: 'v3.1.0 - Bug Fixes and bStats',
      description:
        'Added zombie immunity items, improved AI behaviour, and fixed various bugged features in the systems module.',
      link: '/changelogs/3.1.0-422',
    },
    {
      version: 'v3.0.4 - Bug Fixes',
      description:
        'Refactored code, fixed zombie spawning issues, updated documentation, and more.',
      link: '/changelogs/3.0.4-413',
    },
    {
      version: 'v3.0.3 - Bug Fixes',
      description:
        'Bug fixes for zombie guts, added campfire config options, updated cauldron detection when raining, and more.',
      link: '/changelogs/3.0.3-396',
    },
  ];

  return (
    <Layout
      title="Welcome to UndeadPandemic Docs"
      description="Official documentation for the UndeadPandemic Minecraft plugin"
    >
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <img
            src="/img/new-undeadpandemic-logo-compressed.webp"
            alt="UndeadPandemic Logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary" to="/installation">
              Get Started
            </Link>
            <Link className="button button--secondary" to="/changelogs">
              Changelogs
            </Link>
          </div>
        </section>

        {/* Latest Changelog Section */}
        <section className={styles.changelog}>
          <h2>Latest Changelogs</h2>
          {latestChangelogs.map((changelog, idx) => (
            <div key={idx} className={styles.changelogContent}>
              <h3>
                <Link to={changelog.link}>{changelog.version}</Link>
              </h3>
              <p>
                {changelog.description}{' '}
                <Link to={changelog.link}>Read more...</Link>
              </p>
            </div>
          ))}
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="button button--secondary" to="/changelogs">
              View All Changelogs
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
