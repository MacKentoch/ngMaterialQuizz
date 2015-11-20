import {
	HOME_CONTROLLER_NAME,
	HOME_CONTROLLER_AS_NAME	
} 									from '../components/home/app.home.controller';
import homeTemplate from '../components/home/app.home.template.html!text';

import {
	QUIZZ_CONTROLLER_NAME,
	QUIZZ_CONTROLLER_AS_NAME	
} 									from '../components/quizz/app.quizz.controller';
import quizzTemplate from '../components/quizz/app.quizz.template.html!text';


const BASE_URL = '/';


function routeConfig(
	$stateProvider, 
	$urlRouterProvider,
	$locationProvider){

	$stateProvider
	
		.state('home', {
			url						: '/',
			template			:	homeTemplate,
			controller		: HOME_CONTROLLER_NAME,
			controllerAs	: HOME_CONTROLLER_AS_NAME,
			resolve : {
				log : ()=> console.info(`route vers home`)
			}
		})
		
		.state('quizz', {
			url						: '/',
			template			:	quizzTemplate,
			controller		: QUIZZ_CONTROLLER_NAME,
			controllerAs	: QUIZZ_CONTROLLER_AS_NAME,
			resolve : {
				log : ()=> console.info(`route vers quizz`)
			}			
		})
				
	;
	
	$urlRouterProvider.otherwise(BASE_URL);		
	$locationProvider.html5Mode(true);
		
}

routeConfig.$inject = [
	'$stateProvider',
	'$urlRouterProvider',
	'$locationProvider'
];
export default routeConfig;
