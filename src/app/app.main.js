/* global angular */
import './app.vendors';

import appConfigFunction					from './config/app.config.function';
import appRunFunction							from './run/app.run.function';
import coreModule 								from './core/app.core.module';
import routeModule 								from './route/app.route.module';

import layoutModule								from './components/layout/app.layout.module';
import homeModule									from './components/home/app.home.module';
import quizzModule								from './components/quizz/app.quizz.module';

import btSheetLangModule					from './components/bottomSheetLanguage/app.bottomSheetLanguage.module';

const APP_MODULE_NAME = 'ngMaterialQuizz';

const APP_MODULES_TO_INJECT = [
	coreModule.name,
	routeModule.name,
	
	btSheetLangModule.name,
	
	layoutModule.name,
	homeModule.name,
	quizzModule.name
];


let appModule = angular
									.module(APP_MODULE_NAME, APP_MODULES_TO_INJECT)
									.config(appConfigFunction)				
									.run(appRunFunction);
																		
export default appModule;