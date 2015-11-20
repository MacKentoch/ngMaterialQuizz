/* global angular */
import navMenuModel 						from '../../models/app.sideNavMenu.model.json!json';
import  {
	BT_SHEET_LANG_CONTROLLER,
	BT_SHEET_LANG_CONTROLLERAS	
}																from '../bottomSheetLanguage/app.bottomSheetLanguage.controller';		
import btSheetlanguageTemplate	from '../bottomSheetLanguage/app.bottomSheetLanguage.template.html!text';

const LAYOUT_CONTROLLER_NAME 		= 'layoutController';
const LAYOUT_CONTROLLER_AS_NAME = 'layoutCtrl';

class layoutController{
	
	constructor($mdSidenav,$state, $mdBottomSheet, $translate, $mdDialog){
		this.$mdSidenav 		= $mdSidenav;
		this.$state 				= $state;
		this.$mdBottomSheet	= $mdBottomSheet;
		this.$translate			= $translate;
		this.$mdDialog   		= $mdDialog;
				
		this.init();
	}
	
	init(){		
		this.originatorEv			= null;
		this.leftSideNavModel = navMenuModel;
	}
	
	
	toggleSidenav(destId) {
		this.$mdSidenav(destId).toggle();		
	}	
	
	navigateTo(uiSref, event, sidenavId){
		this.closeAllSidenav(sidenavId);
		this.$state.go(uiSref);		
	}
	
	closeAllSidenav(sidenavId){
		this.$mdSidenav(sidenavId)
					.close()
					.then(()=>console.info('close all sidenav'));
	}
	
	
	openLanguageBottomSheet(event){	
		this.$mdBottomSheet.show({
					template						: btSheetlanguageTemplate,
					controller					: BT_SHEET_LANG_CONTROLLER,
					controllerAs				: BT_SHEET_LANG_CONTROLLERAS,
					clickOutsideToClose	: true,
					targetEvent					: event || this.originatorEv
				})
				.then(
					(langSelected)=>{																										
						console.info(`changed language to : ${this.translateThisKey(langSelected.lang)}`);
				});
	}
	
	
	openConfigurationMenu($mdOpenMenu, ev) {
		this.originatorEv = ev;
		$mdOpenMenu(ev);
	}
	
	
}



layoutController.$inject = [
	'$mdSidenav',
	'$state',
	'$mdBottomSheet',
	'$translate',
	'$mdDialog'
];

export default layoutController;

export {
	LAYOUT_CONTROLLER_NAME,
	LAYOUT_CONTROLLER_AS_NAME
};