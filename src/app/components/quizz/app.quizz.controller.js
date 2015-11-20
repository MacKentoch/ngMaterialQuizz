/* global angular */

import quizz_model 	from '../../models/app.quizz.model.json!json';
import {
	nbChoiceRespected
}										from './app.quizz.controller.helpers';

const QUIZZ_CONTROLLER_NAME 		= 'quizzController';
const QUIZZ_CONTROLLER_AS_NAME 	= 'quizzCtrl';


const TOAST_POSITION 	= 'bottom right';
const TOAST_TIMEOUT 	= 2000;


const DELAY_1st_ANIM = 500;
const DELAY_2nd_ANIM = 800;


class quizzController{
	constructor($mdToast, $translate, $timeout){
		this.$mdToast 		= $mdToast;
		this.$translate		= $translate; 
		this.$timeout			= $timeout;
		
		this.init();
		this.initAnimationObject(); 
		this.startAnimation(); 							
	}
	
	init(){
		this.animations							= {};
		this.quizzModel 						= quizz_model;
		this.quizzEndingIndex				= this.quizzModel.questions.length;
		this.selectedIndexTab				= -1;		
		this.quizzProgressPourcent 	= 0;
		this.isStarting 						= false;			
	}
	
	
	refreshMessages(){
		this.alertnextMessage	= 'done';
		this.endAlertMessage 	= 'done';
		this.notValidStep 		=	'not a valid answer';	
		
		if((this.$translate.proposedLanguage() || this.$translate.use()) === 'fr'){
			this.alertnextMessage	= 'terminé';
			this.endAlertMessage 	= 'terminé';
			this.notValidStep 		=	'réponse non valide';	 
		}
		if((this.$translate.proposedLanguage() || this.$translate.use()) === 'en'){
			this.alertnextMessage	= 'done';
			this.endAlertMessage 	= 'done';
			this.notValidStep 		=	'not a valid answer';	 
		}				
	}
	
	startQuizz(){
		this.selectedIndexTab = 0;
		this.isStarting				= true;		
	}
	
	goPreviousStep(index){		
		if(index > 0){
			this.selectedIndexTab --;
			this.updateProgress();
		}			
		
	}
	
	goNextStep(index){
		this.refreshMessages(); //TODO : investigate $translate promise issues rather than this horrible way translating
		if(index < this.quizzModel.questions.length -1){
			if(this.validThisStep(index)){
				this.selectedIndexTab ++;
				this.updateProgress();
				this.afficheToastSimple(`${this.quizzProgressPourcent}% ${this.alertnextMessage}!`);	
			}else{
				this.afficheToastSimple(`${this.notValidStep}!`);
			}
		}	
		if(index === this.quizzModel.questions.length -1){
			if(this.validThisStep(index)){
				this.selectedIndexTab ++;
				this.updateProgress();
				this.afficheToastSimple(`${this.quizzProgressPourcent}% ${this.alertnextMessage}!`);						
			}else{
				this.afficheToastSimple(`${this.notValidStep}!`);
			}
		}	
	}
	
	
	validThisStep(index){
		let currentQuestion = this.quizzModel.questions[index];	
		let isValid = false;	
		if(nbChoiceRespected(currentQuestion)) {
			isValid =  true;
		}else{
			isValid =  false;
		}	
		return isValid;	
	}
	
	
	isEndingQuizz(){
		if(this.selectedIndexTab === this.quizzEndingIndex) return true;
		return false;
	}
	
	isQuizzStep(){
		if(this.selectedIndexTab >= 0 && this.selectedIndexTab <= this.quizzModel.questions.length-1) return true;
		return false;
	}
	
	saveQuizz(){
		this.afficheToastSimple('Here you save quizz model');
	}
	
	afficheToastSimple(message){
		 this.$mdToast.show(
      this.$mdToast.simple()
        .content(message)
        .position(TOAST_POSITION)
        .hideDelay(TOAST_TIMEOUT)
    );
	}
	
	
	updateProgress(){
		if(this.quizzModel.questions.length > 0) {
			this.quizzProgressPourcent = Math.round(((this.selectedIndexTab)/this.quizzModel.questions.length )*100);			
		}
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

quizzController.$injector = [
	'$mdToast',
	'$translate',
	'$timeout'
];

export default quizzController;

export {
	QUIZZ_CONTROLLER_NAME,
	QUIZZ_CONTROLLER_AS_NAME
};
