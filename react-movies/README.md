# Assignment 1 - ReactJS app.

Name: Jeff Halley

## Overview.

This repository contains a Movies app built with React. The app allows users to browse movies, view detailed information, and explore upcoming, popular, and now-playing movies. It integrates Firebase authentication to manage access to certain features and implements routing with protected routes for navigation.

### Features.
+ User authentication with Firebase (sign-in and sign-up).
+ Protected routes to restrict access to certain pages based on user authentication.
+ Fetching and displaying movie lists with two new static endpoints (popular, now-playing) from the TMDB API.
+ fetching relevant reccomendations for movies using parameterised endpoint.
+ `react-query` for data caching.
+ Advanced styling throughout the app.

## Setup requirements.

Install dependencies (only firebase is required):

+ npm install firebase

change the credentials in firebase.js with your own, which can be created by setting up a web app in firebase console

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ Popular movies - /movie/popular
+ Now-playing movies - /movie/now_playing
+ Recommended movies - /movie/:id/recommendations

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /signin - Displays the sign-in page.
+ /signup - Displays the sign-up page.
+ / - Displays the homepage.
+ /movies/upcoming - Displays a list of upcoming movies (protected route).
+ /movies/popular - Displays a list of popular movies (protected route).
+ /movies/now_playing - Displays a list of now-playing movies (protected route).
+ /movies/favorites - Displays the user's favorite movies (protected route).
+ /movies/:id - Displays details for a specific movie.
+ /reviews/:id - Displays reviews for a specific movie.
+ /reviews/form - Allows users to add a new review (protected route)


## Independent learning (If relevant).

Firebase code taken by following tutorial url: https://www.youtube.com/watch?v=Vv_Oi7zPPTw//

attempted to integrate protected routes from following url: https://dev.to/jps27cse/building-a-firebase-authentication-and-private-route-system-in-a-react-app-5203
