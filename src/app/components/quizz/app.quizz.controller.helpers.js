/* global angular */
const nbChoiceRespected = (questionModel)=>{
	let choice_respected 	= false;
	let nbChoices 				=	0;
	
	angular.forEach(questionModel.liste_choix, (choix, id)=>{
		if((choix.saisie === true) 				&& (choix.type === 'checkbox')) nbChoices++;
		if(((choix.saisie || '') !== '') 	&& (choix.type === 'textarea')) nbChoices++;
	});
	
	if(	nbChoices >= (questionModel.nombre_minimum_choix || 1) && 
			nbChoices <= (questionModel.nombre_maximum_choix || 99999)){				
		choice_respected = true;
	} else {
		choice_respected = false;
	}
	return choice_respected;
};


export {
	nbChoiceRespected
};
