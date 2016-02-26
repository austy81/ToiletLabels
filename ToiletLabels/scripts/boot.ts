///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {provide, enableProdMode, bind} from 'angular2/core';
//import {ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES,APP_BASE_HREF} from 'angular2/router';
//import {LocationStrategy,RouteParams,ROUTER_BINDINGS, HashLocationStrategy} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';

import {AppCmp} from './app/app';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

bootstrap(AppCmp, [
    ANGULAR2_GOOGLE_MAPS_PROVIDERS
    ]);