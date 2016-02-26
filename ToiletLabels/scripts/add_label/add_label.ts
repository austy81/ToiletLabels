import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {LabelsService} from '../shared/services/labels_service';
import {ToiletLabel} from '../shared/toilet_label';
import {  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  ANGULAR2_GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

@Component({
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
  directives: [FORM_DIRECTIVES,
    CORE_DIRECTIVES,
    ANGULAR2_GOOGLE_MAPS_DIRECTIVES
    ]
})

export class AddLabelCmp {
  id: number;
  placeName: string;
  placeURL: string;
  uploader: string;
  uploaderEmail: string;

  // google maps zoom level
  mapZoom: number = 8;
  
  // initial center position for the map
  mapLat: number = 51.673858;
  mapLng: number = 7.815982;
  
  mapMarker: marker = { 
      lat: null
      , lng: null
      , draggable: true
      , label: 'Where was it?'
    }
   
  constructor(public lblService: LabelsService) {}

  addLabel(): boolean {
    var lbl = new ToiletLabel();
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
  }
  
  mapClicked($event: MouseEvent) {
    this.mapMarker.lat = $event.coords.lat;
    this.mapMarker.lng = $event.coords.lng;
  }
  
  markerDragEnd($event: MouseEvent) {
    console.log('dragEnd', $event);
  }
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}