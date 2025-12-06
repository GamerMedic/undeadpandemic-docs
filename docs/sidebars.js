// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'installation',
      label: '🛠️ Installation',
    },
    'features',
    'premium',
    'eula',
    {
      type: 'category',
      label: '⚙️ Configuration',
      items: [
        'config/config.yml',
        'config/playerData.yml',
        'config/safeZoneData.yml',
      ],
    },
    {
      type: 'category',
      label: '💬 Commands',
      items: [
        {
          type: 'category',
          label: 'Give',
          items: [
            'commands/give',
            'commands/firstaid',
            'commands/torch',
          ],
        },
        'commands/help',
        'commands/info',
        'commands/reload',
      ],
    },
    {
      type: 'category',
      label: '🎭 Events',
      items: [
        'events/blood-moon',
        'events/hordes',
      ],
    },
    {
      type: 'category',
      label: '🧰 Items',
      items: [
        'items/barbed-wire',
        'items/batteries',
        {
          type: 'category',
          label: '💊 First Aid',
          items: [
            'items/first-aid/adrenaline',
            'items/first-aid/analgesia',
            'items/first-aid/antibiotics',
            'items/first-aid/bandages',
            'items/first-aid/kit',
          ],
        },
        'items/rotten-flesh',
        'items/torch',
        'items/wire-cutters',
        'items/zombie-guts',
        'items/zombie-mask',
      ],
    },
    {
      type: 'doc',
      id: 'languages',
      label: '🌍 Languages',
    },
    {
      type: 'category',
      label: '🔐 Permissions',
      items: [
        'permissions/admin',
        'permissions/camps',
        'permissions/commands',
        'permissions/gameplay',
        'permissions/items',
      ],
    },
    {
      type: 'category',
      label: '🖼️ Placeholder API',
      items: [
        'placeholder-api/headshots',
        'placeholder-api/thirst',
        'placeholder-api/zombies-killed',
      ],
    },
    {
      type: 'category',
      label: '⚡ Systems',
      items: [
        'systems/health',
        'systems/infected-animals',
        'systems/tainted-crops',
        'systems/thirst',
        'systems/water',
        {
          type: 'category',
          label: '🧟‍♂️ Zombies',
          items: [
            'systems/zombies',
            'systems/zombie-attributes',
            'systems/zombie-infection',
          ],
        },
      ],
    },
    // --- Changelogs category added here ---
    {
      type: 'link',
      href: '/changelogs',
      label: '📝 Changelogs',
    },
  ],
};

export default sidebars;