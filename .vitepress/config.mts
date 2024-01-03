/** @format */

import { DefaultTheme, defineConfig } from 'vitepress';

const getPackageVersion = async (pkg: string) => {
    return await fetch(`https://registry.npmjs.org/@grainular/${pkg}/latest`)
        .then((res) => res.json())
        .then(({ version }) => version);
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Nørd',
    description: 'minimal & progressive web framework',
    themeConfig: {
        logo: '/nord-logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Getting started', link: '/guide/getting-started' },
            {
                text: `Nørd: v.${await getPackageVersion('nord')}`,
                items: [
                    {
                        text: 'Changelog',
                        link: 'https://github.com/grainular-nord/nord/releases',
                    },
                    {
                        text: `@grainular/nord v.${await getPackageVersion('nord')}`,
                        link: 'https://github.com/grainular-nord/nord',
                    },
                    {
                        text: `@grainular/create-nord v.${await getPackageVersion('create-nord')}`,
                        link: 'https://github.com/grainular-nord/create-nord',
                    },
                    {
                        text: `@grainular/nord-rxjs v.${await getPackageVersion('nord-rxjs')}`,
                        link: 'https://github.com/grainular-nord/nord-rxjs',
                    },
                ],
            },
        ],

        sidebar: [
            {
                text: 'Introduction',
                base: '/guide/',
                items: introduction(),
                collapsed: false,
            },
            {
                text: 'Essentials',
                base: '/guide/',
                items: essentials(),
                collapsed: false,
            },
            {
                text: 'Grains',
                base: '/grain/',
                items: grains(),
                collapsed: false,
            },
            {
                text: 'Directives',
                base: '/directive/',
                items: directives(),
                collapsed: false,
            },
            {
                text: 'Packages',
                items: [
                    {
                        text: 'Nørd-RxJS',
                        link: 'https://github.com/grainular-nord/nord-rxjs',
                    },
                ],
            },
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/grainular-nord/nord.dev' }],

        search: {
            provider: 'local',
        },

        editLink: {
            pattern: 'https://github.com/grainular-nord/nord.dev/edit/main/:path',
            text: 'Edit this page on GitHub',
        },

        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                dateStyle: 'medium',
                timeStyle: 'medium',
            },
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present Sebastian Heinz',
        },
    },
    srcExclude: ['readme.md', 'license.md', 'contributing.md'],
    sitemap: {
        hostname: 'https://nordjs.dev',
    },
});

function introduction(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'What is Nørd?', link: '/introduction' },
        { text: 'Getting started', link: '/getting-started' },
    ];
}

function essentials(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'Creating the Application', link: '/application' },
        { text: 'Components', link: '/components' },
        { text: 'Templates', link: '/templates' },
        { text: 'Grains', link: '/grains' },
        { text: 'Directives', link: '/directives' },
        { text: 'Context', link: '/context' },
    ];
}

function grains(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'grain', link: '/grain' },
        { text: 'readonly', link: '/readonly' },
        { text: 'derived', link: '/derived' },
        { text: 'combined', link: '/combined' },
        { text: 'get', link: '/get' },
    ];
}

function directives(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'on', link: '/on' },
        { text: 'when', link: '/when' },
        { text: 'forEach', link: '/for-each' },
        { text: 'use', link: '/use' },
        { text: 'ref', link: '/ref' },
        { text: 'unsafe-html', link: '/unsafe-html' },
        { text: 'reactive', link: '/reactive' },
        { text: 'Custom Directives', link: '/custom-directives' },
    ];
}
