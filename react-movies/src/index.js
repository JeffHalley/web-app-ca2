import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, useNavigate } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ProtectedRoutes from "./components/ProtectedRoute";
import ReactDOM from "react-dom/client";

import LoginPage from './components/auth/signIn';
import SignUp from './components/auth/signUp';

import HomePage from "./pages/homePage";
import UpcomingPage from "./pages/upcomingPage";
import PopularPage from "./pages/popularPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from "./pages/addMovieReviewPage";

import SiteHeader from "./components/siteHeader";
import MoviesContextProvider from "./contexts/moviesContext";
import AuthContextProvider from "./contexts/authContext";




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const AppRoutes = () => {
  return (
    <Routes>
                
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route element={<ProtectedRoutes />}>
                <Route path="/" element={<HomePage />} />
                  <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
                  <Route path="/reviews/:id" element={<MovieReviewPage />} />
                  <Route path="/movies/:id" element={<MoviePage />} />
                  <Route path="/movies/upcoming" element={<UpcomingPage />} />
                  <Route path="/movies/popular" element={<PopularPage />} />
                  <Route path="/movies/now_playing" element={<NowPlayingPage />} />
                  <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
    

  );
};




const App = () => {
  const backgroundStyle = {
    background: `url('/images/back3.png') no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    overflowX: "hidden",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <SiteHeader />
          <MoviesContextProvider>
            <div style={backgroundStyle}>
              <AppRoutes />
            </div>
          </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App /> {}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
