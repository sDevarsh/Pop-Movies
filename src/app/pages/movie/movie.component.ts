import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies, MoviesCredits, MoviesImages, MoviesVideo } from 'src/app/models/movies';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movies | null = null;
  movieVideos: MoviesVideo[] = [];
  movieImages: MoviesImages | null = null;
  movieCredits: MoviesCredits | null = null;
  constructor(private route: ActivatedRoute, private movieService: MoviesService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    })

  }
  getMovie(id: string) {
    this.movieService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }
  getMovieVideos(id: string) {
    this.movieService.getMoviesVideos(id).subscribe((movieVideoData) => {
      this.movieVideos = movieVideoData;
    })
  };
  getMovieImages(id: string) {
    this.movieService.getMoviesImages(id).subscribe((movieImageData) => {
      this.movieImages = movieImageData;
    })
  }
  getMovieCredits(id: string) {
    this.movieService.getMoviesCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
    })
  }
}
