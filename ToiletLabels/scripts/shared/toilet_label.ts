export class ToiletLabel {
  id: number;
  uploader: string;
  uploaderEmail: string;
  placeUrl: string;
  placeName: string;
  placeLat: number;
  placeLng: number;
  labelImageLaidies() {
      if(this.id)
        return this.id.toString() + '_l.jpg';
      return;
  }
  labelImageGentleman() {
      if(this.id)
        return this.id.toString() + '_g.jpg';
      return;
  }
}
