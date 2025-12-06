import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h1>Oops! Page not found 😵</h1>
        <p>The page you are looking for does not exist.</p>
        <p>
          Go back to the <Link to="/">home page</Link>.
        </p>
      </div>
    </Layout>
  );
}