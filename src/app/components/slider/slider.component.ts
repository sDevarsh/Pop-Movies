import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s')]),
      transition('* => void', [animate('500ms')]),
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movies[] = [];
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
