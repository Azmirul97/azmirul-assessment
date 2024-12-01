import { createContext, ReactNode, useContext, useState } from "react";

interface MovieData {
  Movie_ID: number;
  Title: string;
  Duration: string;
  Views: string;
  Genre: string;
  Poster: string;
  Overall_rating: number;
  Theater_name: string;
  Start_time: string;
  End_time: string;
  Description: string;
  Theater_room_no: number;
}

interface MovieContextType {
  movies: any[]; // You can define a specific type for your movies array
  setMovies: (movies: any[]) => void;
  displayFinder: number;
  setDisplayFinder: (value: number) => void;
  movieDisplay: number;
  setMovieDisplay: (value: number) => void;
  fetchMovies: (params: string) => void;
  searchMovies: (params: {
    theaterName: string;
    timeStart: string;
    timeEnd: string;
    date: string;
  }) => void;
}

// Create the context
const MovieContext = createContext<MovieContextType | undefined>(undefined);

// Custom hook for easier access
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [displayFinder, setDisplayFinder] = useState<number>(0);
  const [movieDisplay, setMovieDisplay] = useState<number>(0);

  const fetchMovies = async (params: string) => {
    try {
      setMovies([]);
      setMovieDisplay(displayFinder);
      const res = await fetch(params);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setMovies(data.data); // Set the movies in context
    } catch (err) {
      console.error(err);
    }
  };

  const searchMovies = async (params: {
    theaterName: string;
    timeStart: string;
    timeEnd: string;
    date: string;
  }) => {
    const { theaterName, timeEnd, date, timeStart } = params;
    let url =
      "https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/new_movies/?r_date=2020-01-01";

    if (displayFinder === 1) {
      // Searching by theater name and date
      url = `https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/specific_movie_theater?theater_name=${encodeURIComponent(
        theaterName
      )}&d_date=${encodeURIComponent(date)}`;
    } else if (displayFinder === 2) {
      // Searching by theater name and time range
      url = `https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/timeslot?theater_name=${encodeURIComponent(
        theaterName
      )}&time_start=${encodeURIComponent(
        timeStart
      )}&time_end=${encodeURIComponent(timeEnd)}`;
    }

    try {
      setMovies([]);
      setMovieDisplay(displayFinder);
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const fetchedMovies = (await res.json()).data as MovieData[];
      setMovies(
        fetchedMovies.filter((movie) =>
          movie.Title.toLowerCase().includes(theaterName.toLowerCase())
        )
      ); // Set the movies in context
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        displayFinder,
        setDisplayFinder,
        movieDisplay,
        setMovieDisplay,
        fetchMovies,
        searchMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
