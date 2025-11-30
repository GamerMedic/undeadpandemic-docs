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

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      ({
        docs: { sidebarPath: require.resolve('./sidebars.js') },
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
        routeBasePath: 'changelogs', // URL path
        path: 'changelogs',          // folder location
        showReadingTime: true,
        blogTitle: 'Changelogs',
        blogDescription: 'All UndeadPandemic plugin changelogs',
        postsPerPage: 10,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },

    navbar: {
      title: 'UndeadPandemic Docs',
      logo: { alt: 'UndeadPandemic Logo', src: 'img/logo.svg' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
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
          items: [{ label: 'Documentation', to: '/docs/intro' }],
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