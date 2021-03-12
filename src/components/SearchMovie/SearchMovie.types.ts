import { MovieType } from "../MovieList/MovieList.types";

export type SearchMovieType = Pick<
  MovieType,
  "id" | "title" | "release_date" | "poster_path"
>;
