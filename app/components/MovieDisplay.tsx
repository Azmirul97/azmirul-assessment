"use client";
import { TimeIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useMovieContext } from "./MovieProvider";

interface Movie {
  MovieID: number;
  Title: string;
  Duration: string;
  Views: string;
  Genre: string;
  Poster: string;
}

const MovieDisplay = () => {
  const { movieDisplay, movies } = useMovieContext();
  const [newMovies, setNewMovies] = useState<any[]>([]);

  useEffect(() => {
    if (movies) setNewMovies(movies);
  }, [movies]);

  console.log({ movies, newMovies });
  return (
    <>
      <Box
        px={{ base: "5%", md: "10%", lg: "15%" }}
        py={{ base: "5%", md: "10%" }}
        bgColor={"gray.900"}
      >
        {/* <Input
          onChange={(e) => {
            setNewMovies(
              movies.filter((movie) => {
                console.log({
                  searchValue: e.target.value,
                  title: movie.Title,
                });
                return String(movie.Title).includes(e.target.value);
              })
            );
          }}
        /> */}
        {movies.length === 0 ? (
          <Flex justify={"center"} my={300}>
            <Spinner color="yellow.400" boxSize={200} />
          </Flex>
        ) : (
          <Box maxW={"1200px"} margin={"auto"}>
            <HStack justify={"space-between"} marginBottom={5}>
              <Heading color={"white"} my={6}>
                {movieDisplay === 0 ? "New Releases" : "Search Results"}
              </Heading>
              <Link color={"yellow.400"} fontSize={"lg"}>
                View More
              </Link>
            </HStack>
            <Grid
              templateRows={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={4}
            >
              {newMovies.map((movie, index) => (
                <GridItem
                  colSpan={
                    movieDisplay === 0 && index === 0 ? { base: 1, lg: 2 } : 1
                  }
                  bg="linear-gradient(to top, black, #2e2e2e)"
                  p={4}
                  key={movie.MovieID || index}
                  borderRadius="md"
                  overflow="hidden"
                >
                  <VStack align={"start"} h="100%" justify="space-between">
                    <Image
                      src={movie.Poster}
                      alt={movie.Title}
                      borderRadius="md"
                      boxSize="100%"
                      objectFit="cover"
                      maxH="100%"
                      width="100%"
                    />
                    <Box bg={"yellow.400"} borderRadius={10} px={1.5} py={0.5}>
                      <Text fontSize={"xs"}>{movie.Genre}</Text>
                    </Box>
                    <VStack align={"start"} color={"white"}>
                      <Heading size="md">{movie.Title}</Heading>
                      <HStack>
                        <HStack marginRight={3}>
                          <TimeIcon />
                          <Text>{movie.Duration}</Text>
                        </HStack>
                        <HStack>
                          <ViewIcon />
                          <Text>{movie.Views}</Text>
                        </HStack>
                      </HStack>
                    </VStack>
                  </VStack>
                </GridItem>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
};

export default MovieDisplay;
