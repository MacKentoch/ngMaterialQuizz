/* global angular */
import homeController, {
	HOME_CONTROLLER_NAME
}											from './app.home.controller';

const APP_HOME_MODULE_NAME = 'app.home.module';

export default angular
								.module(APP_HOME_MODULE_NAME, [])
								.controller(HOME_CONTROLLER_NAME, homeController);