import { Component, Input } from '@angular/core';
import { Movies } from 'src/app/models/movies';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent {
  @Input() items: Movies[] = [];
  @Input() title: string = "";
}
