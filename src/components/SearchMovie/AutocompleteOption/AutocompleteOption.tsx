import React from "react";
import { SearchMovieType } from "../SearchMovie";

const AutocompleteOption: React.FC<SearchMovieType> = ({
  poster_path,
  title,
  release_date
}) => (
  <div>
    {poster_path && (
      <img
        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGES}/w200${poster_path}`}
        alt=""
        width={50}
        height={50}
      />
    )}
    {`${title} / ${release_date}`}
  </div>
);

export default AutocompleteOption;
