import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShows, TvshowsCredits, TvshowsImages } from 'src/app/models/movies';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {
  tvshow: TvShows | null = null;

  tvshowImages: TvshowsImages | null = null;
  tvshowCredits: TvshowsCredits | null = null;
  constructor(private route: ActivatedRoute, private movieService: MoviesService) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getTvshow(id);
      this.getTvshowImage(id);
      this.gettvshowCredits(id);
    })
  }
  getTvshow(id: string) {
    this.movieService.getTvshow(id).subscribe((tvshow) => {
      this.tvshow = tvshow;
    });
  }
  getTvshowImage(id: string) {
    this.movieService.getTvshowsImages(id).subscribe((tvImageData) => {
      this.tvshowImages = tvImageData;
    })
  }
  gettvshowCredits(id: string) {
    this.movieService.getTvshowsCredits(id).subscribe((tvCreditsData) => {
      this.tvshowCredits = tvCreditsData;
    })
  }
}
