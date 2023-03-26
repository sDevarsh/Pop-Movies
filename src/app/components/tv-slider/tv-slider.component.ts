import { Component, Input, OnInit } from '@angular/core';
import { TvShows } from 'src/app/models/movies';

@Component({
  selector: 'app-tv-slider',
  templateUrl: './tv-slider.component.html',
  styleUrls: ['./tv-slider.component.scss']
})
export class TvSliderComponent implements OnInit {
  @Input() items: TvShows[] = [];
  @Input() isBanner: boolean = false;
  currentSlideIndex: number = 0;
  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 4000);
    }
  }
}
