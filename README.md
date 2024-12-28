# Assignment 2 - Web API.

Name: jeff Halley

## Features.
 
 + Authentication (Login/Signup) using JWT
 + Protected Routes
 + improved styling using css

## Setup requirements.
## API Configuration

1. Clone the Repository
- Clone the repository using the git link

2. Setup environment (API + Frontend Setup)
- Navigate to the following folder in the root of the repository, 'movies-api'

Create a .env file with the following (substitute your own keys into each variable).

- NODE_ENV=development
- PORT=8080
- HOST=localhost
- MONGO_DB=your_mongo_url
- TMDB_KEY=your_tmdb_key
- secret=YourJWTSecret  

Open a terminal on your machine and run the following command to start MongoDB locally:

- mongod  

Navigate to the Movie API folder in another terminal and start the custom API server by running:

- npm install
- npm run dev  

Open another terminal, navigate to the React Movies folder, and start the React application by running:

- npm install
- npm start  

## API Design
## Custom API Endpoints

The following routes interact with the custom API:

- /api/login | POST | Authenticates a user and returns a JWT token.
- /api/signup | POST | Registers a new user in the system.

## TMDB API Routes
The rest of the application fetches data directly from the TMDB API. 

- /movies/:id | GET | Fetches details of a specific movie.
- /movies/upcoming | GET | Retrieves a list of upcoming movies.
- /movies/popular | GET | Fetches a list of popular movies.
- /movies/now_playing | GET | Retrieves a list of currently playing movies.
- /reviews/:id | GET | Displays the review for a specific movie.
- /reviews/form | GET | Displays the form to add a new movie review.


## Security and Authentication

The API uses JWT (JSON Web Token) for authentication and security. This ensures that only authenticated users can access certain routes.

- Login: Users authenticate by providing their credentials (username and password) at the /api/login endpoint. Upon successful authentication, a JWT token is returned, which the client can store.

- Signup: New users can register by submitting their details at the /api/signup endpoint.

- JWT Token: The token is sent in the Authorization header of requests to protected routes as a Bearer token. The API verifies this token to ensure the user is authenticated.

All routes are protected and require a valid JWT token except for the following, which are accessible to all users without authentication:

- /api/login | POST | 
- /api/signup | POST | 
## Integrating with React App
## Updates from Assignment One:
- Protected Routes: Introduced functioning protected routes in the app. Only authenticated users can access pages that are protected. Unauthorized users are redirected to the login page.

- JWT Authentication: Integrated JWT authentication to securely manage user sessions. After logging in, the user’s JWT token is stored and used to access protected routes and perform actions.

- Context for User Info: Implemented context to store and manage user information (e.g., logged-in user's name) across the app. This allows dynamic changes to the UI, such as showing/hiding certain routes based on the user's login status.

- Changes to Login/SignUp Pages: In Assignment One, authentication was handled using Firebase to manage user state, enforce password restrictions, and handle other authentication-related tasks. In the current assignment, these responsibilities are managed directly by the custom API. The new API handles user authentication, including validating passwords, managing user state, and issuing JWT tokens upon successful login. The Login and SignUp pages now integrate with the custom API by redirecting the requests to the local server running at http://localhost:8080. These pages interact with the API directly to authenticate users and register new accounts, instead of relying on Firebase for these tasks.