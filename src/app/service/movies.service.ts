import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Movies, MoviesCredits, MoviesDto, MoviesImages, MoviesVideoDto, TvShows, TvsDto, TvshowsCredits, TvshowsImages } from '../models/movies';
import { switchMap, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '874e81fcdd250a028ff3dd19f8d4e640';

  constructor(private httpClient: HttpClient) { }
  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.httpClient.get<MoviesDto>(`${this.baseUrl}movie/${type}?api_key=${this.apiKey}`).pipe(switchMap(res => {
      return of(res.results.slice(0, count));
    }));
  }
  getMovie(id: string) {
    return this.httpClient.get<Movies>(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
  }
  searchMovies(page: number) {
    return this.httpClient.get<MoviesDto>(`${this.baseUrl}movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(switchMap(res => {
      return of(res.results);
    }));
  }
  getTvshow(id: string) {
    return this.httpClient.get<TvShows>(`${this.baseUrl}tv/${id}?api_key=${this.apiKey}`);
  }
  getTvShows(type: string = 'upcoming', count: number = 12) {
    return this.httpClient.get<TvsDto>(`${this.baseUrl}tv/${type}?api_key=${this.apiKey}`).pipe(switchMap(res => {
      return of(res.results.slice(0, count));
    }));
  }
  searchTvShows(page: number) {
    return this.httpClient.get<TvsDto>(`${this.baseUrl}tv/popular?page=${page}&api_key=${this.apiKey}`).pipe(switchMap(res => {
      return of(res.results);
    }));
  }
  getMoviesVideos(id: string) {
    return this.httpClient.get<MoviesVideoDto>(`${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`).pipe(switchMap(res => {
      return of(res.results);
    }));
  }

  getMoviesImages(id: string) {
    return this.httpClient.get<MoviesImages>(`${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`);
  }
  getMoviesCredits(id: string) {
    return this.httpClient.get<MoviesCredits>(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`);
  }
  getTvshowsImages(id: string) {
    return this.httpClient.get<TvshowsImages>(`${this.baseUrl}tv/${id}/images?api_key=${this.apiKey}`);
  }
  getTvshowsCredits(id: string) {
    return this.httpClient.get<TvshowsCredits>(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`);
  }
}

