/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState, useContext } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  FormControlLabel,
  Checkbox,
  FormControl,
  RadioGroup,
  Radio,
  TextField
} from "@material-ui/core";

import { DataContext } from "@app/hooks";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { styles } from "./MovieList.styles";

const MovieList = () => {
  const [watchedFilter, setWatchedFilter] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [expanded, setExpanded] = useState<number | false>(false);

  const { movieList, markMovie } = useContext(DataContext);

  const handleChange = (panel: number) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div css={styles.root}>
      <FormControl>
        <RadioGroup
          aria-label="watchedFilter"
          name="watchedFilter"
          value={watchedFilter}
          onChange={() => {
            setWatchedFilter((prev) => !prev);
          }}
        >
          <FormControlLabel value={true} control={<Radio />} label="Watched" />
          <FormControlLabel
            value={false}
            control={<Radio />}
            label="Unwatched"
          />
        </RadioGroup>

        <TextField
          variant="outlined"
          size="small"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchFilter(String(e.target?.value.toLowerCase()));
          }}
          label="Search My Movies"
        />
      </FormControl>
      <div>
        {movieList
          ?.filter((item) => item !== null)
          ?.filter(({ title }) => title.toLowerCase().includes(searchFilter))
          ?.filter(({ watched }) => watched === watchedFilter)
          .map(
            ({
              id,
              title,
              watched,
              poster_path,
              release_date,
              vote_average,
              popularity
            }) => (
              <Accordion
                key={id}
                expanded={expanded === id}
                onChange={handleChange(id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={String(id)}
                  id={String(id)}
                >
                  <FormControlLabel
                    aria-label="Acknowledge"
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={
                      <Checkbox
                        checked={watched}
                        onClick={() => {
                          markMovie(id);
                        }}
                      />
                    }
                    label={title}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <img
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMAGES}/w200${poster_path}`}
                    alt={title}
                  />
                  <div>
                    <Typography variant="h5">
                      Release date: {release_date}
                    </Typography>
                    <Typography variant="h5">
                      Vote average: {vote_average}
                    </Typography>

                    <Typography variant="h5">
                      Popularity: {popularity}
                    </Typography>
                  </div>
                </AccordionDetails>
              </Accordion>
            )
          )}
      </div>
    </div>
  );
};

export default MovieList;
