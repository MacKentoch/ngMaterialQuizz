/* global angular */
import routeConfig from './app.route.config';

const ROUTE_MODULE = 'app.route.module';

export default angular
								.module(ROUTE_MODULE, [])
								.config(routeConfig);
