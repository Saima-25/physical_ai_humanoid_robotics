import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Deployment target
const isGithubPages = process.env.DEPLOY_ENV === 'github';

// URLs (UNDERSCORE FIXED)
const siteUrl = isGithubPages
  ? 'https://saima-25.github.io'
  : 'https://physical_ai_humanoid_robotics.vercel.app';

const baseUrl = isGithubPages
  ? '/physical_ai_humanoid_robotics/'
  : '/';

const editUrl = isGithubPages
  ? 'https://github.com/Saima-25/physical_ai_humanoid_robotics/edit/main/'
  : undefined;

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A comprehensive guide to robotics, AI, and humanoid systems',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: siteUrl,
  baseUrl: baseUrl,

  organizationName: 'Saima-25',
  projectName: 'physical_ai_humanoid_robotics',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl,
        },
        blog: {
          showReadingTime: true,
          editUrl,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Robotics Logo',
        src: 'img/logo.svg',
        href: isGithubPages
          ? '/physical_ai_humanoid_robotics/'
          : '/',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/Saima-25/physical_ai_humanoid_robotics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Introduction', to: '/docs/intro' }],
        },
        {
          title: 'Robotics Resources',
          items: [
            { label: 'ROS Official', href: 'https://www.ros.org/' },
            { label: 'Docker for Robotics', href: 'https://hub.docker.com/_/ros' },
            { label: 'Gazebo Simulation', href: 'https://gazebosim.org/' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            {
              label: 'GitHub',
              href: 'https://github.com/Saima-25/physical_ai_humanoid_robotics',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Physical AI & Humanoid Robotics`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
