import { Component, Input } from '@angular/core';
import { Movies, TvShows } from 'src/app/models/movies';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() itemData: Movies | null = null;

}
