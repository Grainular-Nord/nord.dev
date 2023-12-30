/** @format */

import { DefaultTheme, defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Nørd',
	description: 'minimal & progressive web framework',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' },
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
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/iamsebastiandev/nord' },
		],

		search: {
			provider: 'local',
		},

		editLink: {
			pattern:
				'https://github.com/iamsebastiandev/norddev/edit/main/:path',
			text: 'Edit this page on GitHub',
		},

		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2023-present Sebastian Heinz',
		},
	},
	srcExclude: ['readme.md', 'license.md', 'contributing.md']
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
		{ text: 'Grains', link: '/grains' },
		{ text: 'Directives', link: '/directives' },
	];
}
