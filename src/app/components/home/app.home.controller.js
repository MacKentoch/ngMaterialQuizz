/* global angular */
const HOME_CONTROLLER_NAME 		= 'homeController';
const HOME_CONTROLLER_AS_NAME = 'homeCtrl';

const DELAY_1st_ANIM = 400;
const DELAY_2nd_ANIM = 800;

class homeController{
	
	constructor($timeout){
		this.$timeout 	= $timeout;
				
		this.init();
	}
	
	init(){
		this.animations 	= {};
		this.initAnimationObject(); 
		this.startAnimation(); 			
	}
	
	startAnimation(){
		this.$timeout(()=>this.animations.firstAnim = true, 							DELAY_1st_ANIM)
    			.then(()=>this.$timeout(this.animations.secondAnim = true,	DELAY_2nd_ANIM));
	}
	
	initAnimationObject(){
		angular.extend(this.animations,{
			firstAnim 	: false,
			secondAnim 	: false
		});
	}

	
	
	
}



homeController.$inject = [
	'$timeout'
];

export default homeController;

export {
	HOME_CONTROLLER_NAME,
	HOME_CONTROLLER_AS_NAME
};