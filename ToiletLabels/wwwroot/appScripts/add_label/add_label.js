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
var common_1 = require('angular2/common');
var labels_service_1 = require('../shared/services/labels_service');
var toilet_label_1 = require('../shared/toilet_label');
var core_2 = require('angular2-google-maps/core');
var AddLabelCmp = (function () {
    function AddLabelCmp(lblService) {
        this.lblService = lblService;
        // google maps zoom level
        this.mapZoom = 8;
        // initial center position for the map
        this.mapLat = 51.673858;
        this.mapLng = 7.815982;
        this.mapMarker = {
            lat: null,
            lng: null,
            draggable: true,
            label: 'Where was it?'
        };
    }
    AddLabelCmp.prototype.addLabel = function () {
        var lbl = new toilet_label_1.ToiletLabel();
        lbl.id = this.id;
        lbl.placeName = this.placeName;
        lbl.placeUrl = this.placeURL;
        lbl.uploader = this.uploader;
        lbl.uploaderEmail = this.uploaderEmail;
        lbl.placeLat = this.mapMarker.lat;
        lbl.placeLng = this.mapMarker.lng;
        this.lblService.add(lbl);
        this.placeName = '';
        return false;
    };
    AddLabelCmp.prototype.mapClicked = function ($event) {
        this.mapMarker.lat = $event.coords.lat;
        this.mapMarker.lng = $event.coords.lng;
    };
    AddLabelCmp.prototype.markerDragEnd = function ($event) {
        console.log('dragEnd', $event);
    };
    AddLabelCmp = __decorate([
        core_1.Component({
            selector: 'add-label',
            templateUrl: './appScripts/add_label/add_label.html',
            styleUrls: ['./appScripts/add_label/add_label.css'],
            /*styles: [`
               .sebm-google-map-container {
                  height: 300px;
               }
              .top-buffer {
                margin-top:20px;
              }`],*/
            directives: [common_1.FORM_DIRECTIVES,
                common_1.CORE_DIRECTIVES,
                core_2.ANGULAR2_GOOGLE_MAPS_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [labels_service_1.LabelsService])
    ], AddLabelCmp);
    return AddLabelCmp;
})();
exports.AddLabelCmp = AddLabelCmp;
