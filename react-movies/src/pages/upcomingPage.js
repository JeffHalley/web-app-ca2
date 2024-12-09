import React, { useContext } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../contexts/moviesContext"; // Import context

const UpcomingPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "upcoming",
    getUpcomingMovies
  );

  const { addToMustWatch } = useContext(MoviesContext); // Get addToMustWatch function from context

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => (
        <>
          <AddToFavoritesIcon movie={movie} />
          <PlaylistAddIcon
            style={{ cursor: "pointer", marginLeft: "8px" }}
            onClick={() => addToMustWatch(movie)} // Add to "Must Watch" list on click
          />
        </>
      )}
    />
  );
};

export default UpcomingPage;
