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
var labels_service_1 = require('../shared/services/labels_service');
var toilet_label_1 = require('../shared/toilet_label');
var BrowseCmp = (function () {
    function BrowseCmp(lblService) {
        this.lblService = lblService;
        this.toiletLabels = new Array();
        this.currentIndex = 0;
    }
    BrowseCmp.prototype.getCurrentLabel = function () {
        if (this.toiletLabels.length > this.currentIndex) {
            return this.toiletLabels[this.currentIndex];
        }
        return new toilet_label_1.ToiletLabel();
    };
    ;
    BrowseCmp.prototype.ngOnInit = function () {
        this.getLabels();
    };
    BrowseCmp.prototype.getLabels = function () {
        var _this = this;
        this.lblService.get()
            .then(function (l) { return _this.toiletLabels = l; });
    };
    BrowseCmp.prototype.previousLabel = function () {
        if (this.previousEnabled())
            this.currentIndex--;
    };
    BrowseCmp.prototype.previousEnabled = function () {
        return this.currentIndex > 0;
    };
    BrowseCmp.prototype.nextLabel = function () {
        if (this.nextEnabled())
            this.currentIndex++;
    };
    BrowseCmp.prototype.nextEnabled = function () {
        return this.currentIndex < (this.toiletLabels.length - 1);
    };
    BrowseCmp.prototype.refreshLabels = function () {
        this.getLabels();
    };
    BrowseCmp = __decorate([
        core_1.Component({
            selector: 'browse',
            templateUrl: './appScripts/browse/browse.html'
        }), 
        __metadata('design:paramtypes', [labels_service_1.LabelsService])
    ], BrowseCmp);
    return BrowseCmp;
})();
exports.BrowseCmp = BrowseCmp;
