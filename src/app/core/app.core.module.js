/* global angular */
const CORE_MODULE_NAME = 'app.core.module';
const CORE_MODULE_TO_INJECT = [
	'ui.router',
	'ngAria',
	'ngAnimate',
	'ngMaterial',
	'pascalprecht.translate'
];

export default angular
								.module(CORE_MODULE_NAME, CORE_MODULE_TO_INJECT);