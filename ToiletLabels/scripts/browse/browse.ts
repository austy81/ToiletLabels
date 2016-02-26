import {Component, OnInit} from 'angular2/core';
import {LabelsService} from '../shared/services/labels_service';
import {ToiletLabel} from '../shared/toilet_label';

@Component({
  selector: 'browse',
  templateUrl: './appScripts/browse/browse.html'
})

export class BrowseCmp implements OnInit{
  public currentIndex: number;
  public getCurrentLabel() {
      if(this.toiletLabels.length > this.currentIndex) {
          return this.toiletLabels[this.currentIndex];
      }
      return new ToiletLabel();
  };
  public toiletLabels: ToiletLabel[];
  constructor(public lblService: LabelsService) {
      this.toiletLabels = new Array();
      this.currentIndex = 0;
  }
  ngOnInit() {
      this.getLabels();
  }
  getLabels() {
      this.lblService.get()
        .then(l => this.toiletLabels = l);
  }
  previousLabel(){
      if(this.previousEnabled())
        this.currentIndex--;
  }
  previousEnabled():boolean{
      return this.currentIndex > 0;
  }
  nextLabel(){
      if(this.nextEnabled())
        this.currentIndex++;
  }
  nextEnabled():boolean{
      return this.currentIndex < (this.toiletLabels.length - 1);
  }
  refreshLabels(){
      this.getLabels();
  }
}
