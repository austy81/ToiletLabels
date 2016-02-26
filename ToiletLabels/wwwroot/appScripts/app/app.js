var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var browse_1 = require('../browse/browse');
var add_label_1 = require('../add_label/add_label');
var labels_service_1 = require('../shared/services/labels_service');
var AppCmp = (function () {
    function AppCmp(location) {
        this.location = location;
    }
    AppCmp.prototype.getLinkStyle = function (path) {
        return this.location.path() === path;
    };
    AppCmp = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './appScripts/app/app.html',
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                router_1.ROUTER_PROVIDERS,
                labels_service_1.LabelsService
            ]
        }),
        router_1.RouteConfig([
            { path: '/', component: browse_1.BrowseCmp, name: 'Browse' },
            { path: '/add', component: add_label_1.AddLabelCmp, name: 'AddLabel' }
        ]), 
        __metadata('design:paramtypes', [router_1.Location])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
