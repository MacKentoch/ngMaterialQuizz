/* global angular */
import btSheetLangController, {
	BT_SHEET_LANG_CONTROLLER
} 															from './app.bottomSheetLanguage.controller';

const BT_SHEET_LANG_MODULE = 'app.btSheetLang.module';

export default angular
								.module(BT_SHEET_LANG_MODULE, [])
								.controller(BT_SHEET_LANG_CONTROLLER, btSheetLangController);