import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, useNavigate } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ProtectedRoute from "./components/ProtectedRoute";

import SignIn from './components/auth/signIn';
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
import { AuthProvider } from "./contexts/AuthContext";

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
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path="/movies/favorites" element={<ProtectedRoute><FavoriteMoviesPage /></ProtectedRoute>} />
      <Route path="/reviews/:id" element={<ProtectedRoute><MovieReviewPage /></ProtectedRoute>} />
      <Route path="/movies/:id" element={<ProtectedRoute><MoviePage /></ProtectedRoute>} />
      <Route path="/movies/upcoming" element={<ProtectedRoute><UpcomingPage /></ProtectedRoute>} />
      <Route path="/movies/popular" element={<ProtectedRoute><PopularPage /></ProtectedRoute>} />
      <Route path="/movies/now_playing" element={<ProtectedRoute><NowPlayingPage /></ProtectedRoute>} />
      <Route path="/reviews/form" element={<ProtectedRoute><AddMovieReviewPage /></ProtectedRoute>} />
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
        <AuthProvider>
          <SiteHeader />
          <MoviesContextProvider>
            <div style={backgroundStyle}>
              <AppRoutes />
            </div>
          </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
