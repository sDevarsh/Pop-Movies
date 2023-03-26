import { Component, Input } from '@angular/core';
import { TvShows } from 'src/app/models/movies';

@Component({
  selector: 'app-tv-item',
  templateUrl: './tv-item.component.html',
  styleUrls: ['./tv-item.component.scss']
})
export class TvItemComponent {
  @Input() itemData: TvShows | null = null;
}
