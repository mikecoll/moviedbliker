import { NavBar, MovieList } from "@components";

import { DataContext, useLocalStore } from "@app/hooks";
import { ExtendedMovieType } from "@app/components/MovieList/MovieList.types";

const Homepage = () => {
  const { movieList, markMovie, addMovie } = useLocalStore();

  return (
    <DataContext.Provider value={{ movieList, addMovie, markMovie }}>
      {/* <DataProvider> */}
      <NavBar />
      <MovieList />
      {/* </DataProvider> */}
    </DataContext.Provider>
  );
};

export default Homepage;
