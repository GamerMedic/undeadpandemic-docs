// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'installation',          // single page, no drop-down
    'configuration',         // single page
    {
      type: 'category',
      label: '💬 Commands',
      items: [
        'commands/undeadpandemic',
      ],
    },
    {
      type: 'category',
      label: '🔐 Permissions',
      items: ['permissions'],
    },
    {
      type: 'category',
      label: '🧰 Items',
      items: ['items'],
    },
    {
      type: 'category',
      label: '🔧 Systems',
      items: ['systems/thirst'],
    },
    {
      type: 'category',
      label: '🖼️ Placeholder API',
      items: ['placeholder-api'],
    },
    // '/changelogs' removed — the blog handles it automatically
    {
      type: 'category',
      label: '💬 Languages',
      items: ['languages'],
    },
  ],
};

export default sidebars;