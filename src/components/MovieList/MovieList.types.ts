export type MovieType = Readonly<
  { id: number; title: string } & Partial<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }>
>;

export type ExtendedMovieType = MovieType & {
  watched?: boolean;
};

export type MovieListProps = Readonly<{
  movieList: Array<ExtendedMovieType>;
  markMovie: any;
}>;
