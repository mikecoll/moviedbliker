import React, {
  useEffect,
  useState,
  useCallback,
  useContext,
  createContext,
  useReducer
} from "react";
// import * as ls from "local-storage";
import {
  // MovieType,
  ExtendedMovieType
} from "@app/components/MovieList/MovieList.types";

// const STORAGE_NAME = "demo-storage";

const DataContext: any = createContext([]);

export const useLocalStore = () => {
  const [movieList, setMovieList] = useState<Array<ExtendedMovieType>>([]);

  // const refreshList = () => {
  //   const result = ls.get(STORAGE_NAME);
  //   console.log("refreshList", result);

  //   setMovieList(result as Array<ExtendedMovieType>);
  // };

  // const setData = useCallback((data) => {
  //   setMovieList(data);
  //   // return ls.set(STORAGE_NAME, data);
  //   // refreshList();
  // }, []);

  const markMovie = (selectedId) => {
    // const storedData = ls.get<Array<ExtendedMovieType>>(STORAGE_NAME) || [];
    setMovieList((prevState) => {
      const foundIndex = movieList.findIndex(({ id }) => id === selectedId);
      const prevValue = movieList[foundIndex].watched;
      movieList[foundIndex].watched = !prevValue;

      return [...movieList];
    });
  };

  const addMovie = (movie) => {
    // const storedData = ls.get<Array<MovieType>>(STORAGE_NAME) || [];
    setMovieList((prevState) => {
      if (movieList.find(({ id }) => id === movie.id)) {
        return [...movieList];
      }

      const result = [{ ...movie, watched: false }, ...movieList];

      return result;
    });
  };

  useEffect(() => {
    // const store = ls.get<Array<ExtendedMovieType>>(STORAGE_NAME);
    // setMovieList(store);
    console.log("useeffect", movieList);
  }, [movieList]);

  return { movieList, markMovie, addMovie };
};
