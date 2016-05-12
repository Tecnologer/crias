'use strict';

module.exports = {
	app: {
		title: 'Crias',
		description: 'Final project of web engineering class',
		keywords: ''
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				
				'public/lib/materialize/dist/css/materialize.min.css'
				
			],
			js: [
				'public/lib/jquery/dist/jquery.min.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',

				
				'public/lib/materialize/dist/js/materialize.min.js',	
				'public/lib/angular-materialize/src/angular-materialize.js',
				
				'public/lib/angular-ui-utils/ui-utils.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/**/js/*.js',
			'public/modules/*/*.client.module.js',

			'public/modules/core/filters/*.js',
			'public/modules/core/services/*.js',
			'public/modules/core/controllers/*.js',
			'public/modules/core/directives/*.js',
			'public/modules/core/*.client.module.js',
			'public/modules/core/config/*.js',

			'public/modules/*[!core]*/filters/*.js',
			'public/modules/*[!core]*/services/*.js',
			'public/modules/*[!core]*/controllers/*.js',
			'public/modules/*[!core]*/directives/*.js',

			'public/modules/*[!core]*/config/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};