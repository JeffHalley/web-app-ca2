import React, { useState } from "react";
import { useQuery } from "react-query";  
import { getRecommendations } from "../../api/tmdb-api";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import MovieCard from "../movieCard";
import Spinner from "../spinner";
import Typography from "@mui/material/Typography";


const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { data, error, isLoading, isError } = useQuery(
    ["recommendations", movie.id],  
    () => getRecommendations(movie.id),  
    {
      enabled: !!movie?.id,  
    }
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <Paper elevation={3} sx={{ padding: 2, backgroundColor: "#fce4e4", textAlign: "center" }}>
        <Chip label="Error" color="error" />
        <p>{error.message}</p>
      </Paper>
    );
  }

  return (
    <>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Chip label="Overview" color="primary" sx={{ marginBottom: 1 }} />
        <p>{movie.overview}</p>
      </Paper>

      <Paper component="ul" sx={{ ...root }}>
        <Chip label="Genres" sx={{ ...chip }} color="primary" />
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{ ...chip }} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={{ ...root }}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip icon={<MonetizationIcon />} label={`${movie.revenue.toLocaleString()}`} />
        <Chip icon={<StarRate />} label={`${movie.vote_average} (${movie.vote_count})`} />
        <Chip label={`Released: ${movie.release_date}`} />
        <Chip label="Production Countries" color="primary" />
        <Chip
          label={movie.production_countries.map((country) => country.name).join(", ")}
        />
      </Paper>

      {/* Reverted Recommended Movies Section */}
      <Typography variant="h5" component="h3" sx={{ marginTop: 2 }}>
        Recommended Movies
      </Typography>

      {data?.results && (
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {data.results.map((recommendedMovie) => (
            <Grid item xs={12} sm={6} md={4} key={recommendedMovie.id}>
              <MovieCard movie={recommendedMovie} action={() => {}} />
            </Grid>
          ))}
        </Grid>
      )}

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: "fixed",
          bottom: "1em",
          right: "1em",
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};

export default MovieDetails;
