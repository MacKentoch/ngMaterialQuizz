var BASE_DIR 									= './';
var BUNDLE_CSS_NAME						= 'app.bundle.css';
var BUNDLE_JS_NAME						= 'app.bundle.js';

module.exports = {
		
	baseDir 					: BASE_DIR,
	
	sassSourcesFiles	: [BASE_DIR,'src/app/**/*.scss',].join(''),	
	cssFileDest 			: BUNDLE_CSS_NAME,
	cssDirDest 				: [BASE_DIR,'src/css/'].join(''),
	
	mainAppJsSOURCE		: [BASE_DIR,'src/app/app.bootstrap.js'].join(''),	
	mainAppJsDEST			: [BASE_DIR,'public/js/', BUNDLE_JS_NAME].join(''),
	
	appJSAllJS 				: [
		[BASE_DIR,'src/app/**/*.js'].join(''),
		["!", BASE_DIR,'src/app/', BUNDLE_JS_NAME].join('')
	]
	
}