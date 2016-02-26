import{ToiletLabel} from '../toilet_label';

export class LabelsService {
  labels : ToiletLabel[] = new Array();
  get() {
    return Promise.resolve(this.labels);
  }
  add(value: ToiletLabel): void {
    this.labels.push(value);
  }
}
