/* global angular */
import btSheetLangModel 	from '../../models/app.bottomSheetLanguage.modele.json!json';

const BT_SHEET_LANG_CONTROLLER 		= 'btSheetLangController';
const BT_SHEET_LANG_CONTROLLERAS 	= 'btSheetLangCtrl';


class btSheetLangController{
	
	constructor($mdBottomSheet, $translate){
		this.$mdBottomSheet = $mdBottomSheet;	
		this.$translate			= $translate;			
		this.init();
	}
	
	init(){
		this.langModel = btSheetLangModel;
	}
	
	selectlanguage(index) {
    let selectedLanguage = this.langModel[index];
		this.$translate.use(selectedLanguage.lang);
    this.$mdBottomSheet.hide(selectedLanguage);
  }

}


btSheetLangController.$inject = [
	'$mdBottomSheet',
	'$translate'
];

export default btSheetLangController;

export {
	BT_SHEET_LANG_CONTROLLER,
	BT_SHEET_LANG_CONTROLLERAS
};