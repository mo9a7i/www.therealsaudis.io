export default {
	target: 'static',
	ssr: true,

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'The Real Saudis NFT',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
            {
				name: 'theme-color',
				content: '#004Dff'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Because they lied, we are here'
			},
			{
				name: 'format-detection',
				content: 'telephone=no'
			},
			{
				name: 'author',
				content: 'The Real Saudis NFT'
			},
			{
				name: 'author',
				type: 'text/plain',
				href: '/humans.txt'
			},
			{
				name: 'keywords',
				content: ''
			},
			{
				name: 'canonical',
				content: 'https://www.therealsaudisnft.com/'
			},

			{
				name: 'og:type',
				content: 'website'
			},
			{
				name: 'og:title',
				content: 'The Real Saudis NFT'
			},
			{
				name: 'og:description',
				content: 'Because they lied, we are here'
			},
			{
				name: 'og:image',
				content: 'https://www.therealsaudisnft.com/assets/images/social.png'
			},
			{
				name: 'og:url',
				content: 'https://www.therealsaudisnft.com'
			},
			{
				name: 'og:site_name',
				content: 'The Real Saudis NFT'
			},

			{
				name: 'twitter:card',
				content: 'summary_large_image'
			},
			{
				name: 'twitter:title',
				content: 'The Real Saudis NFT'
			},
			{
				name: 'twitter:description',
				content: 'Because they lied, we are here'
			},
			{
				name: 'twitter:image',
				content: 'https://www.therealsaudisnft.com/assets/images/social.png'
			},
			{
				name: 'twitter:url',
				content: 'https://www.therealsaudisnft.com'
			},
			{
				name: 'twitter:site',
				content: '@6degz'
			},
			{
				name: 'twitter:creator',
				content: '@therealsaudisnft'
			},
		],
		link: [{
				rel: 'icon',
				href: '/favicon.ico'
			},
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico'
			},
			{
				rel: 'shortcut icon',
				type: 'image/x-icon',
				href: '/favicon.ico'
			},
			{
				rel: 'icon',
				type: 'image/svg+xml',
				href: '/assets/images/favicon.svg'
			},
			{
				rel: 'icon',
				type: 'image/png',
				href: '/assets/images/favicon.png'
			},
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/css/styles.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [{
		src: '~/plugins/bootstrap.client.js'
	}, ],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@luxdamore/nuxt-humans-txt'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
	},

	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: null,

	},
	server: {
		host: 'localhost',
		port: '15152',
	},

	env: {
		baseUrl: process.env.BASE_URL || 'https://www.therealsaudisnft.com'
	},

	humansTxt: {
		enabled: true,
		hideGenericMessagesInConsole: false, // Disabled in production
		hideErrorsInConsole: false,
		fileName: 'humans.txt',
		fileEncoding: 'utf8',
		link: {
			// Inject `<link type="text/plain" rel="<link.rel>" href="<link.href><filename>" />` inside the `head`
			// Set to `link: false` to disable this behavior
			rel: 'author',
			href: '',
			hid: 'humans-txt',
		},
		keepDevelopersInformations: true, // Keep info of my work in your `humans.txt` file 😍
		// "The internet is for humans"
		thanksTo: [
			'BACKSTAGE',
			{
				key: '6 Degrees Founder',
				value: 'Mohannad F. Otaibi',
			},
			{
				key: 'From',
				value: 'Khobar, Saudi Arabia',
			},
			{
				key: 'Twitter',
				value: '@6degz',
			},
			{
				key: '6 Degrees',
				value: 'https://www.6d.com.sa',
			},
		],
		site: [
			'SITE',
			{
				key: 'Last update',
				value: new Date().toLocaleDateString(
					'en-US', {
						month: '2-digit',
						day: '2-digit',
						year: 'numeric',
					}
				),
			},
			{
				key: 'Standards',
				value: [
					'HTML5',
					'CSS3',
					'Javascript',
				],
			},
			{
				key: 'Components',
				value: 'VueJs',
			},
			{
				key: 'Software',
				value: 'NuxtJs',
			},
			{
				key: 'Language',
				value: 'English/Arabic',
			},
			{
				key: 'Doctype',
				value: 'HTML5',
			},
		],
	},


}
