import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, Location} from 'angular2/router'

import {BrowseCmp} from '../browse/browse';
import {AddLabelCmp} from '../add_label/add_label';
import {LabelsService} from '../shared/services/labels_service';

@Component({
  selector: 'my-app',
  templateUrl: './appScripts/app/app.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    LabelsService
  ]
})

@RouteConfig([
  { path: '/', component: BrowseCmp, name: 'Browse' },
  { path: '/add', component: AddLabelCmp, name: 'AddLabel' }
])

export class AppCmp {
    location: Location;
    constructor(location: Location) {
        this.location = location;
    }
    getLinkStyle(path) {
        return this.location.path() === path;
    }
}
