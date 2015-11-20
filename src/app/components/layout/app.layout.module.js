/* global angular */
import layoutController, {
	LAYOUT_CONTROLLER_NAME
}														from './app.layout.controller';

const APP_LAYOUT_MODULE_NAME = 'app.layout.module';

export default angular
								.module(APP_LAYOUT_MODULE_NAME, [])
								.controller(LAYOUT_CONTROLLER_NAME, layoutController);
