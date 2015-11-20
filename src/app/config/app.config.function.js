import appVersion 		from '../app.version.json!json';
import traductionEn 	from '../i18n/local-en.json!json';
import traductionfr 	from '../i18n/local-fr.json!json';


const DEFAULT_LANG 				= 'fr';
const SANITARIZE_STARTEGY	= 'escape';


function appConfig(
	$mdThemingProvider,
	$mdIconProvider,
	$translateProvider){
	
	$mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red');
		
	$translateProvider.translations('en', traductionEn);
  $translateProvider.translations('fr', traductionfr);
	
	let browserLang = (navigator.language || navigator.browserLanguage).split('-')[0];
	$translateProvider.preferredLanguage(browserLang || DEFAULT_LANG);
	$translateProvider.useSanitizeValueStrategy(SANITARIZE_STARTEGY);
	$translateProvider.fallbackLanguage(DEFAULT_LANG);
	
}


appConfig.$inject = [
	'$mdThemingProvider',
	'$mdIconProvider',
	'$translateProvider'
];

export default appConfig;