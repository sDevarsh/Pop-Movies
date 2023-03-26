import { Component } from '@angular/core';
import { TvShows } from 'src/app/models/movies';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent {
  tvshows: TvShows[] = [];
  constructor(private moviesService: MoviesService) {

  }
  ngOnInit(): void {
    this.getPagedMovies(1);
  }
  getPagedMovies(page: number) {
    this.moviesService.searchTvShows(page).subscribe(tvshows => { this.tvshows = tvshows });
  }
  paginate(event: any) {
    this.getPagedMovies(event.page + 1);
  }
}
