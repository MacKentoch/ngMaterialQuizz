/* global angular */
import quizzController, {
	QUIZZ_CONTROLLER_NAME
}											from './app.quizz.controller';

const APP_QUIZZ_MODULE_NAME = 'app.quizz.module';

export default angular
								.module(APP_QUIZZ_MODULE_NAME, [])
								.controller(QUIZZ_CONTROLLER_NAME, quizzController);