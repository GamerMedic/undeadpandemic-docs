// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UndeadPandemic Documentation',
  tagline: 'The Official documentation for the UndeadPandemic Minecraft plugin.',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://docs.undeadpandemic.net',
  baseUrl: '/',

  organizationName: 'undeadpandemic',
  projectName: 'undeadpandemic-docs',

  onBrokenLinks: 'warn', // stays at top level
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false, // disable default blog
        theme: { customCss: require.resolve('./src/css/custom.css') },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'changelogs',
        routeBasePath: 'changelogs',
        path: './changelogs',
        blogTitle: 'UndeadPandemic Changelogs',
        blogDescription: 'All updates, fixes and releases.',
        showReadingTime: false,
        postsPerPage: 'ALL',
        blogSidebarTitle: 'All Versions',
        blogSidebarCount: 'ALL',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },

    navbar: {
      title: 'UndeadPandemic Docs',
      logo: { alt: 'UndeadPandemic Logo', src: 'img/new-undeadpandemic-logo-compressed.webp' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/changelogs',  // <- updated to blog-style changelogs
          label: 'Changelogs',
          position: 'left',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Documentation', to: '/installation' }],
        },
        {
          title: 'Community',
          items: [{ label: 'Discord', href: 'https://www.discord.gg/C5xuRNETjy' }],
        },
        {
          title: 'More',
          items: [{ label: 'Changelogs', to: '/changelogs' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UndeadPandemic. Built with Docusaurus.`,
    },

    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  },
};

export default config;