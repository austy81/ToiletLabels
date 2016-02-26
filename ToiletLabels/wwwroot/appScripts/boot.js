///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var core_1 = require('angular2/core');
//import {ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES,APP_BASE_HREF} from 'angular2/router';
//import {LocationStrategy,RouteParams,ROUTER_BINDINGS, HashLocationStrategy} from 'angular2/router';
var browser_1 = require('angular2/platform/browser');
var core_2 = require('angular2-google-maps/core');
var app_1 = require('./app/app');
if ('<%= ENV %>' === 'prod') {
    core_1.enableProdMode();
}
browser_1.bootstrap(app_1.AppCmp, [
    core_2.ANGULAR2_GOOGLE_MAPS_PROVIDERS
]);
