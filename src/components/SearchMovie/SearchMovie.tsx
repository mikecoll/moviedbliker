/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useEffect, useState, useContext } from "react";
import {
  InputAdornment,
  CircularProgress,
  TextField,
  Button
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Search as SearchIcon } from "@material-ui/icons";

import AutocompleteOption from "./AutocompleteOption";

import { useSearchMovie } from "@hooks";
import { SearchMovieType } from "./SearchMovie.types";
import { styles } from "./SearchMovie.styles";
import { DataContext } from "@app/hooks";

const SearchMovie = () => {
  const { addMovie } = useContext(DataContext);

  const [value, setValue] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<SearchMovieType | null>(
    null
  );
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<SearchMovieType[]>([]);

  const { data, error } = useSearchMovie(value, !!value);
  const loading = open && !data && !error;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target.value);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    movie: SearchMovieType
  ) => {
    setSelectedMovie(movie);
  };

  const handleAddToUnwatched = () => {
    if (!selectedMovie || !selectedMovie.id) {
      return;
    }
    addMovie(selectedMovie);
    setSelectedMovie(null);
    setValue("");
  };

  useEffect(() => {
    let active = true;

    if (active && !loading) {
      setOptions(data);
    }

    return () => {
      active = false;
    };
  }, [loading, data]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <div css={styles.root}>
      <Autocomplete
        id="search-movie"
        clearOnEscape
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        value={selectedMovie}
        getOptionSelected={(option, value) => option.id === value.id}
        getOptionLabel={(option) => option.title}
        options={options}
        loading={loading}
        onInputChange={handleInputChange}
        onChange={handleChange}
        renderOption={(params) => <AutocompleteOption {...params} />}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            placeholder="Search MovieDB"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </InputAdornment>
              )
            }}
          />
        )}
      />
      <Button
        variant="contained"
        onClick={handleAddToUnwatched}
        disabled={!selectedMovie}
      >
        Add to unwatched
      </Button>
    </div>
  );
};

export default SearchMovie;
