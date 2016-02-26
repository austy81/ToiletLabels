var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../shared/toilet_label"/>
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var labels_service_1 = require('../../shared/services/labels_service');
var toilet_label_1 = require('../../shared/toilet_label');
var AddLabelCmp = (function () {
    function AddLabelCmp(lblService) {
        this.lblService = lblService;
    }
    AddLabelCmp.prototype.addLabel = function () {
        var lbl = new toilet_label_1.ToiletLabel();
        lbl.id = Math.floor(Math.random() * 1000);
        lbl.placeName = this.placeName;
        this.lblService.add(lbl);
        this.placeName = '';
        return false;
    };
    AddLabelCmp = __decorate([
        core_1.Component({
            selector: 'add-label',
            templateUrl: './appScripts/add_label/components/add_label.html',
            directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [labels_service_1.LabelsService])
    ], AddLabelCmp);
    return AddLabelCmp;
})();
exports.AddLabelCmp = AddLabelCmp;
