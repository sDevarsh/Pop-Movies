export interface Movies {
  adult: boolean,
  backdrop_path: string,
  id: number,
  title: string,
  original_language: string,
  original_title: string,
  overview: string,
  poster_path: string,
  media_type: string,
  genre_ids: number[];
  popularity: number,
  release_date: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  revenue: number,
  runtime: number,
  status: string
  genres: Genre[];
}
export interface MoviesDto {
  page: number,
  results: Movies[],
  total_results: number,
  total_pages: number
}
export interface Genre {
  id: number;
  name: string;
}
export interface TvShows {
  backdrop_path: string,
  first_air_date: string,
  genre_ids: number[],
  id: number,
  name: string,
  origin_country: string[],
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  vote_average: number,
  vote_count: number,
  episode_run_time: number,
  number_of_episodes: number,
  status: string
}
export interface TvsDto {
  page: number,
  results: TvShows[],
  total_results: number,
  total_pages: number
}
export interface MoviesVideoDto {
  id: number;
  results: MoviesVideo[]
}
export interface MoviesVideo {
  site: string,
  key: string
}
export interface MoviesImages {
  backdrops: {
    file_path: string;
  }[]
}
export interface MoviesCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}
export interface TvshowsImages {
  backdrops: {
    file_path: string;
  }[]
}
export interface TvshowsCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}
