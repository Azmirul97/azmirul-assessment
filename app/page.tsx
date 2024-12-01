"use client";

import { Box } from "@chakra-ui/react";
import MovieFinder from "./components/MovieFinder";
import MovieDisplay from "./components/MovieDisplay";
import { MovieProvider } from "./components/MovieProvider";
import NavBar from "./components/NavBar";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <Box>
        <MovieProvider>
          <NavBar />
          <MovieFinder />
          <MovieDisplay />
        </MovieProvider>
        <SiteFooter />
      </Box>
    </>
  );
}
