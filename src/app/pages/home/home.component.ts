import { Component, OnInit } from '@angular/core';
import { Movies, MoviesDto } from 'src/app/models/movies';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movies[] = [];
  upcomingMovies: Movies[] = [];
  topRatedMovies: Movies[] = [];

  constructor(private moviesService: MoviesService) { }
  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    })
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies
    })
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies
    })

  }
}
