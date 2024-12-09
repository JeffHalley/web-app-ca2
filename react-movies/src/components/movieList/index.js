import Grid from "@mui/material/Grid2";
import React from "react";
import MovieCard from "../movieCard";

function MovieList({ movies, action, gridProps }) {
  return (
    <Grid container spacing={3}>
      {movies.map((movie) => (
        <Grid item {...gridProps} key={movie.id}>
          <MovieCard movie={movie} action={action} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieList;
